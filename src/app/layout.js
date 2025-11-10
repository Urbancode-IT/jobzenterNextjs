import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import "@/lib/bootstrap";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-5 pt-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
