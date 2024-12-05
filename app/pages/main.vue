<script setup lang="ts">
const { t } = useCustomLocale()

useHead({
  title: t('pageTitle.main'),
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="h-[2000px] flex items-center justify-end border-2 border-red-500 mt-32">
    <h1>
      Main
    </h1>
  </div>
</template>
