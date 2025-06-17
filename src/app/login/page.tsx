"use client";
import { Box } from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  return (
    <form action="/auth/signup" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" />
      <button>Sign Up</button>
      {/* <button>Sign In</button> */}
    </form>
    // <main>
    //   <Box>
    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button onClick={handleSignUp}>Sign Up</button>
    //     <button onClick={handleSignIn}>Sign In</button>
    //   </Box>
    // </main>
  );
}
