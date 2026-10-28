import React from "react";
import UserCard from "./UserCard";

type Props = {};

const AllUsers = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl text-center py-5">AllUsers</h1>
      <UserCard />
    </div>
  );
};

export default AllUsers;
