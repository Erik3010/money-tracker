import { useAuthStore } from "@stores/auth";
import supabase from "@libs/supabaseClient";
import { useEffect } from "react";

export const useSubscribeAuth = () => {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("[AuthStateChange]", event);
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession]);
};
