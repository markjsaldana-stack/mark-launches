import { CirclePlay, Quote, Rocket, Target, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  rocket: Rocket,
  play: CirclePlay,
  target: Target,
  quote: Quote,
};

export function Services() {
  return (
    <section id="what-i-do" className="scroll-mt-6 bg-amber-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What I do
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-rose-500">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
