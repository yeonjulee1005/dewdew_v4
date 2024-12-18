<script setup lang="ts">
withDefaults(
  defineProps<{
    accordionItems: AccordionItem[]
    educateGroupClass?: string
    careerGroupClass?: string
    educateIconClass?: string
    careerIconClass?: string
    educateIconName?: string
    careerIconName?: string
    educateText?: string
    careerText?: string
  }>(),
  {
    educateGroupClass: 'flex items-center gap-x-2 my-2 break-keep',
    careerGroupClass: 'flex items-center gap-x-2 my-2 break-keep',
    educateIconClass: 'w-6 h-6',
    careerIconClass: 'w-6 h-6',
    educateIconName: 'i-akar-icons-key-cap',
    careerIconName: 'akar-icons-flag',
    educateText: 'text',
    careerText: 'text',
  },
)
</script>

<template>
  <DdAccordion
    class="gap-2"
    type="multiple"
    open-icon="i-akar-icons-chevron-down-small"
    close-icon="i-akar-icons-chevron-up-small"
    :items="accordionItems"
    :ui="{
      label: 'text-xl font-semibold text-indigo-700 dark:text-indigo-300 mr-6 break-keep',
      leadingIcon: 'w-6 h-6 text-indigo-700 dark:text-indigo-300',
      trailingIcon: 'w-6 h-6',
    }"
  >
    <template #educate="{ item }">
      <div :class="educateGroupClass">
        <Icon
          :class="educateIconClass"
          :name="educateIconName"
        />
        <p :class="educateText">
          {{ item.description }}
        </p>
      </div>
    </template>
    <template #career="{ item }">
      <div
        v-for="(text, index) in item.description"
        :key="index"
        :class="careerGroupClass"
      >
        <Icon
          :class="careerIconClass"
          :name="careerIconName"
        />
        <p :class="careerText">
          {{ text }}
        </p>
      </div>
    </template>
  </DdAccordion>
</template>
