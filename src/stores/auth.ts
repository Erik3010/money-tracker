import { create } from "zustand";
import { type Session, type User } from "@supabase/supabase-js";

type AuthState = {
  session: Session | null;
  user: User | null;
};

type AuthAction = {
  setSession: (session: Session | null) => void;
};

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  session: null,
  user: null,
  setSession: (session: Session | null) =>
    set({ session, user: session?.user ?? null }),
}));
