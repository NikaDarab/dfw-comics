"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

 

function Page() {
  const { user } = useAuthContext ();
  const router = useRouter();

  useEffect(() => {
    console.log("user", user);
    if (user == null) router.push("/");
  }, [user]);

  // if user is not logged in create a Link that takes them to the login page
  if (user == null) {
    return (
      <div>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Logged in as {user?.email}</p>
      <Link href="/artists">Artists</Link>
      {/* <button onClick={() => router.push("/admin")}>Admin</button>
      <button onClick={() => router.push("/admin/users")}>Users</button> */}
    </div>
  );
}

export default Page;
