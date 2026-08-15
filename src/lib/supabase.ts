import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables strictly from Vite env configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Developer safety check to prevent obscure network errors
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) {
  console.warn(
    '⚠️ [COGNORA Supabase Warning]: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not configured in .env file. ' +
    'Please set valid credentials from your Supabase Dashboard.'
  );
}

// Initialize production-ready Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Anonymous lead capture forms do not require auth session persistence
    autoRefreshToken: false,
  },
  db: {
    schema: 'public',
  },
});
