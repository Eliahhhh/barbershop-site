import Navbar from "./components/Navbar";
import BookingBanner from "./components/BookingBanner";

const services = [
  { name: "Regular Haircut", price: "$35" },
  { name: "Skin Fade", price: "$40" },
  { name: "Beard Trim", note: "includes razor", price: "$30" },
  { name: "Hair + Beard", price: "$55" },
  { name: "Skin Fade + Beard", price: "$60" },
  { name: "Kids Cut", price: "$30" },
  { name: "Hot Towel Shave", price: "$35" },
];

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

export default function Home() {
  return (
    <>
      <Navbar />
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center bg-black px-4 pb-20 pt-14 text-center">
        <div className="absolute inset-x-0 top-0">
          <BarberStripe />
        </div>

        {/* FD badge */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-400">
          <span className="font-heading text-3xl font-bold tracking-tight text-amber-400">
            FD
          </span>
        </div>

        <h1 className="font-heading text-6xl font-bold uppercase tracking-widest text-amber-400 sm:text-7xl lg:text-8xl">
          Fade District
        </h1>

        <p className="mt-5 font-heading text-xl font-medium uppercase tracking-[0.25em] text-white sm:text-2xl">
          Fades&nbsp;·&nbsp;Shaves&nbsp;·&nbsp;Lineups
        </p>

        <span className="mt-6 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
          Walk-Ins Welcome
        </span>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:6044992551"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-amber-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 shrink-0"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            Call Now
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            View Services
          </a>
          <a
            href="https://booksy.com/en-ca/10101_fresh-cuts-vancouver_barbershop_543637_vancouver#ba_s=sh_1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-amber-400 transition-colors hover:bg-amber-400 hover:text-black"
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 animate-bounce text-white/30"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      <BarberStripe />

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-14 bg-black px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-center text-4xl font-bold uppercase tracking-widest text-amber-400 sm:text-5xl">
            Services
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-amber-400" />

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-5"
              >
                <div>
                  <p className="font-medium text-white">{s.name}</p>
                  {s.note && (
                    <p className="mt-0.5 text-xs text-zinc-400">{s.note}</p>
                  )}
                </div>
                <span className="ml-4 shrink-0 font-heading text-xl font-semibold text-amber-400">
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BarberStripe />

      {/* ── Hours & Location ── */}
      <section id="hours" className="scroll-mt-14 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-14 lg:grid-cols-2">
            {/* Hours */}
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest text-amber-400 sm:text-4xl">
                Hours
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-amber-400" />
              <ul className="mt-8 space-y-0">
                {hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between border-b border-zinc-800 py-4"
                  >
                    <span className="font-medium text-white">{h.days}</span>
                    <span className="text-zinc-300">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-widest text-amber-400 sm:text-4xl">
                Location
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-amber-400" />
              <div className="mt-8">
                <address className="not-italic">
                  <p className="text-lg font-medium text-white">
                    422 W 8th Ave
                  </p>
                  <p className="text-zinc-300">Vancouver, BC&nbsp;V5Y 1N9</p>
                </address>
                <a
                  href="https://maps.google.com/?q=422+W+8th+Ave+Vancouver+BC+V5Y+1N9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-amber-400 transition-colors hover:bg-amber-400/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0"
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 bg-black px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
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
      <BookingBanner />
    </>
  );
}
