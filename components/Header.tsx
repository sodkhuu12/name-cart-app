"use client";

import Link from "next/link";
import { LayoutTemplate, Mail, Phone, ScanLine, Shield } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="app-header sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-2xl bg-gray-900 text-white shadow-sm shrink-0">
              <ScanLine className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm sm:text-base font-extrabold tracking-tight text-gray-900">
                Name Card
              </div>
              <div className="hidden sm:block text-xs text-gray-500">
                Digital business identity platform
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              <Link
                href="/"
                className="rounded-xl px-2.5 sm:px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-gray-900 px-2.5 sm:px-3 py-2 font-medium text-white transition hover:bg-gray-800"
              >
                <LayoutTemplate className="h-4 w-4" />
                <span className="hidden sm:inline">Templates</span>
                <span className="sm:hidden">Temp</span>
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            </nav>
            <ThemeToggle />
          </div>

          <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600">
            <Mail className="h-3.5 w-3.5" />
            hello@namecard.mn
            <span className="text-gray-300">|</span>
            <Phone className="h-3.5 w-3.5" />
            +976 9911-2233
          </div>
        </div>
      </div>
    </header>
  );
}
