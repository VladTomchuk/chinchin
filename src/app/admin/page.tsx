"use client";
import { AdminApp } from "@/components/Admin/AdminApp";
import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "@chakra-ui/react";
import { createBrowserClient } from "@supabase/ssr";
import { NextPage } from "next";
import LoginEmail from "./loginEmail";
// const AdminApp = dynamic(() => import("@/components/Admin/AdminApp"), {
//   ssr: false,
// });

const Admin: NextPage = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(setUser(undefined));
  };

  return (
    <>
      {user ? (
        <>
          <Button onClick={handleLogout}>Logout</Button>
          <AdminApp />
        </>
      ) : (
        <>
          <LoginEmail />
        </>
      )}
    </>
  );
};

export default Admin;
