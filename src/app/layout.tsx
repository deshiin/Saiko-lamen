import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Javanese } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";

const brushFont = localFont({
    src: [
        {
            path: "../../public/fonts/HeyAugust.ttf",
        },
    ],
    variable: "--font-brush",
});

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

const notoJP = Noto_Sans_Javanese({
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Saiko Lamen",
    description: "O melhor lamen de Campinas!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${notoJP.variable} ${notoSans.variable} ${brushFont.variable} antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
