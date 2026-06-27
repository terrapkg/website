import { listLang } from "astro-i18nya";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import i18nya from "@/i18n";
import { Globe } from "lucide-react";
import { useEffect } from "react";

const langs = Array.from(listLang(i18nya).keys());
const fallbacks = i18nya.config.fallbackLangs ?? {};

const checkSwitchLang = () => {
  const ignores: string[] = [];
  for (const lang of navigator.languages) {
    const checks = [lang];
    if (lang.includes("-")) checks.push(lang.split("-", 1)[0]);
    for (let check of checks.filter((c) => !ignores.includes(c))) {
      if (langs.includes(check)) return check;
      for (
        ignores.push(check);
        (check = fallbacks[check] ?? fallbacks[check.replaceAll('-', '_')]) && !ignores.includes(check);
        ignores.push(check)
      ) {
        if (langs.includes(check = check.replaceAll('_', '-'))) return check;
      }
    }
  }
};

const switchLang = (
  target: string,
  currentLang: string,
) => {
  console.log(`switchLang: ${currentLang} -> ${target}`);
  if (target === currentLang) return;
  // don't redirect again
  localStorage.setItem("um-lnr", "1");
  let url = window.location.pathname;
  if (url.startsWith(`/${currentLang}`)) {
    url = url.replace(
      `/${currentLang}`,
      target === i18nya.config.defaultLang ? "" : `/${target}`,
    );
  } else {
    url = `/${target}${url}`;
  }
  window.location.replace(url);
};

export const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  useEffect(() => {
    if (localStorage.getItem("um-lnr")) return;
    const l = checkSwitchLang();
    if (l) switchLang(l, currentLang);
    // don't redirect again
    localStorage.setItem("um-lnr", "1");
  }, []);
  return (
    <Select
      value={currentLang}
      onValueChange={(value) => switchLang(value, currentLang)}
    >
      <SelectTrigger className="w-auto border-1 shadow-none bg-transparent hover:bg-accent px-2">
        <Globe className="size-5" />
      </SelectTrigger>
      <SelectContent align="end">
        {Array.from(
          listLang(i18nya)
            .entries()
            .map(([locale, lang]) => (
              <SelectItem key={locale} value={locale}>
                {lang}
              </SelectItem>
            )),
        )}
      </SelectContent>
    </Select>
  );
};
