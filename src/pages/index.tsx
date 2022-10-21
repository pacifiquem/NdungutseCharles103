import { useEffect, useState } from "react";
import Home from "../sections/Home";
import Navbar from "../components/Navbar";
import Fields from "../sections/Fields";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import { BiArrowToTop } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { useApp } from "../contexts/AppContext";
import Layout from "../components/Layout";
import LinearLoader from "../components/LinearLoader";
import { indexQuery } from "../lib/queries";
import { overlayDrafts, getClient, sanityClient } from "../lib/sanity.server";

function App() {
	const [showArr, setShowArr] = useState(false);
	const { themeClass } = useApp();
	const [linear, setLinear] = useState(false);

	const goToTop = () => {
		window.scrollTo({ top: 0 });
	};
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.onscroll = (e) => {
				if (window.innerHeight / 3 < window.scrollY) {
					setShowArr(true);
				} else {
					setShowArr(false);
				}
			};
		}
	}, []);

	return (
		<>
			{linear && <LinearLoader />}
			<Layout setLinear={setLinear}>
				<Home />
				{showArr && (
					<FaArrowUp
						onClick={goToTop}
						className="fixed bottom-7 cursor-pointer hover:bg-blue-800
        				right-7 text-white  bg-blue-900 p-3 text-[2.5em]"
					/>
				)}
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await sanityClient.fetch(indexQuery);
	console.log(allPosts);
	console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
	console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
	return {
		props: { allPosts, preview },
		// If webhooks isn't setup then attempt to re-generate in 1 minute intervals
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
	};
}

export default App;
