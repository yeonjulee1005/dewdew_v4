<script setup lang="ts">
const { t } = useLocale()
const { path } = useRoute()

const { textInclude } = useUi()
const { open } = useEyeDropper()
const { copy } = useClipboard()
const toast = useToast()

useHead({
  title: t('pageTitle.colorsTranslate'),
  meta: [
    { property: 'description', content: t('openGraph.colorsTranslate') },
    { property: 'og:title', content: t('pageTitle.colorsTranslate') },
    { property: 'og:description', content: t('openGraph.colorsTranslate') },
    { property: 'og:url', content: `https://www.dewdew.dev${path}` },
  ],
})

const formData = reactive({
  initColor: '',
  backgroundColor: '',
  hexColor: '',
  rgbColor: '',
  hslColor: '',
  cmykColor: '',
})

watch(() => formData.hexColor, () => {
  if (['rgb', 'hls', 'cmyk'].some(colorFormat => textInclude(formData.hexColor, colorFormat))) {
    formData.hexColor = ''
    return
  }
  if (!formData.hexColor.startsWith('#')) {
    formData.hexColor = '#'.concat(formData.hexColor)
  }
  if (formData.hexColor.length === 7) {
    formData.backgroundColor = `background: ${formData.hexColor}`
    hexToRgb(formData.hexColor)
    hexToHsl(formData.hexColor)
  }
}, { immediate: true })

const copyColor = (color: string) => {
  copy(color)
  toast.add({ title: t('messages.copy'), color: 'success' })
}

const initColorData = () => {
  formData.initColor = (Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase())
  formData.backgroundColor = 'background: '.concat('#', String(formData.initColor))
  formData.hexColor = '#'.concat(String(formData.initColor))
}

const colorPicker = () => {
  open().then((res) => {
    if (res) {
      formData.hexColor = res.sRGBHex
    }
  })
}

const hexToRgb = (color: string | undefined) => {
  const initColor = color?.split('#')[1]?.match(/.{1,2}/g)
  if (!initColor?.length) {
    return
  }

  const rgb = 'rgb('.concat(String(parseInt(initColor[0], 16)), ',', String(parseInt(initColor[1] ?? '0', 16)), ',', String(parseInt(initColor[2] ?? '0', 16)), ')')
  rgbToCmyk(parseInt(initColor[0], 16), parseInt(initColor[1] ?? '0', 16), parseInt(initColor[2] ?? '0', 16))
  formData.rgbColor = rgb
}

const hexToHsl = (color: string) => {
  const initColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  if (!initColor?.length) {
    return
  }
  const red = parseInt(initColor[1] ?? '0', 16) / 255
  const green = parseInt(initColor[2] ?? '0', 16) / 255
  const blue = parseInt(initColor[3] ?? '0', 16) / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)

  let h = (max + min) / 2
  let s = h
  let l = h

  if (max === min) {
    formData.hslColor = 'hsl('.concat('0, 0%,', String(l), '%)')
    return
  }

  const d = max - min
  s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  switch (max) {
    case red:
      h = (green - blue) / d + (green < blue ? 6 : 0)
      break
    case green:
      h = (blue - red) / d + 2
      break
    case blue:
      h = (red - green) / d + 4
      break
  }

  h /= 6
  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  h = Math.round(360 * h)
  formData.hslColor = 'hsl('.concat(String(h), ',', String(s), '%,', String(l), '%)')
}

const rgbToCmyk = (red: number, green: number, blue: number) => {
  let c = 1 - (red / 255)
  let m = 1 - (green / 255)
  let y = 1 - (blue / 255)
  let k = Math.min(c, Math.min(m, y))

  c = (c - k) / (1 - k)
  m = (m - k) / (1 - k)
  y = (y - k) / (1 - k)

  c = Math.round(c * 10000) / 100
  m = Math.round(m * 10000) / 100
  y = Math.round(y * 10000) / 100
  k = Math.round(k * 10000) / 100

  c = isNaN(c) ? 0 : c
  m = isNaN(m) ? 0 : m
  y = isNaN(y) ? 0 : y
  k = isNaN(k) ? 0 : k

  formData.cmykColor = 'cmyk('.concat(String(c), ',', String(m), ',', String(y), ',', String(k), ')')
}

initColorData()
</script>

<template>
  <div class="w-full h-fit flex md:flex-row flex-col items-center justify-center gap-x-10 mt-40">
    <div class="flex flex-col gap-10 px-4 py-3">
      <div
        :style="formData.backgroundColor"
        class="w-full h-70 rounded-md ring-3 ring-indigo-200 dark:ring-indigo-800"
      />
      <AUploadFile
        :file-size-alarm="$t('colorsTranslate.fileSize')"
        :file-type-alarm="$t('colorsTranslate.fileType')"
        :limit-type="['image/jpeg', 'image/png', 'image/gif']"
        :limit-height="2048"
        :limit-width="2048"
        :limit-size="10"
      />
      <AButton
        custom-class="flex justify-center text-xl"
        button-size="xl"
        button-variant="subtle"
        use-leading
        icon-lead-name="i-akar-icons-pencil"
        icon-lead-class="w-5 h-5"
        :button-text="$t('colorsTranslate.dropper')"
        @click="colorPicker"
      />
    </div>
    <UForm
      :state="formData"
      class="flex flex-col gap-6 px-4 py-3"
      @submit="() => {}"
    >
      <UFormField
        :label="$t('colorsTranslate.hexLabel')"
        name="hex-color"
        size="xl"
        required
        :help="$t('colorsTranslate.dropperEnv')"
      >
        <AInput
          v-model:input-value="formData.hexColor"
          @copy:color="copyColor"
        />
      </UFormField>
      <UFormField
        :label="$t('colorsTranslate.rgbLabel')"
        name="rgb-color"
        size="xl"
      >
        <AInput
          v-model:input-value="formData.rgbColor"
          input-disabled
          @copy:color="copyColor"
        />
      </UFormField>
      <UFormField
        :label="$t('colorsTranslate.hslLabel')"
        size="xl"
        name="hls-color"
      >
        <AInput
          v-model:input-value="formData.hslColor"
          input-disabled
          @copy:color="copyColor"
        />
      </UFormField>
      <UFormField
        :label="$t('colorsTranslate.cmykLabel')"
        size="xl"
        name="cmyk-color"
      >
        <AInput
          v-model:input-value="formData.cmykColor"
          input-disabled
          @copy:color="copyColor"
        />
      </UFormField>
      <AButton
        custom-class="submit-button flex justify-center text-xl"
        button-variant="subtle"
        button-size="xl"
        :button-text="$t('texts.regenerate')"
        @click="initColorData"
      />
    </UForm>
  </div>
</template>
