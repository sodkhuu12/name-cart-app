"use client";

import type { CardTemplateItem } from "@/components/card-templates/types";
import { deleteTemplate, getTemplates, resetTemplates } from "@/lib/templateStorage";
import { Search, Shield, Trash2, Undo2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function AdminPage() {
  const [templates, setTemplates] = useState<CardTemplateItem[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTemplates(getTemplates());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return templates;
    return templates.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.company.toLowerCase().includes(q) ||
        t.email.toLowerCase().includes(q),
    );
  }, [templates, query]);

  const onDelete = (id: string) => {
    const ok = window.confirm("Энэ template-г устгах уу?");
    if (!ok) return;
    setTemplates(deleteTemplate(id));
  };

  const onReset = () => {
    const ok = window.confirm("Бүх template-г default төлөвт сэргээх үү?");
    if (!ok) return;
    setTemplates(resetTemplates());
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-4 sm:px-6 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-lg backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                <Shield className="h-3.5 w-3.5" />
                Admin Panel
              </div>
              <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
                Template Management
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Нийт {templates.length} template байна. Эндээс хайж, засах эсвэл
                устгана.
              </p>
            </div>

            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              <Undo2 className="h-4 w-4" />
              Reset default
            </button>
          </div>

          <div className="mt-5">
            <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Нэр, role, company, email хайх..."
                className="w-full bg-transparent text-sm text-gray-800 outline-none"
              />
            </label>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Company</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                    <td className="px-4 py-3 text-gray-700">{item.role}</td>
                    <td className="px-4 py-3 text-gray-700">{item.company}</td>
                    <td className="px-4 py-3 text-gray-600">{item.email}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/template/${item.id}`}
                          className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 transition"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => onDelete(item.id)}
                          className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100 transition"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              Хайлтад тохирох template олдсонгүй.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
