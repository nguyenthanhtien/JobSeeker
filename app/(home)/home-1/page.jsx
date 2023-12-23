"use client"
import React from "react";
import Home from "@/components/home-1";
import { ID, account, databases, permission, role } from "@/appwrite/appwrite";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home-1 || Superio - Job Borad React NextJS Template",
//   description: "Superio - Job Borad React NextJS Template",
// };
const index = () => {
  const [data, setData] = useState([]);

  async function init() {
    // let doc1 = await databases.createDocument("recruiting_database", "candidate.contact", ID.unique(),
    // {
    //   ContactType: 'FACEBOOK', 
    //   Value: "http://google.com",

    //   candidates: ['6583a897d32d1de1e1cf']
    // },
    // [
    //   permission.read(role.any()),
    // ]);
    //console.log(doc1);
    let res = await databases.listDocuments("recruiting_database", "candidate.contact");     
    console.log(res);
    setData(res);
  }

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default index;
