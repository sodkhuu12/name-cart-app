import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  LayoutTemplate,
  PencilLine,
  Share2,
  Sparkles,
} from "lucide-react";

export default function HomeLanding() {
  return (
    <div className="home-landing relative overflow-hidden bg-linear-to-b from-amber-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-18 pb-10">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-medium text-amber-900 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span className="truncate">Шинэ үеийн digital name card builder</span>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Танилцуулгаа нэг link болгож,
              <span className="block text-amber-600">стилтэй Name Card</span>
              болгон share хий
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
              Template сонгоод, нэр/компани/утас/email-аа засварлаад л боллоо.
              Цэвэрхэн дизайн, хурдан share, mobile-friendly.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 hover:bg-gray-800 transition"
              >
                Template-үүд үзэх <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                Яаж ажилладаг вэ?
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-600">
              <Pill
                icon={<BadgeCheck className="h-4 w-4" />}
                text="Хялбар засвар"
              />
              <Pill
                icon={<Share2 className="h-4 w-4" />}
                text="Link-ээр share"
              />
              <Pill
                icon={<LayoutTemplate className="h-4 w-4" />}
                text="Олон template"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -rotate-2 rounded-[28px] bg-linear-to-br from-amber-200/60 to-orange-200/40 blur-sm" />
            <div className="relative rounded-[28px] border border-amber-200/60 bg-white/70 p-5 sm:p-6 shadow-2xl shadow-amber-500/10 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-semibold text-gray-900">
                  Live preview
                </div>
                <div className="text-xs rounded-full bg-amber-100 text-amber-900 px-3 py-1 font-medium">
                  Ready to share
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-linear-to-br from-gray-900 to-gray-800 p-4 sm:p-6 text-white">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 ring-2 ring-white/20 grid place-items-center text-base sm:text-lg font-bold">
                    NC
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold tracking-wide">
                      Нэр Овог
                    </div>
                    <div className="text-sm text-amber-200 font-medium">
                      Product Designer
                    </div>
                    <div className="text-xs text-white/70">Your Company</div>
                  </div>
                </div>

                <div className="my-4 h-px bg-white/10" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    📞 +976 9911-2233
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3">
                    ✉️ hello@namecard.mn
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm">
                  📍 Ulaanbaatar, Mongolia
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <MiniStat title="Templates" value="5+" />
                <MiniStat title="Edit" value="Instant" />
                <MiniStat title="Share" value="1 link" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16"
      >
        <div className="rounded-3xl border border-gray-200 bg-white shadow-xl shadow-black/5 overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-amber-100 text-amber-900 grid place-items-center">
                <PencilLine className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                3 алхмаар бэлэн болно
              </h2>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Step
                n="01"
                title="Template сонго"
                desc="Дизайнаа сонгоод preview-ээ харна."
              />
              <Step
                n="02"
                title="Мэдээллээ оруул"
                desc="Нэр, role, компанийн мэдээллээ хурдан зас."
              />
              <Step
                n="03"
                title="Share хий"
                desc="Нэг link-ээр хаана ч илгээж болно."
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-amber-50 p-5 border border-amber-200/60">
              <div>
                <div className="font-semibold text-gray-900">
                  Одоо шууд template-үүдээ үзье?
                </div>
                <div className="text-sm text-gray-700">
                  Дараад л засварлах хэсэг рүү орно.
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition shadow-md shadow-amber-600/20"
              >
                Templates <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2">
      <span className="text-amber-700">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
      <div className="text-xs font-semibold text-amber-700">{n}</div>
      <div className="mt-2 text-base font-bold text-gray-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</div>
    </div>
  );
}
