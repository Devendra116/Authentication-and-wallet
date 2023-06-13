import AppBar from "@/component/AppBar";
import "./globals.css";
import Providers from "@/component/Providers";

export const metadata = {
  title: "Test App",
  description: "UnderProgress Site ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
