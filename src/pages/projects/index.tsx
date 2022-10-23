import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import LinearLoader from "../../components/LinearLoader";
import WorkSlider from "../../components/WorkSlider";
import { sanityClient } from "../../lib/sanity.server";
import { projectQuery } from "../../lib/queries";
import { ProjectType } from "../../lib/types";
import Work from "../../components/work";

type Props = {
	projects: ProjectType[];
};

const ProjectIndex = ({ projects }: Props) => {
	const [works, setWorks] = useState<any>([]);
	const [allShown, setAllShown] = useState<boolean>(false);
	const [linear, setLinear] = useState<boolean>(false);

	useEffect(() => {
		setWorks(projects.slice(0, 8));
	}, [projects]);

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
					{works.length > 8 &&<div className="flex items-center justify-center mt-4">
						<p
							onClick={() => {
								// setAllShown(true)
								setWorks(projects);
							}}
							className="flex cursor-pointer items-center text-white px-3 py-1 bg-blue-800 hover:bg-blue-700 duration-300"
						>
							Show All Works
							<span className="text-2xl ml-2">&rarr;</span>
						</p>
					</div>}
					{allShown && <WorkSlider works={works} />}
				</div>
			</Layout>
		</>
	);
};

export default ProjectIndex;

export const getStaticProps = async () => {
	const projects = await sanityClient.fetch(projectQuery);

	return {
		props: {
			projects,
		},
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
	};
};
