import { useAuthStore } from "@stores/auth";
import supabase from "@libs/supabaseClient";
import { useEffect } from "react";

export const useInitializeAuth = () => {
  const { setSession, setIsLoading, getUserSession } = useAuthStore(
    ({ setSession, setIsLoading, getUserSession }) => ({
      setSession,
      setIsLoading,
      getUserSession,
    })
  );

  useEffect(() => {
    getUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("[AuthStateChange]", event);
        setSession(session);
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession, setIsLoading, getUserSession]);
};
