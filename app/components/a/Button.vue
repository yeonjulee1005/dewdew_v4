<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui'

withDefaults(
  defineProps<{
    customClass?: string
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
    imageUrl?: string
    imageClass?: string
    buttonText?: string
    buttonAvatar?: AvatarProps
    alt?: string
  }>(),
  {
    customClass: 'cursor-pointer',
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
    imageUrl: '',
    imageClass: 'w-8 h-8',
    buttonText: '',
    alt: 'button',
    buttonAvatar: undefined,
  },
)
</script>

<template>
  <DdButton
    :class="customClass"
    :ui="{ base: buttonRounded ? buttonRounded : 'rounded-md' }"
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
        :class="imageClass"
        :src="imageUrl"
        alt="button image"
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
</template>
