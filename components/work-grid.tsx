"use client";

import { useMemo, useState } from "react";
import {
  ExternalLink,
  FileText,
  Globe,
  Sparkles,
  Video,
} from "lucide-react";
import {
  projects,
  workCategories,
  type ProjectCategory,
  type WorkCategory,
} from "@/lib/content";

const categoryStyles: Record<
  ProjectCategory,
  { badge: string; border: string; Icon: typeof Video }
> = {
  Video: {
    badge: "bg-rose-100 text-rose-700",
    border: "border-t-rose-400",
    Icon: Video,
  },
  Web: {
    badge: "bg-blue-100 text-blue-700",
    border: "border-t-blue-400",
    Icon: Globe,
  },
  Content: {
    badge: "bg-amber-100 text-amber-700",
    border: "border-t-amber-400",
    Icon: FileText,
  },
  "AI Tools": {
    badge: "bg-purple-100 text-purple-700",
    border: "border-t-purple-400",
    Icon: Sparkles,
  },
};

export function WorkGrid() {
  const [category, setCategory] = useState<WorkCategory>("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category],
  );

  return (
    <section id="work" className="scroll-mt-6 mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h2 className="mb-2 text-3xl font-bold text-gray-800">My Work</h2>
        <p className="text-gray-500">
          A selection of product marketing assets I&apos;ve created (along with
          bonus cool side projects).
        </p>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="toolbar"
        aria-label="Filter work by type"
      >
        {workCategories.map((item) => {
          const selected = category === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                selected
                  ? "scale-105 bg-orange-500 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {category === "All" ? "" : ` in ${category}`}.
      </p>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-gray-200 px-6 py-12 text-center text-gray-500">
          Nothing in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => {
            const style = categoryStyles[project.category];
            const Icon = style.Icon;
            return (
              <article
                key={`${project.company}-${project.assetType}-${project.href}`}
                className={`flex flex-col rounded-2xl border border-gray-100 border-t-4 bg-white shadow-sm transition-all hover:shadow-md ${style.border}`}
              >
                <div className="flex-1 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}
                    >
                      {project.assetType}
                    </span>
                    <Icon className="h-4 w-4 text-gray-300" aria-hidden="true" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-gray-900">
                    {project.company}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {project.notes}
                  </p>
                </div>
                <div className="px-5 pb-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
                  >
                    View asset
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">
                      : {project.assetType} for {project.company}
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
