import { useEffect } from "react";
import { useAuthStore } from "../store/auth";
import supabase from "@libs/supabaseClient";
import { type Session } from "@supabase/supabase-js";

export const useAuth = (): {
  session: Session | null;
  isAuthenticated: boolean;
} => {
  const { session, setSession } = useAuthStore();
  const isAuthenticated = session !== null;

  useEffect(() => {
    const getUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      const userSession = data?.session || null;
      setSession(userSession);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(event);
        setSession(session);
      }
    );

    getUserSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession]);

  return { session, isAuthenticated };
};
