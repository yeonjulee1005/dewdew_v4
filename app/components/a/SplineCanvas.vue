<script setup lang="ts">
useHead({
  script: [
    {
      hid: 'spiine-viewer',
      src: 'https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js',
      type: 'module',
      defer: true,
    },
  ],
})

withDefaults(
  defineProps<{
    canvasClass?: string
    splineUrl: string
  }>(),
  {
    canvasClass: '',
  },
)
</script>

<template>
  <ClientOnly>
    <div :class="canvasClass">
      <spline-viewer :url="splineUrl" />
    </div>
  </ClientOnly>
</template>
