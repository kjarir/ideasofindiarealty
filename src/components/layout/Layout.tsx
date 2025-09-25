import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppChat from "@/components/common/WhatsAppChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Layout;