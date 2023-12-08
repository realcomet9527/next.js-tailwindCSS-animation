import "../../globals.css";
import type { Metadata } from "next";
import { Header, Sidebar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { Loader } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import serverLink from "@/app/link";
import fetchData from "../MetaFunction";
// let data = {
//   title: "",
//   desp: ''
// }
// // console.log(data, 'dataa');
// const load = async () => {
//   data = await fetchData()
  
// }

// load()
// export async function generateMetadata() {
//   return await fetchData
// }

// console.log(generateMetadata(), "generateMetadata");

// export const metadata: Metadata = {
//   title: data.title,
//   description: data.desp,
// };
export function generateMetaData() {
  return{
    title: 'TEST',
    description: 'testing'
  }
}
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [data, setdata] = useState({
  //   title: "loading...",
  //   desp: "loading..."
  // }
  // )
  // useEffect(() => {
  //   axios
  //     .get(`${serverLink}meta`) // Change the URL accordingly
  //     .then((response) => {
  //       setdata(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching Section 1 data:", error);
  //     });
  // })
  const Router = useRouter();
  const checkauth = useSelector(
    (state: RootState) => state.auth.isauthenticated
  );
  // console.log(data, "meta response");

  if (!checkauth) {
    setTimeout(() => {
      Router.push("/admin/auth");
    }, 2000);
    return <Loader />;
  }

  return (
    <html>
      <body>
        <div className="w-full flex">
          <div className="w-[15%] relative">
            <Sidebar />
          </div>
          <div className="w-[85%] relative">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
