import { listLang } from "astro-i18nya";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import i18nya from "@/i18n";
import { Globe } from "lucide-react";

const langs = Array.from(listLang(i18nya).keys());
const fallbacks = i18nya.config.fallbackLangs ?? {};

const checkSwitchLang = () => {
  const ignores: string[] = [];
  for (const lang of navigator.languages.map(l => l.replace("-", "_"))) {
    const checks = [lang];
    if (lang.includes("_")) checks.push(lang.split("_", 1)[0]);
    for (let check of checks.filter(c => !ignores.includes(c))) {
      if (langs.includes(check)) return check;
      for (ignores.push(check); (check = fallbacks[check]) && !ignores.includes(check); ignores.push(check))
        if (langs.includes(check)) return check;
    }
  }
};

const switchLang = (target: string, currentLang: string, redirect: boolean = true) => {
  console.log(`switchLang: ${currentLang} -> ${target}`);
  if (target === currentLang) return;
  let url = window.location.pathname;
  if (url.startsWith(`/${currentLang}`)) {
    url = url.replace(
      `/${currentLang}`,
      target === i18nya.config.defaultLang ? "" : `/${target}`,
    );
  } else {
    url = `/${target}${url}`;
  }
  const p = new URLSearchParams(window.location.search);
  if (redirect) p.delete("lnr");
  else p.set("lnr", "");
  if (p.size) url += "?" + p.toString();
  window.location.replace(url);
}

let init = false;

export const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  if (!init) {
    init = true;
    const p = new URLSearchParams(window.location.search);
    if (p.get('lnr') === null) {
      const l = checkSwitchLang();
      if (l) switchLang(l, currentLang);
    }
  }
  return (
    <Select
      value={currentLang}
      onValueChange={(value) => switchLang(value, currentLang, false)}
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
