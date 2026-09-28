import { navLinks, heroStats } from "@/lib/content";
import { email, linkedInUrl, personName } from "@/lib/site";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-orange-300 via-pink-400 to-rose-500 text-white"
    >
      <div className="absolute top-[-80px] left-[-80px] h-72 w-72 rounded-full bg-yellow-200 opacity-30 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[-60px] h-80 w-80 rounded-full bg-pink-200 opacity-20 blur-3xl" />

      <div className="relative z-10">
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-white"
          >
            {personName}
          </a>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="mx-auto max-w-3xl px-6 pt-16 pb-14">
          <span className="mb-5 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium tracking-wide text-white backdrop-blur-sm">
            Product Marketing · Customer Onboarding
          </span>
          <h1 className="mb-4 text-5xl leading-tight font-extrabold md:text-6xl">
            Hi, I&apos;m {personName} 👋
          </h1>
          <p className="max-w-xl text-xl font-light text-white/90 md:text-2xl">
            I help companies deliver value to prospects and customers as
            quickly as possible — through sharper messaging, better onboarding,
            and content that earns trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-white px-6 py-3 font-semibold text-orange-600 shadow-md transition-all hover:shadow-lg motion-safe:hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-14">
          <div className="grid grid-cols-1 gap-8 border-t border-white/30 pt-8 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.value}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
