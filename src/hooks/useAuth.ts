import { useEffect } from "react";
import { useAuthStore } from "@stores/auth";
import supabase from "@libs/supabaseClient";
import { type Session, type User } from "@supabase/supabase-js";

export const useAuth = (): {
  session: Session | null;
  user: User | null;
  isAuthenticated: boolean;
} => {
  const { session, user, setSession } = useAuthStore();
  const isAuthenticated = session !== null;

  useEffect(() => {
    const fetchUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      const userSession = data?.session || null;
      setSession(userSession);
    };

    fetchUserSession();
  }, [setSession]);

  return { session, user, isAuthenticated };
};
