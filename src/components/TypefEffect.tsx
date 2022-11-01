import React, { useEffect } from "react";
import { TypeWriter } from "../contexts/typewriter";

const TypeEffect = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.onload = function () {
				var elements = document.getElementsByClassName("typewrite");
				for (var i = 0; i < elements.length; i++) {
					var toRotate = elements[i].getAttribute("data-type");
					var period = elements[i].getAttribute("data-period");
					if (toRotate) {
						new TypeWriter(elements[i], JSON.parse(toRotate), period);
					}
				}
			};
		}
	}, []);

	return (
		<h1 className=" md:ml-0 tablet:mt-6 flex items-center md:bottom-0 names bg-gradient-to-tr from-blue-700 to-violet-900 font-semibold">
			<p className="text-3xl font-poppin">I&nbsp;</p>
			<p
				className="typewrite text-2xl font-poppin"
				data-period="1000"
				data-type='[" am software developer", " am Creative.", " Like to learn new things", " Love to Develop." ]'
			>
				<span className="wrap font-poppin names"></span>
			</p>
			<p className="tablet:text-[1.8em] tablet:translate-y-[-3px] text-blue-900">
				_
			</p>
		</h1>
	);
};

export default TypeEffect;
