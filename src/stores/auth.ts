import { create } from "zustand";
import { type Session, type User } from "@supabase/supabase-js";
import supabase from "@libs/supabaseClient";

export type AuthState = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
};

type AuthAction = {
  setSession: (session: Session | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  getUserSession: () => Promise<void>;
};

const initialState = {
  session: null,
  user: null,
  isLoading: true,
};

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  ...initialState,
  setSession: (session: Session | null) =>
    set({ session, user: session?.user ?? null }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  getUserSession: async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const userSession = data?.session || null;
      set({ session: userSession, user: userSession?.user ?? null });
    } finally {
      set({ isLoading: false });
    }
  },
}));
