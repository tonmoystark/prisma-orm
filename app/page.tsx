import AllUsers from "@/components/AllUsers";
import { CreateUser } from "@/components/CreateUser";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <CreateUser />
      <AllUsers />
    </div>
  );
}
