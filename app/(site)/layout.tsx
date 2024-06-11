import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Line from "@/components/Line"
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Khalid",
  description: "Khalid is MERN stack and Nextjs developer",
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Navbar />
      {/* <Line /> */}
      {children}
      <Footer />
    </main>
  );
}
