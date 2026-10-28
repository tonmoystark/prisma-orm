"use client";

import { deletePost, getAllPosts } from "@/actions/post-action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const PostCard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => getAllPosts(),
  });

  const clientQuery = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => clientQuery.invalidateQueries({ queryKey: ["post"] }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="flex gap-3 rounded p-4">
      {data?.map((post) => (
        <div className="border rounded p-4" key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.content ? post.content : "No content found"}</h2>
          <button
            className="p-2 bg-rose-600"
            disabled={mutation.isPending}
            onClick={() => mutation.mutate(post.id)}
          >
            {mutation.isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
