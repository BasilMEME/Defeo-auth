import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext"; // fixed path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Defeo Auth",
  description: "Firebase Auth with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
