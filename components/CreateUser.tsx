"use client";

import { createUser } from "@/actions/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const CreateUser = () => {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: (data: FormData) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      formRef.current?.reset();
    },
    onError: (error) => console.log(error),
  });

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <div>
      <h1 className="text-2xl text-center py-5">Create User</h1>
      <form className="flex gap-3" ref={formRef} onSubmit={submitHandler}>
        <Input type="text" placeholder="Enter your name" name="name" />
        <Input type="email" placeholder="Enter your email" name="email" />
        <Button
          variant={"secondary"}
          disabled={mutation.isPending}
          type="submit"
        >
          {mutation.isPending ? "Creating..." : "Create User"}
        </Button>
      </form>
    </div>
  );
};
