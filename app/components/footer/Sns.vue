<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { viewMenuData } = storeToRefs(useMenuStore())
</script>

<template>
  <div class="flex justify-center gap-x-4">
    <ATooltipButton
      v-for="(menu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
      :key="index"
      use-leading
      :icon-lead-name="menu.icon ?? ''"
      icon-lead-class="w-6 h-6"
      button-size="lg"
      button-variant="outline"
      button-color="neutral"
      :tooltip-text="$t(`subMenu.${menu.code}`)"
      @click="navigateTo(menu.url ?? '')"
    />
  </div>
</template>
