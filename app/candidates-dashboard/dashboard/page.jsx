"use client"
import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";
import { account } from "@/appwrite/appwrite";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// export const metadata = {
//   title: "Candidates Dashboard || Superio - Job Borad React NextJS Template",
//   description: "Superio - Job Borad React NextJS Template",
// };

const index = async () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        console.log(session);
        if (!session) {
          router.push("/login");
        }
      } catch (error) {
        router.push("/login");
      }
    };

    checkSession();
  }, [router]);


  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
