"use client";

export const dynamic = "force-static";

import { queryClient } from "@/providers/rq-provider";
import { authClient } from "@/utils/auth-client";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await authClient.signOut();
    queryClient.clear();

    if (res.data?.success) {
      router.push("/login");
    }
  };
  return (
    <div>
      Test Page:
      <Link href="/dashboard">Dashboard</Link>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
