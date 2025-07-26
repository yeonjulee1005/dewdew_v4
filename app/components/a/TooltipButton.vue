<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui'

withDefaults(
  defineProps<{
    customClass?: string
    hideTooltip?: boolean
    tooltipText?: string
    buttonRounded?: string
    buttonDisabled?: boolean
    buttonPadding?: boolean
    buttonBlock?: boolean
    buttonTruncate?: boolean
    buttonType?: 'button' | 'submit' | 'reset'
    buttonColor?: 'primary' | 'neutral' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
    buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    buttonVariant?: 'solid' | 'link' | 'outline' | 'soft' | 'subtle' | 'ghost'
    useLeading?: boolean
    useTrailing?: boolean
    iconLeadName?: string
    iconLeadClass?: string
    iconTrailName?: string
    iconTrailClass?: string
    buttonLabelClass?: string
    imageUrl?: string
    imageSize?: number
    buttonText?: string
    buttonAvatar?: AvatarProps
    alt?: string
  }>(),
  {
    customClass: '',
    hideTooltip: false,
    tooltipText: '',
    buttonRounded: '',
    buttonDisabled: false,
    buttonPadding: true,
    buttonBlock: false,
    buttonTruncate: false,
    buttonType: 'button',
    buttonColor: 'primary',
    buttonSize: 'sm',
    buttonVariant: 'solid',
    useLeading: false,
    useTrailing: false,
    iconLeadName: '',
    iconLeadClass: 'w-8 h-8',
    iconTrailName: '',
    iconTrailClass: 'w-8 h-8',
    buttonLabelClass: '',
    imageUrl: '',
    imageSize: 30,
    buttonText: '',
    buttonAvatar: undefined,
    alt: 'button',
  },
)

defineEmits([
  'click:button',
])
</script>

<template>
  <DdTooltip
    :text="tooltipText ? tooltipText : buttonText"
    :disabled="hideTooltip"
    :content="{
      align: 'center',
      side: 'bottom',
      sideOffset: 8,
    }"
    :ui="{
      content: 'visible [@media(pointer:coarse)]:visible h-6 px-2 py-1 text-xs font-normal truncate relative text-indigo-600 dark:text-indigo-400',
    }"
  >
    <DdButton
      :class="customClass"
      :ui="{ base: buttonRounded ? buttonRounded : 'rounded-md', label: buttonLabelClass, container: 'gap-0' }"
      :disabled="buttonDisabled"
      :block="buttonBlock"
      :truncate="buttonTruncate"
      :padded="buttonPadding"
      :avatar="buttonAvatar"
      :color="buttonColor"
      :size="buttonSize"
      :type="buttonType"
      :variant="buttonVariant"
      :label="buttonText"
      :aria-label="alt"
      @click="$emit('click:button')"
    >
      <template
        v-if="useLeading"
        #leading
      >
        <Icon
          v-if="iconLeadName"
          :name="iconLeadName"
          :class="iconLeadClass"
        />
        <NuxtImg
          v-if="imageUrl"
          :src="imageUrl"
          :width="imageSize"
          alt="image"
        />
      </template>
      <template
        v-if="useTrailing"
        #trailing
      >
        <Icon
          v-if="iconTrailName"
          :class="iconTrailClass"
          :name="iconTrailName"
        />
      </template>
    </DdButton>
  </DdTooltip>
</template>
