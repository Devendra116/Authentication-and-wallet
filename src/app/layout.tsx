import AppBar from "@/component/AppBar";
import "./globals.css";
import Providers from "@/component/Providers";
import { WagmiProvider } from "@/component/wagmi";
export const metadata = {
  title: "Test App",
  description: "UnderProgress Site ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider>
        <Providers>
          <AppBar />
          {children}
        </Providers>
        </WagmiProvider>
      </body>
    </html>
  );
}
