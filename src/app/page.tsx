"use client"

export const dynamic = "force-static"

import { authClient } from "@/utils/auth-client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await authClient.signOut()

    if(res.data?.success){
      router.push('/login')
    }

  }
  return <div>
  <Button onClick={handleLogout}>Logout</Button>

  </div>;
}
