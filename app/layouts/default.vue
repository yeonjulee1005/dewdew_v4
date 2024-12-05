<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <div class="relative w-dvw h-auto lg:w-[900px] flex flex-col items-center overflow-y-scroll overflow-x-hidden">
    <HeaderDesktop />
    <HeaderMobile />
    <slot />
    <FooterGroup />
    <SpeedInsights />
    <InstallPwa />
  </div>
</template>
