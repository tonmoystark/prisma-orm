"use client";

import { createUser } from "@/actions/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const CreateUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: FormData) => createUser(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" name="name" />
        <input type="email" placeholder="Enter your email" name="email" />
        <button disabled={mutation.isPending} type="submit">
          {mutation.isPending ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};
