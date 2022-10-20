import React from 'react'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { useApp } from '../../contexts/AppContext';
import Contact from '../../sections/Contact';
import Fields from '../../sections/Fields';
import Skills from '../../sections/Skills';

function CarrerIndex() {
	const { themeClass } = useApp();
  return (
		<Layout>
			<Fields />
			<Skills />
		</Layout>
	);
}

export default CarrerIndex