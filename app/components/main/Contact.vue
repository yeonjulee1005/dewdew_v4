<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import { send } from '@emailjs/browser'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const config = useRuntimeConfig()

const { t } = useI18n()

const { emailRegex } = useValidation()
const { url } = useImageStorage()

const schema = object({
  name: string()
    .min(2, t('messages.nameFormat'))
    .max(20, t('messages.nameFormat'))
    .required(t('messages.nameRequire')),
  email: string()
    .required(t('messages.emailRequire'))
    .matches(emailRegex, t('messages.emailFormat')),
  message: string()
    .min(20, t('messages.contentFormat'))
    .required(t('messages.contentRequire')),
})

type Schema = InferType<typeof schema>

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  if (!event.isTrusted) {
    return
  }

  await send('dewdew', config.public.emailJSsTemplate, event.data, config.public.emailJsKey).then(() => {
    toast.add({ title: t('messages.successEmailSend'), color: 'success' })
  }).catch(() => {
    toast.add({ title: t('messages.failEmailSend'), color: 'error' })
  })
}
</script>

<template>
  <div class="w-full flex justify-center mt-50 px-6">
    <DdCard
      :ui="{
        root: 'w-fit sm:w-[600px] ring-indigo-400/50 divide-indigo-400/50',
      }"
    >
      <template #header>
        <p class="text-3xl font-bold break-keep">
          {{ $t('main.contact') }}
        </p>
      </template>
      <template #default>
        <div class="w-full flex flex-col gap-y-4">
          <div class="w-full flex flex-wrap items-center gap-2">
            <p class="text-2xl font-bold">
              {{ $t('main.coffeeChat') }}
            </p>
            <AButton
              button-variant="ghost"
              custom-class="text-center text-2xl font-bold w-fit"
              button-size="xl"
              :button-text="$t('main.reservation')"
              @click="navigateTo('https://cal.com/dewdew/60min?user=dewdew&overlayCalendar=true', { external: true, open: { target: '_blank' } })"
            />
          </div>
          <div class="w-full flex flex-col gap-y-2">
            <p class="text-2xl font-bold">
              {{ $t('main.email') }}
            </p>
            <DdForm
              class="flex flex-col gap-y-4"
              :schema="schema"
              :state="formData"
              @submit="onSubmit"
            >
              <DdFormField
                name="name"
                size="xl"
                :label="$t('texts.name')"
                required
              >
                <AInput
                  v-model:input-value="formData.name"
                  input-size="xl"
                  :input-placeholder="$t('placeholder.inputName')"
                />
              </DdFormField>
              <DdFormField
                name="email"
                size="xl"
                :label="$t('texts.email')"
                required
              >
                <AInput
                  v-model:input-value="formData.email"
                  input-size="xl"
                  :input-placeholder="$t('placeholder.inputEmail')"
                />
              </DdFormField>
              <DdFormField
                name="message"
                size="xl"
                :label="$t('texts.message')"
                required
              >
                <DdTextarea
                  v-model="formData.message"
                  class="w-full"
                  size="xl"
                  :rows="5"
                  autoresize
                  :placeholder="$t('placeholder.inputContent')"
                />
              </DdFormField>
              <AButton
                button-block
                button-type="submit"
                button-size="xl"
                button-variant="subtle"
                :button-text="$t('texts.send')"
              />
            </DdForm>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-wrap items-center justify-center gap-x-4">
          <AButton
            button-variant="ghost"
            button-size="xl"
            use-leading
            :image-url="url(true, '/assets/logo/kakao_logo.webp')"
            image-class="w-8 h-8 rounded-md"
            :button-text="$t('main.kakao')"
            @click="navigateTo('https://open.kakao.com/o/subhorMe', { external: true, open: { target: '_blank' } })"
          />
          <AButton
            button-variant="ghost"
            button-size="xl"
            use-leading
            icon-lead-name="i-logos-linkedin-icon"
            :button-text="$t('main.linkedin')"
            @click="navigateTo('https://www.linkedin.com/in/dewdew/', { external: true, open: { target: '_blank' } })"
          />
        </div>
      </template>
    </DdCard>
  </div>
</template>
