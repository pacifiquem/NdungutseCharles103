import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import TypeEffect from "../components/TypefEffect";
import { useApp } from '../contexts/AppContext'
import bg from '../images/code.svg'

const Home: React.FC = () => {
	const { themeClass } =  useApp()

	return (
		<div className={`flex relative home bg-gradient-to-b ${themeClass.bg} h-[60vh] 
		laptop:h-[93vh] justify-center flex-col items-center w-full`}>
			<div className={`absolute px-[10%] grid laptop:grid-cols-2 top-0 right-0 w-full bg-gradient-to-b 
			${themeClass.bg} items-center justify-center laptop:h-full  bg-opacity-100`}>
				<div className="flex px-[10%] laptop:px-0 laptop:aspect-square items-center justify-center">
					<img className="w-4/5" src={bg} alt="" />
				</div>
				<div className="flex mx-auto items-center justify-center h-full flex-col laptop:aspect-">
					<div className="relative ml-4 laptop:w-full h-[7vh] tablet:h-[10vh] flex flex-col ">
            	        <h2 className="tablet:text-3xl text-lg font-bold">
					    	Hi. I'm Ishimwe Ndungutse Charles
					    </h2>
					    <TypeEffect />
            	    </div>
					<div className="laptop:flex laptop:flex-col tablet:w-full tablet:grid
					   flex flex-col tablet:grid-cols-2 items-start mt-2 text-blue-600">
						<a className="flex items-center mt-5 pl-6" href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/">
						<div className="flex items-center bg-blue-800 rounded-full
          				 text-white justify-center p-2">
          				  <FaLinkedin className='text-xl' /> 
          				</div>
						<p className="ml-4">Ishimwe Ndungutse Charles</p></a>
						<a className="flex items-center mt-5 pl-6" href="https://github.com/NdungutseCharles103" target="_blank"
						 rel="no-referrer">
							<div className="flex items-center bg-blue-800 rounded-full
          				 text-white justify-center p-2">
          				  	<FaGithubSquare className='text-xl' /> 
          					</div>
						 <p className="ml-4">Ndungutse Charles103</p></a>
						<a className="flex items-center mt-5 pl-6" href="https://www.facebook.com/ishimwendungutsecharles" target="_blank"
						 rel="no-referrer">
							<div className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2">
          				  	<FaFacebookSquare className='text-xl' /> 
          					</div>
						 <p className="ml-4">Charles Hazard</p></a>
						<a className="flex items-center mt-5 pl-6" href="https://www.instagram.com/ndungutse_charles/" target="_blank"
						 rel="no-referrer">
							<div className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2">
          				  	<FaInstagramSquare className='text-xl' /> 
          					</div>
						 <p className="ml-4">ndungutse_charles</p></a>
						 <a className="flex items-center mt-5 pl-6" href="mailto:ndungutsecharles103@gmail.com" target="_blank"
						   rel="no-referrer">
							<div className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2">
          				  	<BiEnvelopeOpen className='text-xl' /> 
          					</div>
						 <p className="ml-4">ndungutsecharles103@gmail</p></a>
						 <a className="flex items-center mt-5 pl-6" href="tel:+250790077264" target="_blank"
						   rel="no-referrer">
							<div className="flex items-center bg-blue-800 rounded-full
          				 	text-white justify-center p-2">
          				  	<FaPhoneAlt className='text-xl' /> 
          					</div>
						 <p className="ml-4">+250 790077264</p></a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
