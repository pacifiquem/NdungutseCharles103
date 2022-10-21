import { AnimationControls, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../../components/Layout";
import LinearLoader from "../../components/LinearLoader";
import Navbar from "../../components/Navbar";
import WorkSlider from "../../components/WorkSlider";
import { Does } from "../../contexts/data";
import Contact from "../../sections/Contact";
import Projects from "../../sections/Projects";

const ProjectIndex = () => {
	const [works, setWorks] = useState<any>([]);
	const [allShown, setAllShown] = useState<boolean>(false);
	const [linear, setLinear] = useState<boolean>(false);

	useEffect(() => {
		setWorks(Does.slice(0, 4));
	}, []);

	return (
		<>
			{linear && <LinearLoader />}
			<Layout setLinear={setLinear}>
				<div
					id="projects"
					className="flex pt-7 bg-gradient-to-b from-slate-100 via-slate-100 to-white w-full flex-col"
				>
					<h2 className="font-bold text-center text-2xl">My Recent Works</h2>
					<div className=" grid xtab:grid-cols-3 tablet:grid-cols-2 desktop:grid-cols-4 w-full">
						{works.map((work: any, index: number) => (
							<Work work={work} key={index} no={index} />
						))}
					</div>
					<div className="flex items-center justify-center mt-4">
						<p
							onClick={() => {
								// setAllShown(true)
								setWorks(Does);
							}}
							className="flex cursor-pointer items-center text-white px-3 py-1 bg-blue-800 hover:bg-blue-700 duration-300"
						>
							Show All Works
							<span className="text-2xl ml-2">&rarr;</span>
						</p>
					</div>
					{allShown && <WorkSlider works={works} />}
				</div>
			</Layout>
		</>
	);
};

export default ProjectIndex;

const textVariant = {
	before: { opacity: 0, x: -40, transition: { duration: 3 } },
	after: { opacity: 1, x: 0 },
};

const imgVariant = {
	before: { opacity: 0, x: 40, transition: { duration: 3 } },
	after: { opacity: 1, x: 0 },
};

const Work = ({ no, work }: any) => {
	const control: AnimationControls = useAnimation();
	const [proref, inView] = useInView();
	const [imgVar, setImgVar] = useState<any>(imgVariant);
	const [textVar, setTextVar] = useState<any>(textVariant);

	useEffect(() => {
		if (inView) {
			control.start("after");
			console.log("pro");
		}
	}, [control, inView]);

	return (
		<div
			className={` flex flex-col border-[1px]
      border-slate-200 shadow-md items-center p-[4%] gap-x-8 justify-center mt-[3vh] w-[80%] mx-auto`}
		>
			<motion.div
				ref={proref}
				variants={no % 2 === 0 ? imgVar : textVar}
				animate={control}
				initial="before"
				className=" overflow-hidden"
			>
				<img src={work.image} alt="" />
			</motion.div>
			<motion.div
				ref={proref}
				variants={no % 2 === 0 ? textVar : imgVar}
				animate={control}
				initial="before"
				className="flex items-center mt-2 flex-col"
			>
				<h2 className=" text-xl font-bold">{work.title}</h2>
				<p className="">{work.description}</p>
				<a
					href={work.link}
					target="_blank"
					rel="noreferrer"
					className="flex mx-auto  items-center w-[160px] mt-4 text-white px-3 py-1 bg-blue-800
         justify-center hover:bg-blue-700 duration-300"
				>
					Visit Now
					<p className="text-2xl flex items-center ml-2 my-auto">&rarr;</p>
				</a>
			</motion.div>
		</div>
	);
};
