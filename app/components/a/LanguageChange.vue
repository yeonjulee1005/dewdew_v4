<script setup lang="ts">
const { locale, setLocale } = useI18n()

withDefaults(
  defineProps<{
    customClass?: string
    iconLeadClass?: string
    buttonVariant?: 'solid' | 'link' | 'outline' | 'soft' | 'subtle' | 'ghost'
  }>(),
  {
    customClass: '',
    iconLeadClass: 'w-8 h-8',
    buttonVariant: 'ghost',
  },
)

const selectLocale = computed({
  get() {
    return locale.value
  },
  set(value) {
    setLocale(value)
  },
})
</script>

<template>
  <AButton
    use-leading
    :class="customClass"
    :button-variant="buttonVariant"
    button-size="xl"
    :icon-lead-name="selectLocale === 'ko' ? 'i-circle-flags-kr' : 'i-circle-flags-us'"
    :icon-lead-class="iconLeadClass"
    @click="selectLocale = selectLocale === 'ko' ? 'en' : 'ko'"
  />
</template>
