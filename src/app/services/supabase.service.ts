import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase = createClient(
    'https://iyeopynkfmiprzzaenxl.supabase.co',
    'sb_publishable_CcCSK4YxDC0xjmepXhqBKg_-mpbUBxQ',
  );
}
