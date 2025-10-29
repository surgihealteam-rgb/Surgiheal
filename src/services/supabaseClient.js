// Supabase client helper
// IMPORTANT: Do NOT commit your actual keys. Use environment variables as shown below.

import { createClient } from "@supabase/supabase-js";

// Vite exposes environment variables that start with VITE_. Use these in the browser build.
// Create a .env.local (or similar) with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Don't crash the app — export stub functions that give actionable errors.
  console.warn(
    "Supabase URL or ANON key not found. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set (see .env.example)."
  );
} else {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    // adjust fetch options or global settings here if needed
  });
}

export { supabase };

// Example helpers (they throw a helpful error if supabase is not configured)
function missingConfigError() {
  return new Error(
    "Supabase client not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment (see .env.example) and restart the dev server."
  );
}

export async function insertSurgiHealRecord(record) {
  if (!supabase) throw missingConfigError();
  // Normalize common field names so this helper works across slight schema variants
  const payload = { ...record };
  if (!payload.name && payload.full_name) payload.name = payload.full_name;
  // record should now match the table columns, e.g. { name, email, phone, service, doctor, appointment_date, notes }
  const { data, error } = await supabase
    .from("Surgiheal_appointments")
    .insert(payload)
    .select();
  if (error) throw error;
  return data;
}

export async function listSurgiHeal(limit = 50) {
  if (!supabase) throw missingConfigError();
  const { data, error } = await supabase
    .from("Surgiheal_appointments")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data;
}
