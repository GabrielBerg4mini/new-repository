import Link from "next/link";

const RESUME_PDF_PATH = "/pdfs/Gabriel%20de%20Souza%20Bergamini%20-%20CV.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Resume</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">
              Gabriel Bergamini
            </h1>
          </div>

          <Link
            className="rounded-md border border-foreground-muted px-4 py-2 text-sm text-foreground-muted transition-colors hover:border-primary hover:text-primary"
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF
          </Link>
        </div>

        <div className="min-h-[75vh] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <iframe
            title="Gabriel Bergamini resume"
            className="h-[75vh] w-full"
            src={RESUME_PDF_PATH}
          />
        </div>
      </section>
    </main>
  );
}
