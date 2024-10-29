import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if(!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
