import React, { useState } from 'react'
import Layout from '../../components/Layout';
import LinearLoader from '../../components/LinearLoader';
import Navbar from '../../components/Navbar';
import { useApp } from '../../contexts/AppContext';
import Contact from '../../sections/Contact';
import Fields from '../../sections/Fields';
import Skills from '../../sections/Skills';

function CarrerIndex() {
	const { themeClass } = useApp();
	const [linear, setLinear] = useState(false);

  return (
		<>
			{linear && <LinearLoader />}
			<Layout setLinear={setLinear}>
				<Fields />
				<Skills />
			</Layout>
		</>
	);
}

export default CarrerIndex