<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('pageTitle.main'),
})

const { data: portfolioData } = await useAsyncData('portfolioData', async () => {
  const { data } = await useFetch('/api/portfolio', {
    headers: useRequestHeaders(['cookie']),
    immediate: true,
  })

  return data.value
    ? data.value
    : []
}, {
  dedupe: 'defer',
  immediate: true,
})
</script>

<template>
  <div class="w-full flex flex-col items-center mt-23 md:mt-36">
    <MainBanner />
    <MainResume />
    <MainAbilities />
    <MainPortfolio v-model:main-portfolio-data="portfolioData" />
    <MainContact />
  </div>
</template>
