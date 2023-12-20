"use client";
import { getSession } from "@/appwrite/auth.service";
import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        if (!session) {
          console.log(session);
          router.push("/login");
          localStorage.clear();
          setAuth(false);
        }
        setAuth(true);
        router.push("/employers-dashboard/dashboard");
      } catch (error) {
        router.push("/login");
      }
    };

    checkSession();
  }, []);
  return (
    <>

      {!auth ? (
        <div className="w-screen  h-[calc(100vh-7vh)] flex items-center justify-center">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <Wrapper>
            <Home />
          </Wrapper>
        </>
      )
      }
    </>
  );
}
