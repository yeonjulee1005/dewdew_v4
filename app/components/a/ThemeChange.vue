<script setup lang="ts">
const colorMode = useColorMode()

withDefaults(
  defineProps<{
    customClass?: string
    buttonVariant?: 'solid' | 'link' | 'outline' | 'soft' | 'subtle' | 'ghost'
  }>(),
  {
    customClass: 'w-8 h-8',
    buttonVariant: 'subtle',
  },
)

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <AButton
    use-leading
    :button-variant="buttonVariant"
    button-size="xl"
    :icon-lead-name="isDark ? 'i-akar-icons-moon' : 'i-akar-icons-sun'"
    :icon-lead-class="customClass"
    @click="isDark = !isDark"
  />
</template>
