import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="app-footer border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-gray-900">
              Name Card
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Профайл болон бизнес танилцуулгаа нэг холбоос болгон share хийх
              ухаалаг шийдэл.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="transition hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-gray-900">
                Templates
              </Link>
              <a href="#how" className="transition hover:text-gray-900">
                How it works
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <a
                className="flex items-center gap-2 break-all hover:text-gray-900"
                href="mailto:hello@namecard.mn"
              >
                <Mail className="h-4 w-4" />
                hello@namecard.mn
              </a>
              <a
                className="flex items-center gap-2 hover:text-gray-900"
                href="tel:+97699112233"
              >
                <Phone className="h-4 w-4" />
                +976 9911-2233
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ulaanbaatar, Mongolia
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Name Card. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-gray-600 self-start sm:self-auto">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
