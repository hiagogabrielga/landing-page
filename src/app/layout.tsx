import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/reset.css"
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Senna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
