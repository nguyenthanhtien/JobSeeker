import React from "react";
import { ID, account } from "@/appwrite/appwrite";
import Home from "@/components/home-2";

export const metadata = {
  title: "Home-2 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = async () => {
  //let accRegister = await account.create(ID.unique(), "nguyenthanhtien9@gmail.com", "123456789");
  let acc = await account.createEmailSession("tiennguyen.aws@gmail.com", "123456789");
  let jwt = await account.createJWT();
  console.log(acc);
  console.log(jwt);

  return (
    <>
      <Home />
    </>
  );
};

export default index;
