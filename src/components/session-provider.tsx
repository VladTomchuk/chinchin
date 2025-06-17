"use client";
import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

function SessionProvider() {
  const dispatch = useAppDispatch();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data.session?.user);
    dispatch(setUser(data.session?.user));
  };

  useEffect(() => {
    readUserSession();
    //eslint-disable-next-line
  }, []);

  return <div></div>;
}

export default SessionProvider;
