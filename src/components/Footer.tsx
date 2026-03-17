import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Borges</div>
        <div className="flex items-center gap-3">
          <Link
            href="https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.6 1.28 2.92 2.86 2.92h.04c1.7 0 2.98-1.32 2.98-2.92C7.88 4.84 6.62 3.5 4.98 3.5zM2.4 21.5h5.18V9H2.4v12.5zM9.62 9h4.96v1.72h.07c.69-1.3 2.39-2.66 4.92-2.66 5.26 0 6.22 3.46 6.22 7.97V21.5h-5.18v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.83-2.72 3.73V21.5h-5.18V9z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/Paulo-Borges"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.071 1.531 1.031 1.531 1.031.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.637-1.339-2.22-.252-4.555-1.111-4.555-4.945 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.698 1.028 1.591 1.028 2.682 0 3.842-2.338 4.69-4.566 4.936.359.309.679.92.679 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
