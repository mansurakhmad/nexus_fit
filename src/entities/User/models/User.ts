import type { Nullable } from '@/shared/utils';
import type { User as UserAuth } from '@supabase/supabase-js';

export namespace User {
  export type Gender = 'XY' | 'XX';

  export type ProfileData = Nullable<{
    birthday: Date;
    created_at: string;
    email: string;
    first_name: string;
    gender: Gender;
    id: string;
    last_name: string;
    username: string;
    phone_code: number;
    phone_number: number;
  }>;

  export interface Model extends UserAuth {
    profileData: ProfileData;
  }
}
