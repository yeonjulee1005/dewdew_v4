<script setup lang="ts">
const { t } = useLocale()
const { path } = useRoute()

const splineUrl = 'https://prod.spline.design/piJPNSilaNlBFqN6/scene.splinecode'

useHead({
  title: t('pageSubTitle.hhkb'),
  meta: [
    { property: 'description', content: t('openGraph.hhkb') },
    { property: 'og:title', content: t('pageSubTitle.hhkb') },
    { property: 'og:description', content: t('openGraph.hhkb') },
    { property: 'og:url', content: `https://www.dewdew.dev${path}` },
  ],
})
</script>

<template>
  <div class="w-full h-fit flex flex-col items-center justify-center gap-y-10 px-6 mt-40">
    <p class="w-full text-4xl text-left font-semibold">
      {{ $t('hhkb.title') }}
    </p>
    <ASplineCanvas
      canvas-class="w-full h-[500px]"
      :spline-url="splineUrl"
    />
    <UTextarea
      class="w-full"
      padded
      size="xl"
      autoresize
      :rows="5"
      :placeholder="$t('hhkb.inputPlaceholder')"
      name="hhkb-input"
    />
  </div>
</template>
