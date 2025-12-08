"use client";

export const dynamic = "force-static";
import { authClient } from "@/utils/auth-client";
import { useQuery } from "@tanstack/react-query";
import { redirect, usePathname } from "next/navigation";
import Loading from "../loading";
import { queryClient } from "@/providers/rq-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const { data, isLoading } = useQuery({
    queryKey: ["session", pathname],
    queryFn: async () => {
      return await authClient.getSession();
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.data?.user || data?.error) {
    queryClient.clear();
    redirect("/login");
  }

  return <>{children}</>;
}
