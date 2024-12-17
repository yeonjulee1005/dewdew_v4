<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking'
import { AutoPlay, Pagination } from '@egjs/flicking-plugins'
import '@egjs/vue3-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/pagination.css'

const { t } = useLocale()
const { path } = useRoute()

const { windowSize } = storeToRefs(useWindowStore())

useHead({
  title: t('pageTitle.archive'),
  meta: [
    { property: 'description', content: t('openGraph.archive') },
    { property: 'og:title', content: t('pageTitle.archive') },
    { property: 'og:description', content: t('openGraph.archive') },
    { property: 'og:url', content: `https://www.dewdew.dev${path}` },
  ],
})

const plugin = [
  new AutoPlay({
    animationDuration: 2000,
    direction: 'NEXT',
    stopOnHover: true,
  }),
  new Pagination({ type: 'scroll' }),
]

const option = {
  panelsPerView: windowSize.value > 380 ? 2.5 : 1,
  noPanelStyleOverride: true,
  align: 'prev',
  inputType: ['touch', 'mouse'],
  circular: true,
  circularFallback: 'bound',
  deceleration: 0.004,
}

const selectedArchive = ref<Database['public']['Views']['viewArchive']['Row'] & { archiveList: Database['public']['Tables']['archiveList']['Row'][] }>()
const selectedArchiveImageTitle = ref('')
const selectedArchiveImageUrl = ref('')

const imageModalTrigger = ref(false)

const { data: archiveData } = await useAsyncData('archiveData', async () => {
  const { data } = await useFetch('/api/archive', {
    headers: useRequestHeaders(['cookie']),
    immediate: true,
  })

  return data.value
    ? data.value
    : []
}, {
  dedupe: 'defer',
  immediate: true,
})

const selectArchive = (archiveId: string) => {
  selectedArchive.value = archiveData.value.find((archive: Database['public']['Views']['viewArchive']['Row']) => archive.id === archiveId)
}

const selectArchiveImage = (url: string, title: string) => {
  selectedArchiveImageUrl.value = url
  selectedArchiveImageTitle.value = title
  imageModalTrigger.value = true
}

onMounted(() => {
  selectedArchive.value = archiveData.value.at(-1)
})
</script>

<template>
  <div class="w-full max-w-[1900px] h-fit flex items-center justify-center px-6 mt-40">
    <div class="w-full flex flex-col gap-y-8">
      <p class="text-4xl font-bold">
        {{ $t('archive.title') }}
      </p>
      <DdButtonGroup
        class="w-full flex justify-end"
        :orientation="windowSize > 520 ? 'horizontal' : 'vertical'"
      >
        <AButton
          v-for="(archive, index) in archiveData"
          :key="index"
          custom-class="text-2xl flex justify-center"
          :button-size="windowSize > 520 ? 'xl' : 'sm'"
          button-color="primary"
          button-variant="outline"
          :button-text="archive.title"
          @click="selectArchive(archive.id)"
        />
      </DdButtonGroup>
      <ClientOnly>
        <Flicking
          :options="option"
          :plugins="plugin"
        >
          <NuxtImg
            v-for="(item, index) in selectedArchive?.archiveList"
            :key="index"
            class="w-80 h-[500px] object-cover cursor-pointer border-4 border-stone-300 dark:border-stone-700 rounded-lg hover:border-indigo-400 hover:dark:border-indigo-400/70 transition-border duration-300 ease-in-out mx-4"
            :src="item?.url ?? ''"
            :width="320"
            :height="500"
            format="webp"
            fit="cover"
            :alt="item?.title ?? ''"
            :draggable="false"
            @contextmenu.prevent
            @click="() => selectArchiveImage(item.url ?? '', item.title ?? '')"
          />
          <template #viewport>
            <div class="flicking-pagination archive-pagination" />
          </template>
        </Flicking>
      </ClientOnly>
    </div>
    <ModalImage
      v-model:image-modal-trigger="imageModalTrigger"
      :title="$t(`archive.historyTitle`, { year: selectedArchive?.title })"
    >
      <div class="h-full w-full flex justify-center items-center">
        <NuxtImg
          :src="selectedArchiveImageUrl"
          class="w-auto max-h-[700px] object-cover"
          format="webp"
          fit="cover"
          :alt="selectedArchiveImageUrl"
          :draggable="false"
          @contextmenu.prevent
        />
      </div>
    </ModalImage>
  </div>
</template>
