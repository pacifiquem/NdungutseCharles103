import Link from "next/link";
import React, { useState } from "react";
import { BiMenu, BiSun } from "react-icons/bi";
import { useApp } from "../contexts/AppContext";

const Navbar: React.FC = () => {
	const { isDark, setIsDark, themeClass, mobile, setMobile } = useApp();
	const mobileHan: any = () => {
		setMobile(false);
	};

	return (
		<div
			className={`h-[60px] z-10 ${themeClass.nav} ${
				mobile ? "" : "overflow-hidden"
			} shadow-md sticky top-0 w-full flex items-center justify-center`}
		>
			{mobile && (
				<div
					onClick={() => setMobile(false)}
					className="absolute top-0 left-0 w-full h-screen z-[3]"
				></div>
			)}
			<div className="w-full z-[5] relative flex items-center h-full   px-[4%] justify-between">
				<div
					onClick={mobile ? mobileHan : () => {}}
					className="w-full relative py-2 flex items-center h-full  px-5 justify-between"
				>
					<a
						onClick={() => setMobile(false)}
						className="aspect-square min-w-[100px] max-h-full z-10"
						href="#home"
					>
						<img
							className="aspect-square max-h-full"
							src={"/images/logo.png"}
							alt="charles"
						/>
					</a>
					<BiMenu
						onClick={() => setMobile(!mobile)}
						className="tablet:hidden z-10 block text-3xl cursor-pointer"
					/>
				</div>
				<div
					className={`tablet:static z-50 flex flex-col duration-300
                tablet:flex-row items-center text-lg absolute tablet:py-0 py-4 ${
									mobile
										? `right-0 flex top-[3em] min-w-[200px] max-w-full w-full ${themeClass.nav}`
										: " right-[-500px] hidde"
								}`}
				>
					<Link href={`/`}>
						<p
							onClick={() => setMobile(!mobile)}
							className="tablet:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative"
						>
						 <span className="z-[2] relative">Home</span>
						</p>
					</Link>
					<Link href="/carreer">
						<p
							onClick={() => setMobile(false)}
							className="tablet:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative"
						>
							Carreer
						</p>
					</Link>
					<Link href="/projects">
						<p
							onClick={() => setMobile(false)}
							className="tablet:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative"
						>
							Projects
						</p>
					</Link>
					<Link href="/contact">
						<p
							onClick={() => setMobile(false)}
							className="tablet:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative"
						>
							Contact
						</p>
					</Link>
					<button className=" from-blue-700 overflow-hidden btnstarted relative to-blue-500 bg-gradient-to-tr truncate py-1 px-4 ml-5 rounded-md text-white">
						<span className=" relative z-[2]">Download CV </span>
					</button>
					{/* <BiSun className='ml-3 cursor-pointer'
                onClick={()=> setIsDark(!isDark)} /> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
