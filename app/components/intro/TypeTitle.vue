<script setup lang="ts">
import TypeIt from 'typeit'

const { tm } = useCustomLocale()

const _titleList: { loc: { source: string } }[] = tm('intro.title')

const translatedTitleList = _titleList.map((title: { loc: { source: string } }) => {
  return title.loc.source
})

const typeItHello = () => {
  new TypeIt('#hello-intro-title', {
    strings: translatedTitleList,
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
      id="hello-intro-title"
      class="text-2xl sm:text-4xl font-bold break-keep py-2"
    />
  </div>
</template>
