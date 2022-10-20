import Head from "next/head";
import React from "react";
import { useApp } from "../contexts/AppContext";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Navbar from "./Navbar";

type LProps = {
    children: React.ReactNode;
    title?: string;
}

const Layout: React.FC<LProps> = ({children, title}) => {
    const { themeClass } = useApp();
	return (
		<>
			<Head>
                {}
            </Head>
			<div className="w-full flex flex-col">
				<Navbar />
				{children}
				<div className={`flex flex-col ${themeClass.bg}`}>
					<Contact />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
