

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "spices exporters In india | Commodity Trading company - Trade-Pros",
  description: "Choosing Trade Pros can be the best choice for you, as we operate as a well-renowned trader of commodities such as basmati and non-basmati rice.",
  alternates: {
    canonical: `${"https://trade-pros.org/"}`,


  },
  
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
