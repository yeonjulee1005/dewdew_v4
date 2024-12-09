<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking'
import { AutoPlay, Pagination } from '@egjs/flicking-plugins'
import '@egjs/vue3-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/pagination.css'
import type { DataDatabase } from '~/types/supabase-data'

const { t } = useLocale()
const { path } = useRoute()

useHead({
  title: t('pageTitle.portfolio'),
  meta: [
    { property: 'description', content: t('openGraph.portfolio') },
    { property: 'og:title', content: t('pageTitle.portfolio') },
    { property: 'og:description', content: t('openGraph.portfolio') },
    { property: 'og:url', content: `https://www.dewdew.dev${path}` },
  ],
})

const plugin = [
  new AutoPlay({
    animationDuration: 1000,
    direction: 'NEXT',
    stopOnHover: true,
  }),
  new Pagination({ type: 'scroll' }),
]

const option = {
  inputType: ['touch', 'mouse'],
  circular: true,
  deceleration: 0.0035,
}

const selectedPortfolioData = ref<DataDatabase['data']['Tables']['portfolio']['Row']>()

const { data: portfolioData } = useAsyncData('portfolioData', async () => {
  const { data } = await useFetch('/api/portfolio')

  return data.value
    ? data.value
    : []
}, {
  dedupe: 'defer',
  immediate: true,
})

const selectPortfolio = (item: DataDatabase['data']['Tables']['portfolio']['Row']) => {
  selectedPortfolioData.value = item
}

onMounted(() => {
  selectedPortfolioData.value = portfolioData.value[0]
})
</script>

<template>
  <div class="w-full h-fit flex flex-col items-center justify-center gap-y-6 mt-40">
    <Flicking
      :options="option"
      :plugins="plugin"
    >
      <NuxtImg
        v-for="item in portfolioData"
        :key="item.url"
        class="w-50 h-50 object-cover cursor-pointer border-4 border-stone-300 dark:border-stone-700 rounded-lg hover:border-indigo-400 hover:dark:border-indigo-400/70 transition-border duration-300 ease-in-out mx-4"
        :src="item?.thumbnail_url ?? ''"
        width="200"
        height="200"
        format="webp"
        fit="cover"
        :alt="item?.alt"
        :draggable="false"
        @contextmenu.prevent
        @click="selectPortfolio(item)"
        @mouseenter="selectPortfolio(item)"
      />
      <template #viewport>
        <div class="flicking-pagination portfolio-pagination" />
      </template>
    </Flicking>
    <UCard
      v-if="selectedPortfolioData"
      :ui="{
        root: 'cursor-pointer w-2/3 ring-2 hover:text-indigo-400 transition-text duration-200 ease-in-out',
        body: 'p-0 sm:p-0 sm:py-2 py-2',
      }"
      @click="navigateTo(selectedPortfolioData.url, { external: true, open: { target: '_blank' } })"
    >
      <template #header>
        <div class="flex flex-col gap-2">
          <p class="text-xl sm:text-3xl font-bold">
            {{ $t(`portfolio.${selectedPortfolioData.code}.title`) }}
          </p>
          <p class="text-base sm:text-xl break-keep">
            {{ $t(`portfolio.${selectedPortfolioData.code}.description`) }}
          </p>
        </div>
      </template>
      <NuxtImg
        :src="selectedPortfolioData.description_image_url ?? ''"
        width="800"
        height="100%"
        format="webp"
        fit="cover"
        :alt="selectedPortfolioData.alt ?? ''"
        :draggable="false"
        @contextmenu.prevent
      />
    </UCard>
  </div>
</template>

<style lang="scss">
.flicking-pagination.portfolio-pagination {
  position: relative;
  margin-top: 40px;
  .flicking-pagination-bullet {
    background-color: lightgray !important;
  }
  .flicking-pagination-bullet-active {
    background-color: lightblue !important;
  }
}
</style>
