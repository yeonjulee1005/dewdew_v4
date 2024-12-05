<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="w-full h-fit flex flex-col gap-y-4 items-center justify-center my-10">
    <div :class="colorMode.value === 'dark' ? 'footer-dark-zigzag' : 'footer-zigzag'" />
    <FooterMenu />
    <FooterSns />
    <FooterInformation />
  </div>
</template>

<style lang="scss" scoped>
.footer-zigzag {
  height: 20px;
  width: 100%;
  border: none;
  background-image: var(--zigzag-footer-pattern);
  background-repeat: repeat-x;
}
.footer-dark-zigzag {
  height: 20px;
  width: 100%;
  border: none;
  background-image: var(--zigzag-footer-dark-pattern);
  background-repeat: repeat-x;
}
</style>
