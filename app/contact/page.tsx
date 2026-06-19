import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Fade District Barber Shop",
  description:
    "Visit Fade District Barber Shop at 422 W 8th Ave, Vancouver, BC. Call 604-499-2551 or book online on Booksy.",
};

const BOOKSY_URL =
  "https://booksy.com/en-ca/10101_fresh-cuts-vancouver_barbershop_543637_vancouver#ba_s=sh_1";

const hours = [
  { days: "Mon – Fri", time: "10am – 8pm" },
  { days: "Saturday", time: "10am – 6pm" },
  { days: "Sunday", time: "11am – 5pm" },
];

function BarberStripe() {
  return (
    <div className="flex h-1.5 w-full" aria-hidden>
      <div className="flex-1 bg-red-600" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-blue-700" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <h1 className="text-center font-heading text-4xl font-bold uppercase tracking-widest text-amber-400 sm:text-5xl">
            Contact
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-amber-400" />

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* ── Left column: info ── */}
            <div className="space-y-10">
              {/* Address & phone */}
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-widest text-amber-400">
                  Visit Us
                </h2>
                <div className="mt-3 h-0.5 w-10 bg-amber-400" />
                <address className="mt-6 not-italic">
                  <p className="text-lg font-medium text-white">
                    422 W 8th Ave
                  </p>
                  <p className="text-zinc-300">Vancouver, BC&nbsp;V5Y 1N9</p>
                  <a
                    href="tel:6044992551"
                    className="mt-2 block text-zinc-300 transition-colors hover:text-amber-400"
                  >
                    604-499-2551
                  </a>
                </address>
                <a
                  href="https://maps.google.com/?q=422+W+8th+Ave+Vancouver+BC+V5Y+1N9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors hover:bg-amber-400/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5 shrink-0"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 1 0-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742zM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-widest text-amber-400">
                  Hours
                </h2>
                <div className="mt-3 h-0.5 w-10 bg-amber-400" />
                <ul className="mt-6">
                  {hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between border-b border-zinc-800 py-3"
                    >
                      <span className="font-medium text-white">{h.days}</span>
                      <span className="text-zinc-300">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book online */}
              <div>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-widest text-amber-400">
                  Book Online
                </h2>
                <div className="mt-3 h-0.5 w-10 bg-amber-400" />
                <p className="mt-4 text-sm text-zinc-400">
                  Skip the wait — reserve your spot on Booksy in seconds.
                </p>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-amber-300"
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
            </div>

            {/* ── Right column: map ── */}
            <div className="overflow-hidden rounded-xl border border-zinc-800">
              <iframe
                src="https://maps.google.com/maps?q=422+W+8th+Ave+Vancouver+BC+V5Y+1N9&output=embed&z=16"
                title="Fade District Barber Shop on Google Maps"
                width="100%"
                height="100%"
                className="block min-h-80 w-full lg:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>

      <BarberStripe />

      <footer className="border-t border-zinc-800 bg-black px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-heading text-xl font-bold uppercase tracking-widest text-amber-400">
            Fade District
          </p>
          <address className="not-italic">
            <p className="mt-2 text-sm text-zinc-500">
              422 W 8th Ave, Vancouver, BC&nbsp;V5Y 1N9
            </p>
            <a
              href="tel:6044992551"
              className="mt-1 block text-sm text-zinc-500 transition-colors hover:text-amber-400"
            >
              604-499-2551
            </a>
          </address>
        </div>
      </footer>
    </>
  );
}
