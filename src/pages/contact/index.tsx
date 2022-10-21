import React, { useState } from 'react'
import Layout from '../../components/Layout'
import LinearLoader from '../../components/LinearLoader';

const Index = () => {
  const [linear, setLinear] = useState(false);

  return (
		<>
			<Layout setLinear={setLinear}>{linear && <LinearLoader />}</Layout>
		</>
	);
}

export default Index