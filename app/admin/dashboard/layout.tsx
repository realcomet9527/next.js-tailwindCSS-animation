import "../../globals.css";
import type { Metadata } from "next";

// import fetchData from "../MetaFunction";
// let data = {
//   title: "Dashboard.Admin",
//   desp: 'Only Authrised'
// }
// const item = async function generateMetadata() {
//   return await fetchData()
// }
// console.log(item(), "generateMetadata");

// export const metadata: Metadata = {
//   title: data.title,
//   description: data.desp,
// };

export const metadata: Metadata  = {
  title: "Dashboard.Admin",
  description: "Only Authrised",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
