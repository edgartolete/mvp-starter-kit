"use client";

export const dynamic = "force-static";

import { authClient } from "@/utils/auth-client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginCredT = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [loginCred, setLoginCred] = useState<LoginCredT>({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    const { data } = await authClient.signIn.username(loginCred);

    if (data?.user) {
      router.push("/dashboard");
    }
  };

  return (
    <form>
      <h1 className="text-3xl font-bold"> Login</h1>
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        fullWidth
        onChange={(e) =>
          setLoginCred({ ...loginCred, username: e.target.value })
        }
      />
      <TextField
        type="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={(e) =>
          setLoginCred({ ...loginCred, password: e.target.value })
        }
        fullWidth
      />
      <div className="mt-4 flex justify-between">
        <Link href="/register">
          <Button>Register</Button>
        </Link>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </form>
  );
}
