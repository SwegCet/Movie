import { createClient } from "@supabase/supabase-js";

// Read .env variables
const supabaseURL = import.meta.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.VITE_SUPABASE_ANON_KEY;

// create singular supabase client for entire app
export const supabase = createClient(supabaseURL, supabaseAnonKey);
