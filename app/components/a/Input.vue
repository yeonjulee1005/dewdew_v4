<script setup lang="ts">
withDefaults(
  defineProps<{
    inputDisabled?: boolean
    useCopy?: boolean
    inputColor?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error'
    inputSize?: 'xl' | 'lg' | 'xs' | 'sm' | 'md'
    trailingButtonSize?: 'xl' | 'lg' | 'xs' | 'sm' | 'md'
    inputPlaceholder?: string
  }>(),
  {
    inputDisabled: false,
    useCopy: false,
    inputColor: 'primary',
    inputSize: 'xl',
    trailingButtonSize: 'xl',
    inputPlaceholder: '',
  },
)

defineEmits([
  'copy:color',
])

const inputValue = defineModel('inputValue', {
  type: String,
  default: '',
})
</script>

<template>
  <DdInput
    v-model="inputValue"
    class="w-full"
    :color="inputColor"
    :size="inputSize"
    :disabled="inputDisabled"
    :placeholder="inputPlaceholder || $t('placeholder.inputContent')"
    aria-label="hex"
    :ui="{ trailing: 'pe-1' }"
  >
    <template #trailing>
      <div class="space-x-1">
        <AButton
          v-show="!inputValue"
          :button-size="trailingButtonSize"
          button-variant="ghost"
          use-leading
          icon-lead-name="i-akar-icons-circle-x"
          icon-lead-class="w-5 h-5"
          @click="() => inputValue = ''"
        />
        <AButton
          v-if="useCopy"
          :button-size="trailingButtonSize"
          button-variant="ghost"
          use-leading
          icon-lead-name="i-akar-icons-copy"
          icon-lead-class="w-5 h-5"
          @click="() => $emit('copy:color', inputValue)"
        />
      </div>
    </template>
  </DdInput>
</template>
