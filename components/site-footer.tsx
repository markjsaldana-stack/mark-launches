import { email, linkedInUrl, personName, siteName } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {personName}. {siteName}.
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-orange-600"
          >
            Email
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
