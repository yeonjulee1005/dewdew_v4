<script setup lang="ts">
import { helloList } from '~/data/hello'

const state = reactive({
  currentHelloIndex: 0,
  currentHello: helloList[0],
})

let timeoutId: number | undefined

const updateHello = () => {
  state.currentHelloIndex = (state.currentHelloIndex + 1) % helloList.length
  timeoutId = window.setTimeout(updateHello, 5000)
}

watch(() => state.currentHelloIndex, (newIndex) => {
  state.currentHello = helloList[newIndex]
})

onMounted(() => {
  updateHello()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<template>
  <Transition
    name="intro"
    mode="out-in"
  >
    <span
      :key="state.currentHelloIndex"
      class="text-6xl sm:text-8xl font-black break-keep"
    >
      {{ state.currentHello }}
    </span>
  </Transition>
</template>
