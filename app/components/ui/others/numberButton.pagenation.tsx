"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type NumberPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function NumberPagenation({
  currentPage,
  totalPages,
  onPageChange,
}: NumberPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-3 border-t border-(--line)/60 pt-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-sm text-(--foreground)/70">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-2 rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`min-w-10 rounded-lg px-3 py-1.5 font-semibold transition ${
                page === currentPage
                  ? "bg-(--accent) text-white shadow-sm"
                  : "border border-(--line)/60 bg-white text-(--ink) hover:bg-white/90"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-2 rounded-lg border border-(--line)/60 bg-white px-3 py-1.5 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
