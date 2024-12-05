<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div class="w-full flex flex-col items-center gap-y-0.5">
    <span class="text-center text-xs break-keep">
      {{ $t('texts.copyright') }}
    </span>
    <span class="text-center text-xs break-keep">
      {{ $t('texts.designed') }}
    </span>
    <span class="text-center text-xs break-keep">
      {{ $t('texts.version', { version: config.public.appVersion.replaceAll('"', '') }) }}
    </span>
  </div>
</template>
