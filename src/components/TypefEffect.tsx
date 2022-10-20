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
		<h1 className="absolute md:ml-0 ml-3 phone:ml-[13%] bottom-[-1em] tablet:mt-6 flex items-center md:bottom-0">
			<p className=" tablet:text-3xl">I&nbsp;</p>
			<p
				className="typewrite tablet:text-2xl"
				data-period="1000"
				data-type='[" am software developer", " am Creative.", " Like to learn new things", " Love to Develop." ]'
			>
				<span className="wrap"></span>
			</p>
			<p className="tablet:text-[1.8em] tablet:translate-y-[-3px] text-blue-900">
				_
			</p>
		</h1>
	);
};

export default TypeEffect;
