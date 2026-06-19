import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery | Fade District Barber Shop",
  description:
    "Photos from Fade District Barber Shop in Vancouver, BC. Coming soon.",
};

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="h-12 w-12 text-zinc-600"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  );
}

function BarberStripe() {
  return (
    <div className="flex h-1.5 w-full" aria-hidden>
      <div className="flex-1 bg-red-600" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-blue-700" />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center font-heading text-4xl font-bold uppercase tracking-widest text-amber-400 sm:text-5xl">
            Gallery
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-amber-400" />
          <p className="mt-4 text-center text-sm text-zinc-500">
            Shop photos coming soon — check back shortly.
          </p>

          <ScrollReveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900"
              >
                <CameraIcon />
                <p className="text-sm font-medium text-zinc-500">
                  Photo coming soon
                </p>
              </li>
            ))}
          </ul>
          </ScrollReveal>
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
