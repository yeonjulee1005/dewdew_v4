export const useCustomLocale = () => {
  const { t, tm, rt, locale, setLocale, setLocaleCookie } = useI18n()
  return { t, tm, rt, locale, setLocale, setLocaleCookie }
}
