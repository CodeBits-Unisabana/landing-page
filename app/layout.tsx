import Navbar from "./components/organisms/Navbar/Navbar";
import Footer from "./components/organisms/Footer/Footer";
import "normalize.css/normalize.css";
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
