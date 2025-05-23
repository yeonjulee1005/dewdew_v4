import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const schema = String(getQuery(event).schema ?? 'data')
  const tableName = String(getQuery(event).tableName ?? 'portfolio')

  try {
    const { data, error }: SerializeObject = await createClient(config.public.supabaseUrl, config.public.supabaseKey, { db: { schema } })
      .from(tableName)
      .select('*')
      .order('index', { ascending: false })
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
