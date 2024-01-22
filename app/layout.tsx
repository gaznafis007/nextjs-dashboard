import "@/app/ui/global.css";
import { montserrat } from "./ui/fonts";

export const metadata = {
  title: "Acme",
  description: "This is a website of next-js dashboard named Acme"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
