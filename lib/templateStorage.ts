import type { CardTemplateItem } from "@/components/card-templates/types";
import defaultCards from "@/components/card-templates/cards.json";

const STORAGE_KEY = "name-cart.templates.v1";

export function getTemplates(): CardTemplateItem[] {
  if (typeof window === "undefined") return defaultCards as CardTemplateItem[];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultCards as CardTemplateItem[];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return defaultCards as CardTemplateItem[];
    return parsed as CardTemplateItem[];
  } catch {
    return defaultCards as CardTemplateItem[];
  }
}

export function saveTemplates(templates: CardTemplateItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
}

export function updateTemplate(id: string, patch: Partial<CardTemplateItem>) {
  const templates = getTemplates();
  const next = templates.map((t) => (t.id === id ? { ...t, ...patch, id: t.id } : t));
  saveTemplates(next);
  return next;
}

export function deleteTemplate(id: string) {
  const templates = getTemplates();
  const next = templates.filter((t) => t.id !== id);
  saveTemplates(next);
  return next;
}

export function resetTemplates() {
  const next = (defaultCards as CardTemplateItem[]).map((item) => ({ ...item }));
  saveTemplates(next);
  return next;
}

