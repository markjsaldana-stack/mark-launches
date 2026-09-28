import { impactStats } from "@/lib/content";

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-6 bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Impact by the numbers
          </h2>
          <p className="max-w-2xl text-lg text-gray-500">
            Ten-plus years of product marketing, growth, and CMO work — here&apos;s
            what it moved.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col rounded-2xl border border-amber-100 bg-amber-50 p-6"
            >
              <p className="bg-gradient-to-br from-orange-500 to-rose-500 bg-clip-text text-4xl font-extrabold text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-semibold text-gray-900">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
