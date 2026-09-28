import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-orange-50 px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-7xl font-light text-orange-200">404</p>
        <div className="mx-auto mt-2 h-0.5 w-16 bg-orange-100" />
        <h1 className="mt-6 text-2xl font-medium text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 leading-relaxed text-gray-600">
          That page isn&apos;t part of Launch with Mark.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-600"
        >
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
