"use client";

import { createClient } from '@supabase/supabase-js';

// Browser client — used by the admin dashboard (Supabase Auth session + RLS
// "authenticated" policies). Never used to insert public lead data directly;
// public submissions always go through the server-side /api/leads route.
//
// Guarded: if the env vars aren't set (e.g. not yet configured on this
// deployment), export null instead of throwing. createClient() throws
// synchronously at module-load time, and /admin pages get prerendered at
// build time — an unguarded throw here would fail the entire site build,
// not just the admin dashboard. Callers must check for null.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
