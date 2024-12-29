<script setup lang="ts">
const contribution = ref([
  { icon: 'i-logos-astro-icon', label: 'Astro' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt UI(v3)' },
  { icon: 'i-logos-element', label: 'Element Plus' },
])

const niceLanguages = ref([
  { icon: 'i-logos-typescript-icon', label: 'TypeScript' },
  { icon: 'i-logos-javascript', label: 'JavaScript' },
  { icon: 'i-logos-astro-icon', label: 'Astro' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt3(Nuxt4 Future Version)' },
  { icon: 'i-logos-supabase-icon', label: 'Supabase' },
  { icon: 'i-logos-bun', label: 'Bun' },
  { icon: 'i-logos-yarn', label: 'Yarn' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt UI(v2, v3)' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt Eslint' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt SEO' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt I18n' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt Content' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt Image' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt Color Mode' },
  { icon: 'i-logos-nuxt-icon', label: 'Nuxt Stylelint' },
  { icon: 'i-logos-vueuse', label: 'VueUse' },
  { icon: 'i-logos-vue', label: 'Vue3' },
  { icon: 'i-logos-html-5', label: 'HTML5' },
  { icon: 'i-logos-css-3', label: 'CSS3' },
  { icon: 'i-logos-tailwindcss-icon', label: 'TailwindCSS' },
  { icon: 'i-logos-sass', label: 'Sass' },
  { icon: 'i-logos-stylelint', label: 'Stylelint' },
  { icon: 'i-logos-markdown', label: 'Markdown' },
  { icon: 'i-logos-apache', label: 'Echarts(Apache)' },
  { icon: 'i-logos-chartjs', label: 'Chart.js' },
  { icon: 'i-logos-element', label: 'Element Plus' },
  { icon: '', label: 'Flicking' },
  { icon: 'i-logos-wordpress-icon', label: 'WordPress' },
  { icon: 'i-logos-php', label: 'PHP' },
])

const wellLanguages = ref([
  { icon: 'i-logos-react', label: 'React' },
  { icon: 'i-logos-nextjs-icon', label: 'Next.js' },
  { icon: 'i-logos-deno', label: 'Deno' },
  { icon: 'i-logos-mysql-icon', label: 'MySQL' },
  { icon: 'i-logos-vitejs', label: 'Vite' },
  { icon: 'i-logos-firebase', label: 'Firebase' },
  { icon: 'i-logos-threejs', label: 'Three.js' },
  { icon: 'i-logos-pwa', label: 'PWA' },
  { icon: 'i-logos-storybook-icon', label: 'Storybook' },
])

const usedLanguages = ref([
  { icon: 'i-logos-svelte-icon', label: 'Svelte' },
  { icon: 'i-logos-swift', label: 'Swift' },
  { icon: 'i-logos-kotlin', label: 'Kotlin(Android)' },
  { icon: 'i-logos-flutter', label: 'Flutter' },
  { icon: 'i-logos-nodejs-icon', label: 'Node.js' },
  { icon: 'i-logos-express', label: 'Express' },
  { icon: 'i-logos-python', label: 'Python' },
])

const niceTools = ref([
  { icon: 'i-logos-vercel-icon', label: 'Vercel' },
  { icon: 'i-logos-arc', label: 'Arc' },
  { icon: '', label: 'Cursor' },
  { icon: 'i-logos-visual-studio-code', label: 'VSCode' },
  { icon: 'i-logos-vim', label: 'Vim' },
  { icon: 'i-logos-github-icon', label: 'Github Desktop' },
  { icon: 'i-logos-github-icon', label: 'Github' },
  { icon: 'i-logos-obsidian-icon', label: 'Obsidian' },
  { icon: 'i-logos-terminal', label: 'Terminal' },
  { icon: 'i-logos-safari', label: 'Safari' },
  { icon: 'i-logos-firefox', label: 'Firefox Developer Edition' },
  { icon: 'i-logos-postman', label: 'Postman' },
  { icon: 'i-logos-slack-icon', label: 'Slack' },
  { icon: 'i-logos-microsoft-teams', label: 'Teams' },
  { icon: 'i-logos-jira', label: 'Jira' },
  { icon: 'i-logos-notion-icon', label: 'Notion' },
  { icon: 'i-logos-google-analytics', label: 'Google Analytics' },
  { icon: 'i-logos-amplitude-icon', label: 'Amplitude' },
  { icon: 'i-logos-figma', label: 'Figma' },
])

const wellTools = ref([
  { icon: 'i-logos-microsoft-azure', label: 'Azure' },
  { icon: 'i-logos-squarespace', label: 'Squarespace' },
  { icon: 'i-logos-sentry-icon', label: 'Sentry' },
  { icon: 'i-logos-aws', label: 'AWS' },
  { icon: 'i-logos-aws-lambda', label: 'AWS Lambda' },
  { icon: 'i-logos-aws-ec2', label: 'AWS EC2' },
  { icon: 'i-logos-aws-api-gateway', label: 'AWS API Gateway' },
  { icon: 'i-logos-aws-s3', label: 'AWS S3' },
  { icon: 'i-logos-adobe-xd', label: 'Adobe XD' },
  { icon: 'i-logos-zeplin', label: 'Zeplin' },
])

const usedTools = ref([
  { icon: 'i-logos-docker-icon', label: 'Docker' },
  { icon: 'i-logos-android-vertical', label: 'Android Studio' },
  { icon: 'i-logos-xcode', label: 'Xcode' },
  { icon: 'i-logos-gitlab', label: 'Gitlab' },
  { icon: 'i-logos-jetbrains-icon', label: 'Jetbrains' },
  { icon: 'i-logos-pycharm', label: 'Pycharm' },
  { icon: 'i-logos-hotjar-icon', label: 'Hotjar' },
  { icon: 'i-logos-adobe-illustrator', label: 'Adobe Illustrator' },
  { icon: 'i-logos-adobe-photoshop', label: 'Adobe Photoshop' },
])
</script>

<template>
  <div class="w-full flex justify-center mt-20 sm:mt-50 px-6">
    <DdCard
      :ui="{
        root: 'w-full max-w-[1200px] ring-indigo-400/50 divide-indigo-400/50',
      }"
    >
      <template #header>
        <span class="text-2xl font-bold break-keep">
          {{ $t('main.abilities.title') }}
        </span>
      </template>
      <template #default>
        <MainAbilityCard
          is-contribution
          :title="$t('main.abilities.contribution')"
          :nice-languages="contribution"
        />
        <MainAbilityCard
          :title="$t('main.abilities.language')"
          :nice-title="$t('main.abilities.nice')"
          :well-title="$t('main.abilities.well')"
          :use-title="$t('main.abilities.use')"
          :nice-languages="niceLanguages"
          :well-languages="wellLanguages"
          :used-languages="usedLanguages"
        />
        <MainAbilityCard
          :title="$t('main.abilities.tools')"
          :nice-title="$t('main.abilities.nice')"
          :well-title="$t('main.abilities.well')"
          :use-title="$t('main.abilities.use')"
          :nice-languages="niceTools"
          :well-languages="wellTools"
          :used-languages="usedTools"
        />
      </template>
    </DdCard>
  </div>
</template>
