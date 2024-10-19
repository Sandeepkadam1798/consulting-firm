import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Provider";
import Nav from "@/components/Navbarcomponents/Nav";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import SpeedDials from "./SpeedDials";
import Chatbot from "@/components/Chatbot/Chatbot";
const inter = Poppins({ subsets: ["latin"] ,weight: ['100','300','400','500','700','900']});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aura Veritas Engineering",
  description: "Empowering organizations to navigate the complexities of sustainability, risk assessment, and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}    
      >
        {/* className={`${geistSans.variable} ${geistMono.variable} antialiased */}
        <Providers>
        <Nav/>
         <div className="fixed bottom-8 right-8 z-50">
          <SpeedDials />
        </div>
        <Chatbot />
          {children}
          
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
