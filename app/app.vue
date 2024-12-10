<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const { coords, resume } = useGeolocation()

const { width } = useWindowSize()
const { userAgent } = useDevice()
const appConfig = useAppConfig()
const { meta } = useRoute()

const { t } = useCustomLocale()

const { genDateFormat } = useUi()

const { windowSize } = storeToRefs(useWindowStore())
const { viewMenuData } = storeToRefs(useMenuStore())
const locWeatherStore = useLocWeatherStore()
const { geoX, geoY, latitude, longitude, forecastHour, currentLocationCode } = storeToRefs(locWeatherStore)
const { fetchLivingData, fetchWeatherData } = locWeatherStore

const { filteredLocations } = useKorLocation()
const { dfsXyConvert } = useTranslateCoords()

const seoTitle = 'Dewdew | Software Engineer 이연주'
const seoDescription = 'Dewdew는 소프트웨어 엔지니어 이연주의 웹페이지 입니다. 주로 프론트엔드 개발(Nuxt3)에 관심이 있습니다.'
const seoUrl = 'https://www.dewdew.dev'
const seoImage = 'https://api.dewdew.dev/storage/v1/object/public/assets/banner/main_banner.webp'

useHead({
  title: (meta.title as string) ?? t('pageTitle.dewdew'),
  titleTemplate: (title?: string | undefined): string | null => {
    if (!title) {
      return t('pageTitle.dewdew').concat(' | ', '메인')
    }

    return !title.includes(t('pageTitle.dewdew'))
      ? t('pageTitle.dewdew').concat(' | ', title)
      : title
  },
  link: [
    { rel: 'canonical', href: seoUrl },
    { rel: 'manifest', href: '/manifest.webmanifest' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/image/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/image/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/image/favicon-96x96.png' },
    { rel: 'alternate', type: 'application/rss+xml', href: '/rss.xml' },
  ],
  meta: [
    { name: 'naver-site-verification', content: '7c406de71b03c1e444a4fe2630a29bd7a8e17559' },
    { property: 'imagetoolbar', content: 'no' },
  ],
  script: [
    {
      hid: 'spiine-viewer',
      src: 'https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js',
      type: 'module',
      defer: true,
    },
  ],
})

if (!userAgent.includes('APP_Dewdew')) {
  useHead({
    script: [
      {
        hid: 'google-adsense',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9720546940719922',
        crossorigin: 'anonymous',
        defer: true,
      },
    ],
    meta: [
      { name: 'google-adsense-account', content: 'ca-pub-9720546940719922' },
    ],
  })
}

useSeoMeta({
  charset: 'utf-16',
  formatDetection: 'telephone=no',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  title: (meta.title as string) || seoTitle,
  author: 'Dewdew',
  description: (meta.description as string) || seoDescription,
  themeColor: '#41573d',
  msapplicationTileColor: '#41573d',
  ogTitle: (meta.title as string) || seoTitle,
  ogDescription: (meta.description as string) || seoDescription,
  ogImage: seoImage,
  ogImageType: 'image/png',
  ogType: 'website',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: (meta.title as string) || seoTitle,
  twitterDescription: (meta.description as string) || seoDescription,
  twitterImage: seoImage,
  twitterSite: '@dewdew',
  twitterCreator: '@dewdew',
})

useAsyncData('menuData', async () => {
  const { data } = await useFetch('/api/menuData', {
    headers: useRequestHeaders(['cookie']),
    immediate: true,
  })

  viewMenuData.value = data.value

  return []
}, {
  dedupe: 'defer',
  immediate: true,
})

watch(() => genDateFormat('HH'), () => {
  if (genDateFormat('HH').concat('00') !== forecastHour.value) {
    fetchLivingData()
    fetchWeatherData()
  }
})

watch(() => coords.value, () => {
  if (coords.value.latitude === Infinity) {
    resume()
    return
  }

  initWeatherData()
}, { immediate: true })

const initWeatherData = () => {
  const rs = dfsXyConvert('toXY', coords.value.latitude, coords.value.longitude)

  geoX.value = Math.floor(rs.x ?? 0)
  geoY.value = Math.floor(rs.y ?? 0)

  latitude.value = rs.lat
  longitude.value = rs.lng

  currentLocationCode.value = filteredLocations(geoX.value, geoY.value)

  fetchLivingData()
  fetchWeatherData()
}

watch(width, () => {
  if (import.meta.client) {
    windowSize.value = width.value
  }
}, {
  immediate: true,
})
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtLoadingIndicator
        color="repeating-linear-gradient(to right,#f1f4fc 0%,#6a64c7 100%)"
        :height="5"
      />
      <NuxtPage />
      <InstallPwa />
    </NuxtLayout>
    <SpeedInsights />
  </UApp>
</template>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';
@theme {
  --font-family-sans: 'Pretendard Variable', Pretendard, Roboto, -apple-system, BlinkMacSystemFont, 'SUIT Variable', system-ui, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  --color-indigo-50: #f1f4fc;
  --color-indigo-100: #e6eaf9;
  --color-indigo-200: #d2d8f3;
  --color-indigo-300: #b6bfeb;
  --color-indigo-400: #989fe1;
  --color-indigo-500: #8b8dda;
  --color-indigo-600: #6a64c7;
  --color-indigo-700: #5b54ae;
  --color-indigo-800: #4a468d;
  --color-indigo-900: #403e71;
  --color-indigo-950: #262442;
}

.break-keep {
  word-break: keep-all;
}
</style>
