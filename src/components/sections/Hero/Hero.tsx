"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-10 py-20 mt-24 md:flex-row md:justify-between md:items-center">
      <article className="w-full text-center md:text-left">
        <p className="mb-3 font-mono text-base font-semibold text-zinc-50 sm:text-lg md:text-xl">
          {t("hero.saudation")} Gabriel
        </p>
        <h1 className="mb-2 text-3xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 sm:text-4xl md:text-5xl lg:text-6xl">
          {t("hero.developer_front_text")} &
        </h1>
        <h2 className="mb-4 text-4xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 sm:text-5xl md:text-6xl lg:text-7xl">
          {t("hero.developer_mobile_text")}
        </h2>
        <p className="mx-auto text-sm font-semibold leading-relaxed text-gray-400 sm:text-base md:mx-0 md:text-lg">
          {t("hero.first_description")}
        </p>
        <p className="mx-auto mt-2 text-sm font-semibold leading-relaxed text-gray-400 sm:text-base md:mx-0 md:text-lg">
          {t("hero.second_description")}
        </p>
        <Link
          href="/resume"
          className="group relative mt-6 inline-flex overflow-hidden rounded-lg p-px bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 md:mt-8"
          aria-label="Open Resume"
        >
          <span className="relative block rounded-[calc(var(--radius-lg)-1px)] bg-zinc-900 px-5 py-3 text-sm font-semibold text-white sm:px-6 sm:text-base">
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 rounded-[calc(var(--radius-lg)-1px)] bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10">{t("hero.open_resume")}</span>
          </span>
        </Link>
      </article>
      <div className={styles.borderGradient}>
        <div className={styles.frame} />
        <div className={styles.imageWrapper}>
          <Image
            src="/images/my-photo.jpeg"
            alt="My Photo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
