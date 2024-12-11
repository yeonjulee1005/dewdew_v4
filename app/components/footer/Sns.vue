<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { url } = useImageStorage()

const { viewMenuData } = storeToRefs(useMenuStore())
</script>

<template>
  <div class="flex justify-center gap-x-4">
    <ATooltipButton
      v-for="(menu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
      :key="index"
      :custom-class="menu.code !== 'SMC009' ? 'hidden' : 'flex items-center justify-center w-11 h-11'"
      use-leading
      :image-url="url(true, menu.image_url ?? '')"
      button-size="lg"
      button-variant="outline"
      button-color="neutral"
      :tooltip-text="$t(`subMenu.${menu.code}`)"
      @click:button="navigateTo(menu.url ?? '', { external: true, open: { target: '_blank' } })"
    />
    <ATooltipButton
      v-for="(menu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
      :key="index"
      :custom-class="menu.code === 'SMC009' ? 'hidden' : 'flex items-center justify-center w-11 h-11'"
      use-leading
      :icon-lead-name="menu.icon ?? ''"
      icon-lead-class="w-6 h-6"
      button-size="lg"
      button-variant="outline"
      button-color="neutral"
      :tooltip-text="$t(`subMenu.${menu.code}`)"
      @click:button="navigateTo(menu.url ?? '')"
    />
    <!-- <ATooltipButton
      v-for="(menu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
      :key="index"
      use-leading
      :icon-lead-name="menu.icon ?? ''"
      icon-lead-class="w-6 h-6"
      button-size="lg"
      button-variant="outline"
      button-color="neutral"
      :tooltip-text="$t(`subMenu.${menu.code}`)"
      @click:button="navigateTo(menu.url ?? '')"
    /> -->
  </div>
</template>
