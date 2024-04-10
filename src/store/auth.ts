import { create } from "zustand";
import { type Session } from "@supabase/supabase-js";

type AuthState = {
  session: Session | null;
};

type AuthAction = {
  setSession: (session: Session | null) => void;
};

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  session: null,
  setSession: (session: Session | null) => set({ session }),
}));
