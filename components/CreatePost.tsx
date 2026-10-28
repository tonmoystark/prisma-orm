"use client";
import { createPost } from "@/actions/post-action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

const CreatePost = () => {
  const clientQuery = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: (data: FormData) => createPost(data),
    onSuccess: () => {
      clientQuery.invalidateQueries({ queryKey: ["post"] });
      formRef.current?.reset();
    },
    onError: (error) => console.log(error),
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <div>
      <h1 className="text-2xl text-center py-5">Create Post</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your title" name="title" />
        <input type="text" placeholder="Enter your content" name="content" />
        <button disabled={mutation.isPending} type="submit">
          {mutation.isPending ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
