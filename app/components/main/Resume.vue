<script setup lang="ts">
const { locale } = useCustomLocale()

const { url } = useImageStorage()
const { resumeKoList, resumeEnList } = useResumeData()
</script>

<template>
  <div class="w-full flex justify-center mt-20 sm:mt-50 px-6">
    <DdCard
      :ui="{
        root: 'w-full max-w-[1200px] ring-0 shadow-none py-6',
        body: 'sm:p-0 p-0',
      }"
    >
      <div class="flex flex-col md:flex-row gap-4 md:gap-10">
        <div class="flex flex-col items-center gap-y-12">
          <NuxtImg
            class="w-2/3 md:w-80 h-fit rounded-full ring-4 ring-indigo-400/50"
            :src="url(true, '/assets/banner/resume_img_v4.webp')"
            :height="360"
            :width="360"
            legacy-format="webp"
            loading="lazy"
            fit="cover"
            alt="dewdew"
            sizes="(max-width: 600px) 50vw, 25vw"
            :draggable="false"
            @contextmenu.prevent
          />
          <div class="flex flex-col gap-y-4 rounded-xl bg-gradient-to-tr from-blue-300/50 to-indigo-800/50 dark:from-blue-900 dark:to-indigo-300 px-4 py-3">
            <div>
              <p
                v-for="(text, index) in $tm('main.resume.description.title')"
                :key="index"
                class="text-xl font-bold break-keep"
              >
                {{ $rt(text) }}
              </p>
            </div>
            <div class="flex flex-col gap-y-2">
              <p
                v-for="(text, index) in $tm('main.resume.description.description')"
                :key="index"
                class="text-sm break-keep"
              >
                {{ $rt(text) }}
              </p>
            </div>
          </div>
        </div>
        <AAccordion :accordion-items="locale === 'ko' ? resumeKoList : resumeEnList" />
      </div>
    </DdCard>
  </div>
</template>
