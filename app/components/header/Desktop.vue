<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { url } = useImageStorage()

const { viewMenuData } = storeToRefs(useMenuStore())
const { windowSize } = storeToRefs(useWindowStore())
</script>

<template>
  <div
    v-if="windowSize > 890"
    class="fixed top-0 w-dvw h-fit flex justify-center bg-neutral-800/15 dark:bg-neutral-100/40 z-20"
  >
    <div class="w-full lg:w-[900px] h-fit flex items-end gap-x-8 px-6 py-4">
      <div
        v-for="(menu, index) in viewMenuData"
        :key="index"
        :class="{ 'min-w-fit text-center': menu.code !== 'MNC001', 'min-w-[100px]': menu.code === 'MNC001' }"
      >
        <NuxtImg
          v-if="menu.code === 'MNC001'"
          class="cursor-pointer rounded-full ring-2 ring-indigo-500 hover:ring-indigo-400 transition-all duration-200 ease-in-out m-1.5"
          :src="url(true, '/assets/logo/dewdew_v4_logo.webp')"
          format="webp"
          sizes="100px sm:100px md:100px lg:100px xl:100px xxl:100px 2xl:100px"
          :width="100"
          :height="100"
          loading="eager"
          :quality="80"
          alt="logo"
          @click="navigateTo(menu.url)"
        />
        <NuxtLink
          v-else
          class="cursor-pointer text-2xl font-bold hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200 ease-in-out"
          :to="menu.url ?? ''"
        >
          {{ $t(`menu.${menu.code}`) }}
        </NuxtLink>
      </div>
      <div class="flex flex-col items-start gap-y-1">
        <div class="flex items-center gap-x-2">
          <div
            v-for="(subMenu, index) in viewMenuData?.[0]?.subMenuList as MenuDatabase['menu']['Tables']['subMenu']['Row'][]"
            :key="index"
            :class="{ hidden: subMenu.code !== 'SMC007' && subMenu.code !== 'SMC008' && subMenu.code !== 'SMC009' }"
          >
            <AButton
              v-if="subMenu.code === 'SMC007' || subMenu.code === 'SMC008'"
              button-variant="ghost"
              use-leading
              :icon-lead-name="subMenu.icon ?? ''"
              icon-lead-class="w-8 h-8"
              @click="navigateTo(subMenu.url ?? '', { external: true, open: { target: '_blank' } })"
            />
            <div
              v-if="subMenu.code === 'SMC009'"
              class="w-11 h-11 flex items-center justify-center p-1.5 cursor-pointer"
              @click="navigateTo(subMenu.url ?? '', { external: true, open: { target: '_blank' } })"
            >
              <NuxtImg
                class="h-[32px] w-[32px] rounded-lg bg-stone-50 hover:ring-4 hover:ring-indigo-600 dark:hover:ring-indigo-400 transition-all duration-200 ease-in-out"
                :src="url(true, subMenu.image_url ?? '')"
                sizes="32px sm:32px md:32px lg:32px xl:32px"
                format="webp"
                :width="32"
                :height="32"
                loading="eager"
                :quality="80"
                alt="logo"
              />
            </div>
          </div>
          <AThemeChange
            custom-class="gap-0"
            icon-lead-class="w-7 h-7"
            button-variant="ghost"
          />
          <ALanguageChange
            custom-class="gap-0"
            icon-lead-class="w-8 h-8"
          />
        </div>
        <AForecast />
      </div>
    </div>
  </div>
</template>
