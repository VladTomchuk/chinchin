"use client";
import { useTheme } from "@/hooks/useTheme";
import { Center, Input, Text } from "@chakra-ui/react";
import { createBrowserClient } from "@supabase/ssr";
import { ChangeEvent, useState } from "react";

function LoginEmail() {
  const { theme } = useTheme();

  const [email, setEmail] = useState<any>(null);
  const [password, setPassword] = useState<any>();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const onSubmitSignUpHandle = () => {
    supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };
  const emailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <Center>
      <form
        onSubmit={onSubmitSignUpHandle}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "350px",
        }}
      >
        <Input
          placeholder="email"
          type="email"
          onChange={emailInputHandler}
          mb={2}
        />
        <Input
          placeholder="password"
          type="password"
          onChange={passwordInputHandler}
          mb={6}
        />
        <button
          type="submit"
          style={{
            border: `1px solid ${theme.accent}`,
            width: "30%",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
        >
          Sign In
        </button>
      </form>
    </Center>
  );
}

export default LoginEmail;
