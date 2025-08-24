<script setup lang="ts">
import TypeIt from 'typeit'

const { locale } = useI18n()

const { introTitleKo, introTitleEn } = useResumeData()

const helloIntroTitle = ref<HTMLElement | null>(null)

const typeItHello = () => {
  new TypeIt(helloIntroTitle.value, {
    strings: locale.value === 'ko' ? introTitleKo : introTitleEn,
    lifeLike: true,
    speed: 50,
    deleteSpeed: 30,
    loop: true,
  }).go()
}

onMounted(() => {
  typeItHello()
})
</script>

<template>
  <div class="w-dvw sm:w-[600px] h-40 sm:min-h-30 px-6">
    <span
      ref="helloIntroTitle"
      class="text-2xl sm:text-4xl font-bold break-keep py-2"
    />
  </div>
</template>
