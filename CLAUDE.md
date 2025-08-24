# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `bun dev` or `npm run dev` - Start development server on port 4500
- `bun run dev:host` - Start development server with host access
- `bun run build` - Build the application for production
- `bun run generate` - Generate static site
- `bun run preview` - Preview the built application

### Code Quality
- `bun run lint` - Run ESLint to check for code issues
- `bun run lint:fix` - Run ESLint with automatic fixes
- `bun run test` - Run Vitest tests
- `bun run analyze` - Analyze the bundle

### Supabase
- `bun run supabase:type` - Generate TypeScript types from Supabase schema
- `bun run supabase:type-menu` - Generate menu schema types
- `bun run supabase:type-data` - Generate data schema types

### Utilities
- `bun run cleanup` - Clean up Nuxt generated files
- `bun run delete:modules` - Remove node_modules and .nuxt directories
- `bun run upgrade:force` - Force upgrade Nuxt

## Architecture

This is a Nuxt 4 application (v3.12.1) built as a personal portfolio website for Software Engineer 이연주 (Dewdew). The project uses Bun as the package manager and is deployed on Vercel.

### Tech Stack
- **Framework**: Nuxt 4 with Vue 3
- **Database**: Supabase (PostgreSQL)
- **Styling**: Sass with Nuxt UI components (prefix: 'Dd')
- **State Management**: Pinia with persistence
- **Content**: Nuxt Content for markdown blog posts
- **Internationalization**: @nuxtjs/i18n (Korean/English)
- **Analytics**: Vercel Analytics & Speed Insights
- **PWA**: @vite-pwa/nuxt for progressive web app features

### Project Structure
```
app/
├── components/           # Vue components organized by feature
│   ├── a/               # Atomic components (Button, Input, etc.)
│   ├── content/         # Content-related components
│   ├── footer/          # Footer components
│   ├── header/          # Header components (Desktop/Mobile)
│   ├── intro/           # Introduction/landing components
│   ├── main/            # Main page sections
│   └── modal/           # Modal components
├── composables/         # Vue composables
│   ├── data/           # Data composables (weather, locations, etc.)
│   ├── forecast/       # Weather forecast utilities
│   ├── query/          # API query composables
│   └── util/           # Utility composables
├── layouts/            # Nuxt layouts (default, center)
├── pages/              # File-based routing
├── plugins/            # Nuxt plugins (analytics, error handling)
├── stores/             # Pinia stores
└── types/              # TypeScript type definitions

content/                # Markdown content for blog
server/api/            # Nuxt server API routes
i18n/locales/          # Internationalization files
```

### Key Features
- **Multilingual**: Korean (default) and English support
- **Weather Integration**: Uses public weather APIs with location data
- **Blog**: Markdown-based blog with syntax highlighting
- **Portfolio**: Project showcase with dynamic content
- **Archive**: Photo archive functionality
- **PWA**: Progressive web app with offline capabilities

### Environment Variables
The application expects these environment variables:
- `SUPABASE_URL` & `SUPABASE_KEY` - Database connection
- `EMAILJS_KEY` & `EMAILJS_TEMPLATE` - Contact form functionality
- `DATA_PORTAL_API_KEY` - Public API integration
- `NUXT_PUBLIC_SITE_URL` - Site URL for SEO

### Development Notes
- Uses TypeScript with strict configuration
- ESLint configured with custom rules (single quotes, 2-space indentation)
- Stylelint for SCSS code quality
- Components use Nuxt UI with 'Dd' prefix
- Auto-imports enabled for composables and stores
- SEO optimized with @nuxtjs/seo
- Image optimization with @nuxt/image
- Date handling with date-fns and dayjs

### Deployment
- Configured for Vercel deployment with nitro preset
- Source maps enabled for debugging
- Asset compression (Brotli/Gzip) enabled
- Prerendering configured for blog routes

## Team Development Standards

This project uses structured team development standards located in the `.claude/` directory:

### Team Configuration Files
- **`.claude/conventions.md`** - Coding conventions and naming standards (arrow functions, Nuxt4)
- **`.claude/architecture.md`** - Domain-driven design architecture guidelines  
- **`.claude/code-quality.md`** - Code quality standards and best practices
- **`.claude/lint-rules.md`** - ESLint and Stylelint rules explanation
- **`.claude/typescript-standards.md`** - TypeScript interface/generic type standards
- **`.claude/testing-guide.md`** - Vitest testing strategy and examples
- **`.claude/team-prompts.md`** - Claude prompts for consistent Nuxt4 development

### Using Team Standards
Apply team standards when using Claude Code:

```bash
# Apply team prompts
claude --append-system-prompt "$(cat .claude/team-prompts.md)"

# Or use package script (if added)
bun run claude:team
```

### Development Workflow
1. Follow coding conventions in `.claude/conventions.md`
2. Adhere to architecture patterns in `.claude/architecture.md`
3. Maintain code quality per `.claude/code-quality.md`
4. Run lint commands before committing:
   ```bash
   bun run lint
   bun run lint:fix  
   bun run build
   ```

### Key Standards Summary
- **Functions**: Arrow functions by default, function declarations only for tests
- **Naming**: PascalCase (classes), camelCase (functions/variables), 'Dd' prefix for components
- **TypeScript**: Interface for objects, generics `<T>` for reusability, utility types
- **Nuxt4**: Auto-imports, NuxtLink/NuxtImg, SSR optimization
- **Testing**: Vitest with Given-When-Then pattern, progressive testing (functions → components → pages)
- **Architecture**: Domain-driven design with clear layer separation
- **Code Quality**: Functions ≤20 lines, extract common logic after 3 repetitions
- **Linting**: Single quotes, 2-space indentation, Vue attribute line breaks