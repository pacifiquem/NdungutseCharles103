import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
import TypeEffect from "../components/TypefEffect";

const Home = () => {
	return (
		<div className="flex relative home h-[70vh] tablet:h-[93vh] justify-center flex-col items-center w-full">
			<div className="absolute flex top-0 right-0 w-full flex-col
             items-center justify-center h-full bg-slate-200 bg-opacity-75">
				<div className="relative h-[8vh] flex flex-col items-center">
                    <h2 className="text-4xl font-bold">
				    	Hi. I'm Ishimwe Ndungutse Charles
				    </h2>
				    <TypeEffect />
                </div>
				<div className="flex mt-2 text-3xl text-blue-600 items-center">
					<a className="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/" href=""><FaLinkedin /></a>
					{/* <BiEnvelopeOpen /> */}
					<a className="https://github.com/NdungutseCharles103" href=""><FaGithubSquare className="ml-4" /></a>
					<a className="https://www.facebook.com/ishimwendungutsecharles" href=""><FaFacebookSquare className="ml-4" /></a>
					<a className="https://www.instagram.com/ndungutse_charles/" href=""><FaInstagramSquare className="ml-4" /></a>
				</div>
			</div>
		</div>
	);
};

export default Home;
