import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import "./globals.css";

const supreme = localFont({
	src: [
		{ path: "../assets/fonts/Supreme/Fonts/WEB/fonts/Supreme-Medium.woff2" },
	],
	variable: "--font-supreme",
});

const bespokeStencil = localFont({
	src: [
		{
			path: "../assets/fonts/BespokeStencil/Fonts/WEB/fonts/BespokeStencil-Medium.woff2",
		},
	],
	variable: "--font-bespokeStencil",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sofiane Lyafori | Portfolio développeur web",
	description: "Développeur web React JS (Next JS) passionné",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${supreme.variable} ${bespokeStencil.variable} !scroll-smooth`}
		>
			<body className="font-supreme bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 ">
				<div className="bg-[#ffc7c7] absolute top-[-6rem] -z-10 right-1 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]  sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#d6d0ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Toaster position="top-right" />
						<Footer />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
