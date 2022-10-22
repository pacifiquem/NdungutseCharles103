import Head from "next/head";
import React from "react";
import { useApp } from "../contexts/AppContext";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Navbar from "./Navbar";

type LProps = {
    children: React.ReactNode;
    title?: string;
	setLinear: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LProps> = ({children, title, setLinear}) => {
    const { themeClass } = useApp();
	return (
		<>
			<Head>
                <link rel="shortcut icon" href="default.svg" type="image/x-icon" />
            </Head>
			<div className="w-full flex flex-col min-h-screen justify-between">
				<Navbar setLinear={setLinear} />
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
