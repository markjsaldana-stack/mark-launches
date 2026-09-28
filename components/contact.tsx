import { ArrowUpRight, Mail } from "lucide-react";
import { email } from "@/lib/site";

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-300 via-pink-400 to-rose-500 px-6 py-20 text-white">
      <div className="absolute top-[-60px] right-[-60px] h-72 w-72 rounded-full bg-yellow-200 opacity-20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Got a launch, a demo, or a messaging problem?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg font-light text-white/90 md:text-xl">
          I&apos;m always happy to talk product marketing, onboarding, and the
          work in between.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-orange-600 shadow-md transition-all hover:shadow-lg motion-safe:hover:scale-105"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {email}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
