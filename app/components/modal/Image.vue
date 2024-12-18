<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  isFullscreen?: boolean
  useClose?: boolean
  preventClose?: boolean
}>(), {
  title: '',
  description: '',
  isFullscreen: true,
  useClose: true,
  preventClose: false,
})

const imageModalTrigger = defineModel('imageModalTrigger', {
  type: Boolean,
  default: false,
})
</script>

<template>
  <DdModal
    v-model:open="imageModalTrigger"
    :title="title"
    :fullscreen="isFullscreen"
    :description="description"
    :prevent-close="preventClose"
    close-icon="i-lucide-x"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: useClose ? '' : 'hidden',
    }"
    :ui="{
      title: 'text-2xl',
      description: 'text-md font-light',
    }"
  >
    <template #body>
      <slot />
    </template>
  </DdModal>
</template>
