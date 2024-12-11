<script setup lang="ts">
import Giscus from '@giscus/vue'
import type { NavItem } from '@nuxt/content'

const { t } = useLocale()
const { path } = useRoute()

const reverseNavigation = (children: NavItem[] | undefined) => {
  if (!children) {
    return []
  }
  return [...children].reverse()
}

useHead({
  title: t('pageTitle.blog'),
  meta: [
    { property: 'description', content: t('openGraph.blog') },
    { property: 'og:title', content: t('pageTitle.blog') },
    { property: 'og:description', content: t('openGraph.blog') },
    { property: 'og:url', content: `https://www.dewdew.dev${path}` },
  ],
})
</script>

<template>
  <UContainer class="flex flex-col-reverse sm:flex-row gap-4 mt-40">
    <ContentNavigation v-slot="{ navigation }">
      <div class="min-w-fit h-fit flex flex-col gap-2 px-4 py-2 mt-10 rounded-lg ring-2 ring-indigo-200/50">
        <span
          v-if="navigation.length"
          class="text-xl font-semibold"
        >
          {{ $t('blog.recentPost') }}
        </span>
        <NuxtLink
          v-for="(link, index) of reverseNavigation(navigation[0]?.children)"
          v-show="index < 5 && link._path !== '/blog'"
          :key="link._path"
          class="text-lg break-keep cursor-pointer hover:text-indigo-600 hover:dark:text-indigo-400 transition-colors duration-200 ease-in-out"
          :to="link._path"
        >
          {{ link.navTitle || link.title }}
        </NuxtLink>
      </div>
    </ContentNavigation>
    <USeparator class="block mt-10 sm:hidden" />
    <ContentDoc
      v-slot="{ doc }"
      head
    >
      <div class="w-full flex flex-col items-end gap-y-2 px-2 py-3">
        <ANuxtTime
          v-if="doc.date"
          :date-time="doc.date"
        />
        <ContentRenderer :value="doc">
          <h1 class="text-4xl font-bold text-indigo-500 break-keep">
            {{ doc.title }}
          </h1>
          <ContentRendererMarkdown
            class="w-full mb-10 p-2 break-keep"
            :value="doc"
          />
        </ContentRenderer>
        <Giscus
          v-if="doc._path !== '/blog'"
          id="comments"
          repo="yeonjulee1005/dewdew_v4"
          repo-id="R_kgDOKjJUyA"
          category="Blog"
          category-id="DIC_kwDOKjJUyM4Cc6rs"
          mapping="pathname"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          theme="transparent_dark"
          lang="ko"
          loading="lazy"
          crossorigin="anonymous"
          async
        />
      </div>
    </ContentDoc>
  </UContainer>
</template>
