"use client";

import { createClient } from '@supabase/supabase-js';

// Browser client — used by the admin dashboard (Supabase Auth session + RLS
// "authenticated" policies). Never used to insert public lead data directly;
// public submissions always go through the server-side /api/leads route.
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
