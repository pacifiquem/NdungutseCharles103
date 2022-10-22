import { useEffect, useState } from "react";
import Home from "../sections/Home";
import { FaArrowUp } from "react-icons/fa";
import { useApp } from "../contexts/AppContext";
import Layout from "../components/Layout";
import LinearLoader from "../components/LinearLoader";

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
export default App;
