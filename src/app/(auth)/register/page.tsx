"use client";

export const dynamic = "force-static";

import { authClient } from "@/utils/auth-client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignupCredT = {
  email: string;
  name: string;
  username: string;
  password: string;
};

export default function SignupPage() {
  const router = useRouter();

  const [signupCred, setSignupCred] = useState<SignupCredT>({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleSignup = async () => {
    const { data } = await authClient.signUp.email(signupCred);

    if (data?.user) {
      router.push("/dashboard");
    }
  };

  return (
    <form>
      <h1 className="text-3xl font-bold"> Register</h1>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        fullWidth
        onChange={(e) =>
          setSignupCred({ ...signupCred, email: e.target.value })
        }
      />
      <TextField
        id="standard-basic"
        label="Full Name"
        variant="standard"
        fullWidth
        onChange={(e) => setSignupCred({ ...signupCred, name: e.target.value })}
      />
      <TextField
        id="standard-basic"
        label="Username"
        variant="standard"
        fullWidth
        onChange={(e) =>
          setSignupCred({ ...signupCred, username: e.target.value })
        }
      />

      <TextField
        type="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        fullWidth
        onChange={(e) =>
          setSignupCred({ ...signupCred, password: e.target.value })
        }
      />
      <div className="mt-4 flex justify-between">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Button variant="contained" onClick={handleSignup}>
          Register
        </Button>
      </div>
    </form>
  );
}
