import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundPattern } from "@/components/BackgroundPattern";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundPattern variant="circuit" />
      <Navbar />
      <main className="flex-1 pt-32">{children}</main>
      <Footer />
    </div>
  );
}
