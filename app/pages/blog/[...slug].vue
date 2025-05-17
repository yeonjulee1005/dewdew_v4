<script setup lang="ts">
import Giscus from '@giscus/vue'

const { t } = useLocale()
const route = useRoute()

useHead({
  title: t('pageTitle.blog'),
  meta: [
    { property: 'description', content: t('openGraph.blog') },
    { property: 'og:title', content: t('pageTitle.blog') },
    { property: 'og:description', content: t('openGraph.blog') },
    { property: 'og:url', content: `https://www.dewdew.dev${route.path}` },
  ],
})

const { data: blog } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('blog')
    .order('date', 'DESC')
})
</script>

<template>
  <DdContainer class="flex flex-col-reverse sm:flex-row gap-4 mt-40">
    <nav>
      <ul v-if="navigation">
        <li
          v-for="link in navigation"
          :key="link.path"
          class="w-fit"
        >
          <div class="min-w-fit w-48 h-fit flex flex-col gap-2 px-4 py-2 mt-10 rounded-lg ring-2 ring-indigo-200/50">
            <span
              v-if="navigation.length"
              class="text-xl font-semibold"
            >
              {{ $t('blog.recentPost') }}
            </span>
            <NuxtLink
              v-for="(child, index) of link.children"
              v-show="index < 5 && child.path !== '/blog'"
              :key="index"
              class="text-lg break-keep cursor-pointer hover:text-indigo-600 hover:dark:text-indigo-400 transition-colors duration-200 ease-in-out"
              :to="child.path"
            >
              {{ child.title }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
    <DdSeparator class="block mt-10 sm:hidden" />
    <div class="w-full flex flex-col items-end gap-y-2 px-2 py-3">
      <h1 class="text-4xl font-bold text-indigo-500 break-keep">
        {{ blog?.title }}
      </h1>
      <ANuxtTime
        v-if="blog?.date"
        :date-time="blog.date"
      />
      <ContentRenderer
        v-if="blog"
        :value="blog"
      />
      <Giscus
        v-if="blog?.path !== '/blog'"
        id="comments"
        repo="yeonjulee1005/dewdew_v4"
        repo-id="R_kgDONZHIhA"
        category="Blog"
        category-id="DIC_kwDONZHIhM4Ck7BA"
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
  </DdContainer>
</template>
