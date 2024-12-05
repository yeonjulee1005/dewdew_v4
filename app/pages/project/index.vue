<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { viewMenuData } = storeToRefs(useMenuStore())

const projectList = viewMenuData.value?.[1]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]

const moveToProject = (url: string) => {
  url.includes('https')
    ? navigateTo(url, { external: true, open: { target: '_blank' } })
    : navigateTo(url)
}
</script>

<template>
  <div class="w-full h-fit flex items-center justify-center mt-40">
    <div class="w-full flex flex-col items-center gap-y-6">
      <div
        v-for="(subMenu, index) in projectList"
        :key="index"
        class="w-[calc(100dvw-60px)] md:w-[400px] text-center break-keep flex justify-center ring-2 rounded-lg ring-indigo-200/50 dark:ring-indigo-600/50 px-4 py-3 text-xl font-semibold cursor-pointer hover:bg-indigo-50 hover:dark:bg-indigo-500 transition-all duration-200 ease-in-out"
        @click="moveToProject(subMenu.url ?? '')"
      >
        {{ $t(`subMenu.${subMenu.code}`) }}
      </div>
    </div>
  </div>
</template>
