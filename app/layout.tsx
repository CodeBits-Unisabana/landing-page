import "normalize.css/normalize.css";

import Footer from "./components/organisms/Footer/Footer";
import Navbar from "./components/organisms/Navbar/Navbar";

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
