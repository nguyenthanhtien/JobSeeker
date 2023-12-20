"use client"
import dynamic from "next/dynamic";
import CvManager from "@/components/dashboard-pages/candidates-dashboard/cv-manager";
import { account } from "@/appwrite/appwrite";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// export const metadata = {
//   title: "CV Manager || Superio - Job Borad React NextJS Template",
//   description: "Superio - Job Borad React NextJS Template",
// };

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = localStorage.getItem("session");
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
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
