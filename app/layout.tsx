import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/navigation/sidebar";
import {
  CustomHeader,
  SidebarContent,
} from "@/components/navigation/sidebar-content";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farmer Dashboard | DayaTani",
  description: "Farmer Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="bg-[#EDEFE3] px-4">
          <Sidebar
            sidebarContent={SidebarContent}
            mobileDashboardHeader={CustomHeader}
          >
            {children}
          </Sidebar>
        </div>
      </body>
    </html>
  );
}
