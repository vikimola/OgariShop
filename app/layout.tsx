import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Home/Nav";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    UserButton, SignedOut
} from '@clerk/nextjs'
import React from "react";
import Footer from "@/components/Home/Footer";

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

export const metadata: Metadata = {
    title: "WebShop | Next.js",
    description: "Clothes Webshop with next.js 14",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased ` }>
            <Nav/>
            {children}
            <Footer/>

            </body>
            </html>
        </ClerkProvider>
    );
}
