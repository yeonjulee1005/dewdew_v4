<script setup lang="ts">
import type { DataDatabase } from '~/types/supabase-data'

const mainPortfolioData = defineModel('mainPortfolioData', {
  type: Array as PropType<DataDatabase['data']['Tables']['portfolio']['Row'][]>,
  default: () => [],
})

const navigatePortfolio = (url: string) => {
  navigateTo(url, { external: true, open: { target: '_blank' } })
}
</script>

<template>
  <div class="relative w-full flex justify-center mt-50 px-6">
    <div class="w-full max-w-[1200px] flex flex-col gap-y-10 z-10">
      <div
        class="w-fit flex flex-col gap-y-1 cursor-pointer hover:text-indigo-400 transition-text duration-200 ease-in-out"
        @click="navigateTo('/portfolio')"
      >
        <p class="text-4xl font-bold">
          {{ $t('main.portfolio.title') }}
        </p>
        <p class="text-stone-500">
          {{ $t('main.portfolio.description') }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div
          v-for="item in mainPortfolioData"
          :key="item.id"
          class="cursor-pointer flex flex-col justify-center items-center"
          @click="navigatePortfolio(item.url ?? '')"
          @touchstart="navigatePortfolio(item.url ?? '')"
        >
          <ASplineCanvas
            v-if="item.dynamic_thumbnail_url"
            canvas-class="w-60 h-60 object-cover rounded-xl ring-2 ring-indigo-400 dark:ring-indigo-400 hover:ring-4 hover:ring-indigo-400/70 hover:dark:ring-indigo-400/70 transition-ring duration-200 ease-in-out"
            :spline-url="item.dynamic_thumbnail_url"
          />
          <NuxtImg
            v-else
            class="w-60 h-60 object-cover rounded-xl ring-2 ring-indigo-400 dark:ring-indigo-400 hover:ring-4 hover:ring-indigo-400/70 hover:dark:ring-indigo-400/70 transition-ring duration-200 ease-in-out"
            :src="item.description_image_url ?? ''"
            width="200"
            height="200"
            format="webp"
            loading="lazy"
            fit="cover"
            :alt="item.alt ?? ''"
            :draggable="false"
            @contextmenu.prevent
          />
          <span class="text-xl font-semibold mt-2">
            {{ $t(`portfolio.${item.code}.title`) }}
          </span>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-[-20%] w-[1000px] h-[1000px] bg-red-500/30 rounded-full animated-first-circle" />
    <div class="absolute top-[45%] right-[30%] w-[400px] h-[400px] bg-green-500/30 rounded-full animated-second-circle" />
    <div class="absolute top-[70%] left-[20%] w-[200px] h-[200px] bg-blue-500/30 rounded-full animated-third-circle" />
    <div class="absolute bottom-0 right-[-10%] w-[700px] h-[700px] bg-orange-500/30 rounded-full animated-fourth-circle" />
  </div>
</template>

<style scoped>
@keyframes first-circle {
  0%, 100% {
    width: 1000px;
    height: 1000px;
  }
  50% {
    width: 1020px;
    height: 1020px;
  }
}
@keyframes second-circle {
  0%, 100% {
    width: 420px;
    height: 420px;
  }
  50% {
    width: 400px;
    height: 400px;
  }
}
@keyframes third-circle {
  0%, 100% {
    width: 200px;
    height: 200px;
  }
  50% {
    width: 220px;
    height: 220px;
  }
}
@keyframes fourth-circle {
  0%, 100% {
    width: 730px;
    height: 730px;
  }
  50% {
    width: 700px;
    height: 700px;
  }
}

.animated-first-circle {
  animation: first-circle 3s infinite ease-in-out;
}

.animated-second-circle {
  animation: second-circle 5s infinite ease-in-out;
}

.animated-third-circle {
  animation: third-circle 13s infinite ease-in-out;
}

.animated-fourth-circle {
  animation: fourth-circle 7s infinite ease-in-out;
}
</style>
