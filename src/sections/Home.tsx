import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import TypeEffect from "../components/TypefEffect";
import { useApp } from '../contexts/AppContext'

const Home: React.FC = () => {
	const { themeClass } =  useApp()

	return (
		<div
			id="home"
			className={`flex  home bg-gradient-to-b ${themeClass.bg} justify-center flex-col items-center w-full`}
		>
			<div
				className={`px-[3%] flex xtab:flex-row flex-col-reverse  w-full bg-gradient-to-b 
			${themeClass.bg} items-center justify-center  bg-opacity-100`}
			>
				<div className="flex mx-auto xtab:mt-0 mt-7 items-center justify-center h-full flex-col">
					<div className="relative ml-4 laptop:w-full flex flex-col xtab:items-start items-center">
						<h2 className="laptop:text-[3em] xs:text-[2.5em] text-2xl text-center md:text-start font-bold leading-[1em] font-poppin
						 bg-gradient-to-tr from-blue-500 to-violet-700 names">
							Hi. I'm Ishimwe Ndungutse Charles
						</h2>
						<TypeEffect />
					</div>
					<div
						className="w-full
					   flex items-start xtab:justify-start flex-wrap justify-center mt-2 text-blue-600"
					>
						<a
							className="flex items-center mt-5 pl-6"
							href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
						>
							<div
								className="flex items-center bg-blue-800 rounded-full
          				 text-white justify-center p-2"
							>
								<FaLinkedin className="text-xl" />
							</div>
						</a>
						<a
							className="flex items-center mt-5 pl-6"
							href="https://github.com/NdungutseCharles103"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="flex items-center bg-blue-800 rounded-full
          				 text-white justify-center p-2"
							>
								<FaGithubSquare className="text-xl" />
							</div>
						</a>
						<a
							className="flex items-center mt-5 pl-6"
							href="https://www.facebook.com/ishimwendungutsecharles"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2"
							>
								<FaFacebookSquare className="text-xl" />
							</div>
						</a>
						<a
							className="flex items-center mt-5 pl-6"
							href="https://www.instagram.com/ndungutse_charles/"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2"
							>
								<FaInstagramSquare className="text-xl" />
							</div>
						</a>
						<a
							className="flex items-center mt-5 pl-6"
							href="mailto:ndungutsecharles103@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2"
							>
								<BiEnvelopeOpen className="text-xl" />
							</div>
						</a>
					</div>
				</div>
				<div className="flex px-[5%] laptop:px-0 laptop:aspect-square items-center justify-center">
					<img className="xtab:w-full w-4/5" src={"/images/code.svg"} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
