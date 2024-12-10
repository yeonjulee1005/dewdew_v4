<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { url } = useImageStorage()

const { viewMenuData } = storeToRefs(useMenuStore())
const { windowSize } = storeToRefs(useWindowStore())
</script>

<template>
  <div
    v-if="windowSize > 768"
    class="fixed top-0 w-dvw h-fit flex justify-center bg-neutral-800/15 dark:bg-neutral-100/40 z-20"
  >
    <div class="w-full lg:w-[900px] h-fit flex items-end gap-x-4 px-6 py-4">
      <div
        v-for="(menu, index) in viewMenuData"
        :key="index"
        :class="{ 'min-w-[110px] text-center': menu.code !== 'MNC001' }"
      >
        <NuxtImg
          v-if="menu.code === 'MNC001'"
          class="cursor-pointer rounded-full ring-2 ring-indigo-500 hover:ring-indigo-400 transition-all duration-200 ease-in-out m-1.5"
          :src="url(true, '/assets/logo/dewdew_v4_logo.webp')"
          sizes="80px sm:80px md:80px lg:80px xl:80px"
          format="webp"
          :width="80"
          :height="80"
          loading="eager"
          :quality="80"
          @click="navigateTo(menu.url)"
        />
        <NuxtLink
          v-else
          class="cursor-pointer text-xl font-bold hover:text-2xl transition-all duration-200 ease-in-out"
          :to="menu.url ?? ''"
        >
          {{ $t(`menu.${menu.code}`) }}
        </NuxtLink>
      </div>
      <USeparator
        class="h-6"
        orientation="vertical"
      />
      <div class="flex flex-col items-start gap-y-1">
        <div class="flex items-center gap-x-2">
          <div
            v-for="(subMenu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
            :key="index"
            :class="{ hidden: subMenu.code !== 'SMC007' && subMenu.code !== 'SMC008' }"
          >
            <AButton
              button-variant="ghost"
              use-leading
              :icon-lead-name="subMenu.icon ?? ''"
              icon-lead-class="w-8 h-8"
              @click="navigateTo(subMenu.url ?? '', { external: true, open: { target: '_blank' } })"
            />
          </div>
          <AThemeChange
            custom-class="w-7 h-7"
            button-variant="ghost"
          />
          <ALanguageChange custom-class="w-8 h-8" />
        </div>
        <AForecast />
      </div>
    </div>
  </div>
</template>
