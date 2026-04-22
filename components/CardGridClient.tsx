"use client";

import CardTemplate from "@/components/card-templates/page";
import type { CardTemplateItem } from "@/components/card-templates/types";
import { getTemplates } from "@/lib/templateStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CardGridClient() {
  const [templates, setTemplates] = useState<CardTemplateItem[]>([]);

  useEffect(() => {
    setTemplates(getTemplates());
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-200 to-gray-300 px-4 sm:px-6 py-6 flex justify-center">
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        gap-4
        w-full max-w-6xl
        auto-rows-fr
      "
      >
        {templates.map((card) => (
          <div
            key={card.id}
            className="
              relative
              w-full
              mx-auto
              h-full
              min-h-[360px] sm:min-h-[400px]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            <div className="absolute right-3 top-3 z-10">
              <Link
                href={`/template/${card.id}`}
                className="rounded-lg bg-black/70 text-white text-xs px-3 py-2 hover:bg-black/80 transition"
              >
                Edit
              </Link>
            </div>
            <CardTemplate card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

