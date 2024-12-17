<script setup lang="ts">
withDefaults(
  defineProps<{
    isContribution?: boolean
    title?: string
    niceTitle?: string
    wellTitle?: string
    useTitle?: string
    niceLanguages?: { icon: string, label: string }[]
    wellLanguages?: { icon: string, label: string }[]
    usedLanguages?: { icon: string, label: string }[]
  }>(),
  {
    isContribution: false,
    title: '',
    niceTitle: '',
    wellTitle: '',
    useTitle: '',
    niceLanguages: () => [],
    wellLanguages: () => [],
    usedLanguages: () => [],
  },
)
</script>

<template>
  <DdCard
    :ui="{
      root: 'ring-0 shadow-none',
      body: 'flex flex-col gap-y-4',
    }"
  >
    <template #header>
      <span class="text-xl font-bold break-keep">
        {{ title }}
      </span>
    </template>
    <div class="flex flex-col gap-4">
      <p v-if="niceTitle">
        {{ niceTitle }}
      </p>
      <div class="flex flex-wrap gap-2">
        <ATooltipButton
          v-for="(item, index) in niceLanguages"
          :key="index"
          use-leading
          :icon-lead-name="item.icon"
          button-variant="outline"
          icon-lead-class="w-6 h-6"
          :button-text="item.label"
        />
      </div>
    </div>
    <div
      v-if="!isContribution"
      class="flex flex-col gap-4"
    >
      <p>
        {{ wellTitle }}
      </p>
      <div class="flex flex-wrap gap-2">
        <ATooltipButton
          v-for="(item, index) in wellLanguages"
          :key="index"
          use-leading
          :icon-lead-name="item.icon"
          button-variant="outline"
          icon-lead-class="w-6 h-6"
          :button-text="item.label"
        />
      </div>
    </div>
    <div
      v-if="!isContribution"
      class="flex flex-col gap-4"
    >
      <p>
        {{ useTitle }}
      </p>
      <div class="flex flex-wrap gap-2">
        <ATooltipButton
          v-for="(item, index) in usedLanguages"
          :key="index"
          use-leading
          :icon-lead-name="item.icon"
          button-variant="outline"
          icon-lead-class="w-6 h-6"
          :button-text="item.label"
        />
      </div>
    </div>
  </DdCard>
</template>
