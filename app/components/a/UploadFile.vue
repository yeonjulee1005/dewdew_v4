<script setup lang="ts">
const toast = useToast()

const props = withDefaults(
  defineProps<{
    draggable?: boolean
    customClass?: string
    fileTypeAlarm?: string
    fileSizeAlarm?: string
    limitType?: string[]
    limitWidth?: number
    limitHeight?: number
    limitSize?: number
  }>(),
  {
    draggable: true,
    customClass: 'upload-drag-files',
    fileTypeAlarm: '',
    fileSizeAlarm: '',
    limitType: () => [],
    limitWidth: 0,
    limitHeight: 0,
    limitSize: 0,
  },
)

const previewFile = ref('')

const uploadFile = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files && target.files[0]) {
    const file = target.files[0]
    if (!props.limitType.includes(file.type)) {
      toast.add({ title: props.fileTypeAlarm, color: 'warning' })
    }
    else if (file.size / props.limitHeight / props.limitWidth > props.limitSize) {
      toast.add({ title: props.fileSizeAlarm, color: 'warning' })
    }
    else {
      previewFile.value = URL.createObjectURL(file)
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <NuxtImg
      v-if="previewFile"
      class="w-full h-full rounded-md ring-3 ring-indigo-200 dark:ring-indigo-800"
      :src="previewFile"
      width="300"
      height="200"
      fit="cover"
      alt="image-prev"
      :draggable="false"
      @contextmenu.prevent
    />
    <UFormField
      :label="$t('colorsTranslate.uploadFile')"
      size="xl"
      name="upload-file"
      :help="props.fileTypeAlarm.concat(', ', props.fileSizeAlarm)"
    >
      <UInput
        class="w-full"
        type="file"
        trailing-icon="i-akar-icons-cloud-upload"
        @change="uploadFile"
      />
    </UFormField>
  </div>
</template>
