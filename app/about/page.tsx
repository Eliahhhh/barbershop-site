import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Fade District Barber Shop",
  description:
    "Learn about Fade District Barber Shop in Vancouver, BC — modern cuts, skilled barbers, and a welcoming atmosphere.",
};

const barbers = [
  {
    initials: "N",
    name: "Noor",
    bio: "Specialist in fades, lineups, and beard work — bio coming soon.",
  },
  {
    initials: "M",
    name: "Mustafa",
    bio: "Specialist in fades, lineups, and beard work — bio coming soon.",
  },
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

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <h1 className="text-center font-heading text-4xl font-bold uppercase tracking-widest text-amber-400 sm:text-5xl">
            About
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-amber-400" />

          {/* Shop intro */}
          <p className="mt-10 text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
            Fade District is a modern barbershop in the heart of Vancouver, BC.
            We built this place on the belief that everyone deserves a great cut
            in a space that feels welcoming — no pretense, just sharp work and
            good vibes. Whether you&apos;re after a clean fade, a hot towel
            shave, or a fresh lineup, our barbers bring skill and care to every
            chair.
          </p>

          {/* Stripe divider */}
          <div className="my-14">
            <BarberStripe />
          </div>

          {/* Meet the barbers */}
          <ScrollReveal>
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-widest text-amber-400 sm:text-4xl">
            Meet the Barbers
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-amber-400" />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {barbers.map((b) => (
              <li
                key={b.name}
                className="flex flex-col items-center gap-5 rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center"
              >
                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-400 bg-zinc-800">
                  <span className="font-heading text-3xl font-bold text-amber-400">
                    {b.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold uppercase tracking-widest text-white">
                    {b.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {b.bio}
                  </p>
                </div>
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
