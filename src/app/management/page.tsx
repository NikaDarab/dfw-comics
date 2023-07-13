"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AuthData {
  user: {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: {
      providerId: string;
      uid: string;
      displayName: null | string;
      email: string;
      phoneNumber: null | string;
      photoURL: null | string;
    }[];
    stsTokenManager: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    };
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  };
  providerId: null;
  _tokenResponse: {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  };
  operationType: string;
}

function Page() {
  const { user } = useAuthContext<AuthData>();
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
