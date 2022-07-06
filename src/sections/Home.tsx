import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Card from "../components/Card";
import TypeEffect from "../components/TypefEffect";

const Home = () => {
	return (
		<div className="flex relative home h-[60vh] tablet:h-[93vh] justify-center flex-col items-center w-full">
			<div className="absolute grid grid-cols-2 top-0 right-0 w-full bg-gradient-to-b from-slate-200
            	via-slate-200 items-center justify-center h-full to-white bg-opacity-100">
				<div className="flex aspect-square items-center justify-center">
					<img className="w-4/5" src="src/images/code.svg" alt="" />
				</div>
				<div className="flex items-center justify-center h-full flex-col aspect-square">
					<div className="relative w-full h-[7vh] tablet:h-[10vh] flex flex-col ">
            	        <h2 className="tablet:text-3xl text-lg font-bold">
					    	Hi. I'm Ishimwe Ndungutse Charles
					    </h2>
					    <TypeEffect />
            	    </div>
					<div className="flex flex-col w-full items-start mt-2 text-blue-600">
						<a className="flex items-center mt-5" href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"><FaLinkedin
						className=" text-3xl" />
						<p className="ml-4">Ishimwe Ndungutse Charles</p></a>
						<a className="flex items-center mt-5" href="https://github.com/NdungutseCharles103" target="_blank"
						 rel="no-referrer"><FaGithubSquare className=" text-3xl" />
						 <p className="ml-4">Ndungutse Charles103</p></a>
						<a className="flex items-center mt-5" href="https://www.facebook.com/ishimwendungutsecharles" target="_blank"
						 rel="no-referrer"><FaFacebookSquare className=" text-3xl" />
						 <p className="ml-4">Charles Hazard</p></a>
						<a className="flex items-center mt-5" href="https://www.instagram.com/ndungutse_charles/" target="_blank"
						 rel="no-referrer"><FaInstagramSquare className=" text-3xl" />
						 <p className="ml-4">ndungutse_charles</p></a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
