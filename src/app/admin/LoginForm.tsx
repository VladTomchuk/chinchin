"use client";
import { Button } from "@chakra-ui/react";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

function LoginForm() {
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <>
      <Button onClick={handleLogin}>Login by github</Button>
    </>
  );
}

export default LoginForm;
