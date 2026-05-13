"use client";

import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { useTranslation } from "@/hooks/useTranslation";

const RESUME_PDF_PATH = "/pdfs/Gabriel%20de%20Souza%20Bergamini%20-%20CV.pdf";

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen text-foreground">
      <section className="flex min-h-screen w-full flex-col px-5 py-8 md:px-20">
        <Link
          href="/"
          className="group text-sm text-foreground-muted transition-colors hover:text-primary mb-4 flex items-center gap-1"
        >
          <IoArrowBackOutline className="transition-transform duration-300 group-hover:-translate-x-1" />{" "}
          {t("back_to_home")}
        </Link>

        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Resume</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">
              Gabriel De Souza Bergamini
            </h1>
          </div>

          <Link
            className="rounded-md border border-foreground-muted px-4 py-2 text-sm text-foreground-muted transition-colors hover:border-primary hover:text-primary "
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("open_pdf")}
          </Link>
        </div>

        <div className="min-h-[75vh] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <iframe
            title="Gabriel de Souza Bergamini resume"
            className="h-[75vh] w-full"
            src={RESUME_PDF_PATH}
          />
        </div>
      </section>
    </main>
  );
}
