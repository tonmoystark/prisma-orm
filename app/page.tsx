import AllPost from "@/components/AllPost";
import AllUsers from "@/components/AllUsers";
import CreatePost from "@/components/CreatePost";
import { CreateUser } from "@/components/CreateUser";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-900 text-white font-sans ">
      <CreateUser />
      <AllUsers />
      <CreatePost />
      <AllPost />
    </div>
  );
}
