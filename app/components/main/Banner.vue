<script setup lang="ts">
const { url } = useImageStorage()
</script>

<template>
  <div class="relative sm:w-dvw sm:max-w-[1900px]">
    <span class="absolute w-[220px] sm:w-[400px] md:w-[600px] top-24 sm:top-50 md:top-70 right-[-40px] sm:right-[-120px] md:right-[-160px] text-4xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-tl from-blue-800 via-violet-400/90 to-indigo-700 bg-clip-text text-transparent transform rotate-90 z-10">
      {{ $t('main.intro.largeTitle') }}
    </span>
    <NuxtImg
      :src="url(true, '/assets/banner/main_banner.webp')"
      class="sm:w-dvw sm:max-w-[1900px]"
      width="100%"
      height="100%"
      format="webp"
      fit="cover"
      sizes="(max-width: 600px) 100vw, 50vw"
      loading="lazy"
      :alt="$t('pageTitle.main')"
      :draggable="false"
      @contextmenu.prevent
    />
    <UCard
      :ui="{
        root: 'relative sm:absolute sm:w-[360px] md:w-fit bg-transparent bg-gradient-to-bl from-fuchsia-400/30 via-indigo-400/30 to-sky-400/30 ring-2 ring-indigo-400 divide-indigo-400 sm:top-22 sm:left-16 mt-20 mx-6 sm:mx-0 sm:mt-0',
      }"
    >
      <template #default>
        <p
          v-for="(text, index) in $tm('main.intro.description')"
          v-show="index !== 2"
          :key="index"
          class="font-semibold break-keep"
        >
          {{ $rt(text) }}
        </p>
      </template>
      <template #footer>
        <p
          v-for="(text, index) in $tm('main.intro.description')"
          v-show="index === 2"
          :key="index"
          class="text-sm break-keep"
        >
          {{ $rt(text) }}
        </p>
      </template>
    </UCard>
  </div>
</template>
