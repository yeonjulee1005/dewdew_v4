<script setup lang="ts">
definePageMeta({
  layout: 'center',
})
</script>

<template>
  <div class="w-full h-dvh flex flex-col items-center justify-center gap-y-5">
    <IntroTypeTitle />
    <IntroTransitionMessage />
    <IntroController />
  </div>
</template>
