<script setup lang="ts">
defineProps(['className'])
</script>

<template>
  <div :class="[className]">
    <slot mdc-unwrap="p" />
  </div>
</template>
