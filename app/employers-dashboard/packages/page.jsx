"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/employers-dashboard/packages";

// export const metadata = {
//   title: "Packages || Superio - Job Borad React NextJS Template",
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
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
