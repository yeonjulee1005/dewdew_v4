<template>
  <div class="flex items-center gap-6 mt-10">
    <ATooltipButton
      custom-class="text-2xl"
      button-size="xl"
      button-variant="outline"
      :tooltip-text="$t('button.moveMain')"
      :button-text="$t('button.moveMain')"
      @click:button="navigateTo('/main')"
    />
    <AThemeChange custom-class="gap-0" />
  </div>
</template>
