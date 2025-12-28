import { supabase } from '../lib/supabase'

async function testSupabase() {
  const { data, error } = await supabase.from('_supabase').select('*').limit(1)
  if (error) console.error('Supabase test error:', error)
  else console.log('Supabase test OK:', data)
}

testSupabase()