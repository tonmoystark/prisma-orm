"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { Button } from "./ui/button";

const GoogleData = () => {
  const { data } = authClient.useSession();

  const logoutBtn = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          console.log("logged out successfully");
        },
      },
    });
  };

  console.log(data);
  return (
    <div>
      <h1>GoogleData</h1>
      <article>
        <h1>{data?.user.email}</h1>
        <h1>{data?.user.name}</h1>
        <Button onClick={logoutBtn} variant="destructive">
          Logout
        </Button>
      </article>
    </div>
  );
};

export default GoogleData;
