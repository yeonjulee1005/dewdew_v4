import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const schema = String(getQuery(event).schema ?? 'public')
  const tableName = String(getQuery(event).tableName ?? 'viewArchive')

  try {
    const { data, error } = await createClient(config.public.supabaseUrl, config.public.supabaseKey, { db: { schema } })
      .from(tableName)
      .select('*')
      .order('index', { ascending: true })
      .eq('deleted', false)

    if (error) {
      throw createError({ statusMessage: error.message })
    }

    return data
  }
  catch (error) {
    console.error(error)
  }
})
