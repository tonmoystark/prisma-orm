"use client";

import { getAllUsers } from "@/actions/action";
import { useQuery } from "@tanstack/react-query";

const UserCard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getAllUsers(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="flex flex-1 items-center gap-3 justify-center bg-zinc-50 font-sans dark:bg-black">
      {data?.map((user) => (
        <div className="border rounded p-4" key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
