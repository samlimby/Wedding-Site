import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you intend to use
});

export const metadata = {
  title: "Sam & Meg's Wedding Site",
  description: "Information and details for Sam & Meg's Summer 2025 Wedding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
