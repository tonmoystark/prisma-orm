import { requireUnauth } from "@/lib/auth-guard";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireUnauth();

  return <div>{children}</div>;
};

export default AuthLayout;
