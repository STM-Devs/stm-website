import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import BFCacheReloader from "./components/BFCacheReloader";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "STM Consulting - Your Gateway to Africa",
  description: "Performance-led strategy, creative, and execution for brands that want smarter digital growth in Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BFCacheReloader />
        {children}
      </body>
    </html>
  );
}
