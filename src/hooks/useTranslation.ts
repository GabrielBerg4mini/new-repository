"use client";

import { useLang } from "@/i18n/LanguageProvider";

export function useTranslation() {
  return useLang();
}
