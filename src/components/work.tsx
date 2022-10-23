import { AnimationControls, useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { urlForImage } from '../lib/sanity';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'


const textVariant = {
	before: { opacity: 0, x: -40, transition: { duration: 10 } },
	after: { opacity: 1, x: 0 },
};

const imgVariant = {
	before: { opacity: 0, x: 40, transition: { duration: 10 } },
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
      border-slate-200 shadow-md items-center p-[4%] gap-x-8  mt-[3vh] w-[80%] mx-auto`}
		>
			<motion.div
				ref={proref}
				variants={no % 2 === 0 ? imgVar : textVar}
				animate={control}
				initial="before"
				className=" overflow-hidden"
			>
				<Image
					src={urlForImage(work.mainImage).url() || ""}
					alt=""
					height={1080}
					width={1920}
					className=""
				/>
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
         justify-center hover:bg-blue-700 duration-300 cursor-pointer"
				>
					Visit Now
					<p className="text-2xl flex items-center ml-2 my-auto cursor-pointer">&rarr;</p>
				</a>
			</motion.div>
		</div>
	);
};

export default Work