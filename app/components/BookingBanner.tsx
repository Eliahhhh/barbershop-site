"use client";

import { useState, useEffect } from "react";

const BOOKSY_URL =
  "https://booksy.com/en-ca/10101_fresh-cuts-vancouver_barbershop_543637_vancouver#ba_s=sh_1";
const SESSION_KEY = "fd_booking_dismissed";

export default function BookingBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ease-out sm:left-auto sm:right-5 sm:w-80 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/60">
        {/* Barber pole stripe */}
        <div className="flex h-1" aria-hidden>
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-blue-700" />
        </div>

        {/* Content */}
        <div className="px-4 pb-4 pt-3 pr-10">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-amber-400">
            Prefer to book ahead?
          </p>
          <p className="mt-1 text-sm leading-snug text-zinc-300">
            Reserve your spot on Booksy — quick and easy, no waiting.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-amber-300"
          >
            Book on Booksy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 shrink-0"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss booking reminder"
          className="absolute right-2.5 top-3 rounded p-1 text-zinc-500 transition-colors hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
