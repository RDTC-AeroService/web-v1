"use client";

import { useState } from "react";
import AuthLayout from "../../components/layout/auth/layout";
import LoginUI from "../../components/ui/auth/form";

export default function AuthPage() {
  const [loginError, setLoginError] = useState("");

  return (
    <AuthLayout
      loginError={loginError}
      onClearLoginError={() => setLoginError("")}
    >
      <LoginUI onErrorChange={setLoginError} />
    </AuthLayout>
  );
}
