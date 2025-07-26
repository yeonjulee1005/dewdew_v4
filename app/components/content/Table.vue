<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <div :class="[className]">
    <slot mdc-unwrap="p" />
  </div>
</template>
