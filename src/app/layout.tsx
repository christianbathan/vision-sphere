import type { Metadata } from "next";
import "../styles/global.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "VisionSphere",
  description: "Explore the world through style with VisionSphere",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <Header />
      <div>{children}</div>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
