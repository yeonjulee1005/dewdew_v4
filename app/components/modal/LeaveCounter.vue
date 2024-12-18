<script setup lang="ts">
const { idle } = useIdle(3 * 60 * 1000)

let countInterval: ReturnType<typeof setInterval> | null = null

const count = ref(30)

const idleTrigger = computed(() => {
  return idle.value
})
const leaveDialogTrigger = ref(false)

watch(() => idleTrigger.value, () => {
  if (idleTrigger.value) {
    leaveDialogTrigger.value = true
    generateCountInterval(0, 1000, countDisplay)
  }
  else if (countInterval !== null) {
    clearInterval(countInterval)
  }
}, { immediate: true },
)

const generateCountInterval = (count: number, delay: number, callback: (countDown: number, count: number) => void): void => {
  let countDown = 30

  countInterval = setInterval(() => {
    callback(countDown, count)
    if (countDown-- === count || !leaveDialogTrigger.value) {
      if (countInterval !== null) {
        clearInterval(countInterval)
      }
    }
  }, delay)
}

const countDisplay = (index: number, _count: number): void => {
  if (!index) {
    leaveDialogTrigger.value = false
    navigateTo('/')
  }
  count.value = index
}
</script>

<template>
  <DdModal
    v-model:open="leaveDialogTrigger"
    :title="$t('messages.leavePage')"
    :description="$t('messages.leavePageDesc')"
    close-icon="i-lucide-x"
    :close="{
      color: 'primary',
      variant: 'outline',
    }"
    :ui="{
      title: 'text-2xl',
      description: 'text-md font-light',
    }"
  >
    <template #body>
      <div class="flex flex-col justify-center items-center">
        <DdProgress
          v-model="count"
          :max="30"
          size="xl"
          animation="elastic"
        />
      </div>
    </template>
  </DdModal>
</template>
