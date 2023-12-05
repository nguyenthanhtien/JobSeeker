import React from "react";
import Home from "@/components/home-1";
import { ID, account } from "@/appwrite/appwrite";

export const metadata = {
  title: "Home-1 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {
  let acc = await account.create(ID.unique(), "nguyenthanhtien9@gmail.com", "123456789");
  console.log(acc);
  return (
    <>
      <Home />
    </>
  );
};

export default index;
