import React from "react";
import Card from "../components/Card";
import TypeEffect from "../components/TypefEffect";

const Home = () => {
	return (
		<div className="flex relative home h-[70vh] tablet:h-[93vh] justify-center flex-col items-center w-full">
			<div className="absolute flex top-0 right-0 w-full flex-col
             items-center justify-center h-full bg-slate-200 bg-opacity-75">
				<div className="relative h-[10vh] flex flex-col items-center">
                    <h2 className="text-3xl font-bold">
				    	Hi. I'm Ishimwe Ndungutse Charles
				    </h2>
				    <TypeEffect />
                </div>
			</div>
		</div>
	);
};

export default Home;
