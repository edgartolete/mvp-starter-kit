"use client";

export const dynamic = "force-static";
import { authClient } from "@/utils/auth-client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    authClient.getSession().then((res) => {
      console.log("#", { res });
      if (!res.data || res.error) {
        redirect("/login");
      }
    });
  }, []);

  return <>{children}</>;
}
