"use client";

import { createUser } from "@/actions/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

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
      <form ref={formRef} onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="email" placeholder="Enter your email" name="email" />
        <button disabled={mutation.isPending} type="submit">
          {mutation.isPending ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};
