"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import CardTemplate from "@/components/card-templates/page";
import type { CardTemplateItem } from "@/components/card-templates/types";
import { getTemplates, updateTemplate } from "@/lib/templateStorage";

export default function Page() {
  const params = useParams();
  const router = useRouter();

  const id = useMemo(() => {
    const raw = params?.id;
    return typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : "";
  }, [params]);

  const [card, setCard] = useState<CardTemplateItem | null>(null);
  const [form, setForm] = useState<Partial<CardTemplateItem>>({});
  const [avatarInputMode, setAvatarInputMode] = useState<"url" | "upload">(
    "url",
  );
  const [logoInputMode, setLogoInputMode] = useState<"url" | "upload">("url");

  useEffect(() => {
    const found = getTemplates().find((c) => c.id === id) ?? null;
    setCard(found);
    setForm(found ?? {});
  }, [id]);

  if (!card) {
    return <div>Card not found</div>;
  }

  const previewCard: CardTemplateItem = {
    ...card,
    ...form,
    id: card.id,
    theme: card.theme,
    companyLogoUrl: form.companyLogoUrl ?? card.companyLogoUrl,
    cardColor: form.cardColor ?? card.cardColor,
    fontFamily: form.fontFamily ?? card.fontFamily,
  };

  const onChange =
    (key: keyof CardTemplateItem) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const onLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageUpload(e, "companyLogoUrl");
  };

  const onAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageUpload(e, "avatarUrl");
  };

  const onImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "avatarUrl" | "companyLogoUrl",
  ) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setForm((prev) => ({ ...prev, [key]: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const onSave = () => {
    const next = updateTemplate(card.id, {
      name: form.name ?? card.name,
      role: form.role ?? card.role,
      company: form.company ?? card.company,
      bio: form.bio ?? card.bio,
      phone: form.phone ?? card.phone,
      email: form.email ?? card.email,
      location: form.location ?? card.location,
      avatarUrl: form.avatarUrl ?? card.avatarUrl,
      companyLogoUrl: form.companyLogoUrl ?? card.companyLogoUrl,
      cardColor: form.cardColor ?? card.cardColor,
      fontFamily: form.fontFamily ?? card.fontFamily,
    });
    const updated = next.find((c) => c.id === card.id) ?? card;
    setCard(updated);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-200 to-gray-300 px-4 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="min-h-[420px]">
          <CardTemplate card={previewCard} />
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h1 className="text-xl font-bold text-gray-900">Template засах</h1>

          <div className="mt-5 space-y-4">
            {/* <Field label="Template ID">
              <input
                value={card.id}
                disabled
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-gray-100 text-gray-600"
              />
            </Field> */}

            <Field label="Нэр">
              <input
                value={form.name ?? ""}
                onChange={onChange("name")}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
              />
            </Field>

            <Field label="Албан тушаал">
              <input
                value={form.role ?? ""}
                onChange={onChange("role")}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
              />
            </Field>

            <Field label="Компани">
              <input
                value={form.company ?? ""}
                onChange={onChange("company")}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
              />
            </Field>

            <Field label="Тайлбар (bio)">
              <textarea
                value={form.bio ?? ""}
                onChange={onChange("bio")}
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Утас">
                <input
                  value={form.phone ?? ""}
                  onChange={onChange("phone")}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
                />
              </Field>

              <Field label="Email">
                <input
                  value={form.email ?? ""}
                  onChange={onChange("email")}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
                />
              </Field>
            </div>

            <Field label="Байршил">
              <input
                value={form.location ?? ""}
                onChange={onChange("location")}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
              />
            </Field>

            <Field label="Avatar input mode">
              <select
                value={avatarInputMode}
                onChange={(e) =>
                  setAvatarInputMode(e.target.value as "url" | "upload")
                }
                className="h-11 w-full rounded-xl border border-gray-300 px-4 bg-white"
              >
                <option value="url">URL оруулах</option>
                <option value="upload">Image upload хийх</option>
              </select>
            </Field>

            {avatarInputMode === "url" ? (
              <Field label="Avatar URL">
                <input
                  value={form.avatarUrl ?? ""}
                  onChange={onChange("avatarUrl")}
                  placeholder="https://your-avatar.png"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
                />
              </Field>
            ) : (
              <Field label="Avatar upload (image)">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onAvatarUpload}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white file:mr-3 file:rounded-lg file:border-0 file:bg-gray-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                />
              </Field>
            )}

            <Field label="Company logo input mode">
              <select
                value={logoInputMode}
                onChange={(e) =>
                  setLogoInputMode(e.target.value as "url" | "upload")
                }
                className="h-11 w-full rounded-xl border border-gray-300 px-4 bg-white"
              >
                <option value="url">URL оруулах</option>
                <option value="upload">Image upload хийх</option>
              </select>
            </Field>

            {logoInputMode === "url" ? (
              <Field label="Company Logo URL">
                <input
                  value={form.companyLogoUrl ?? ""}
                  onChange={onChange("companyLogoUrl")}
                  placeholder="https://your-company-logo.png"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white"
                />
              </Field>
            ) : (
              <Field label="Logo upload (image)">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onLogoUpload}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-white file:mr-3 file:rounded-lg file:border-0 file:bg-gray-900 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                />
              </Field>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Картын өнгө">
                <input
                  type="color"
                  value={form.cardColor ?? card.cardColor ?? "#111827"}
                  onChange={onChange("cardColor")}
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white p-1"
                />
              </Field>

              <Field label="Текстийн фонт">
                <select
                  value={
                    form.fontFamily ?? card.fontFamily ?? "Arial, sans-serif"
                  }
                  onChange={onChange("fontFamily")}
                  className="h-11 w-full rounded-xl border border-gray-300 px-4 bg-white"
                >
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="'Inter', sans-serif">Inter</option>
                  <option value="'Georgia', serif">Georgia</option>
                  <option value="'Trebuchet MS', sans-serif">
                    Trebuchet MS
                  </option>
                  <option value="'Courier New', monospace">Courier New</option>
                </select>
              </Field>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50 transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={onSave}
                className="flex-1 rounded-xl bg-black text-white px-4 py-2 hover:bg-black/90 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      {children}
    </label>
  );
}
