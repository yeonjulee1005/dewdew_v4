import { defineStore } from 'pinia'
import type { MenuDatabase } from '~/types/supabase-menu'

export const useMenuStore = defineStore('useMenuStore', () => {
  /**
   * ! Pinia State !
   *
   * @param viewMenuData 메뉴 데이터
   *
   */

  const viewMenuData = ref<MenuDatabase['menu']['Views']['viewMenu']['Row'][] & { subMenuList: MenuDatabase['menu']['Tables']['subMenu']['Row'][] }>()

  return {
    viewMenuData,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})
