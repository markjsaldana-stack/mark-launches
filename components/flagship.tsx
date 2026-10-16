import Image from "next/image";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { flagshipProject } from "@/lib/content";
import radarPreview from "@/public/images/hightouch-radar.jpg";

export function Flagship() {
  const project = flagshipProject;

  return (
    <section id="flagship" className="scroll-mt-6 bg-white px-6 pt-20">
      <div className="mx-auto max-w-5xl">
        <article className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-amber-50 via-white to-rose-50 shadow-sm">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
                Flagship project
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">{project.title}</h2>
              <p className="mt-3 text-lg text-gray-700">{project.summary}</p>
              {project.description.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}

              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
                >
                  Explore Deal Radar
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <span className="text-xs text-gray-500">{project.note}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <span className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="ml-2 truncate text-xs text-gray-400">{project.previewPath}</span>
              </span>
              <Image
                src={radarPreview}
                alt="The Deal Radar deal assistant page, showing what a rep gets at each point in the day: start of day, before a call, after the call, follow-up, and late stage."
                sizes="(min-width: 1024px) 540px, 100vw"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                placeholder="blur"
              />
              <span className="sr-only">Open Deal Radar in a new tab</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
