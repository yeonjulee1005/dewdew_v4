<script setup lang="ts">
import type { MenuDatabase } from '~/types/supabase-menu'

const { windowSize } = storeToRefs(useWindowStore())

const { url } = useImageStorage()

const { viewMenuData } = storeToRefs(useMenuStore())

const slideoverTrigger = ref(false)

const moveToNavigation = (url: string, isExternal: boolean) => {
  isExternal
    ? navigateTo(url, { external: true, open: { target: '_blank' } })
    : navigateTo(url)

  slideoverTrigger.value = false
}
</script>

<template>
  <div
    v-if="windowSize <= 890"
    class="fixed top-0 w-dvw h-fit flex items-center justify-center bg-neutral-800/15 dark:bg-neutral-100/40 z-20"
  >
    <div class="w-full h-fit flex items-center justify-between gap-x-9 px-6 py-4">
      <NuxtImg
        class="cursor-pointer rounded-full ring-2 ring-indigo-500 hover:ring-indigo-400 transition-all duration-200 ease-in-out"
        :src="url(true, '/assets/logo/dewdew_v4_logo.webp')"
        sizes="60px sm:60px md:60px lg:60px xl:60px"
        format="webp"
        :width="60"
        :height="60"
        loading="eager"
        :quality="80"
        alt="logo"
        @click="moveToNavigation('/', false)"
      />
      <DdSlideover
        v-model:open="slideoverTrigger"
        :close="{
          color: 'primary',
          variant: 'outline',
          class: 'rounded-full h-12 w-12 flex items-center justify-center',
        }"
        :ui="{
          header: 'h-23 flex items-center',
          close: 'top-6 right-6',
        }"
      >
        <AButton
          use-leading
          button-size="xl"
          button-variant="ghost"
          icon-lead-name="i-akar-icons-sidebar-right"
          icon-lead-class="w-8 h-8"
        />
        <template #header>
          <div class="w-full flex items-center justify-between px-3">
            <NuxtImg
              class="cursor-pointer rounded-full ring-2 ring-indigo-500 hover:ring-indigo-400 transition-all duration-200 ease-in-out m-1.5"
              :src="url(true, '/assets/logo/dewdew_v4_logo.webp')"
              sizes="50px sm:50px md:50px lg:50px xl:50px"
              format="webp"
              :width="50"
              :height="50"
              loading="eager"
              :quality="80"
              alt="logo"
              @click="moveToNavigation('/main', false)"
            />
            <AButton
              button-variant="subtle"
              button-size="xl"
              use-leading
              icon-lead-name="i-akar-icons-circle-x"
              icon-lead-class="w-8 h-8"
              @click="slideoverTrigger = false"
            />
          </div>
        </template>
        <template #body>
          <div class="h-full flex flex-col gap-y-2 px-3 py-4">
            <div
              v-for="(menu, index) in viewMenuData"
              :key="index"
              class="h-14"
              :class="{ hidden: menu.code === 'MNC001' }"
            >
              <ATooltipButton
                class="cursor-pointer"
                use-leading
                :icon-lead-name="menu.icon ?? ''"
                icon-lead-class="w-6 h-6"
                button-size="xl"
                button-variant="ghost"
                button-color="neutral"
                button-label-class="text-xl font-bold truncate"
                :tooltip-text="$t(`menu.${menu.code}`)"
                :button-text="$t(`menu.${menu.code}`)"
                @click:button="moveToNavigation(menu.url ?? '', false)"
              />
            </div>
            <DdSeparator />
            <AForecast class="my-4" />
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
                  @click="moveToNavigation(subMenu.url ?? '', true)"
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
                custom-class="w-7 h-7"
                button-variant="ghost"
              />
              <ALanguageChange custom-class="w-8 h-8" />
            </div>
          </div>
        </template>
      </DdSlideover>
    </div>
  </div>
</template>
