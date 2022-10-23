import Link from 'next/link';
import React from 'react'
import Work from '../work';

type Props = {
    recent: any;
    setLinear: React.Dispatch<React.SetStateAction<boolean>>;
}
const RecentActivity = ({ recent, setLinear }: Props) => {
  return (
		<div className={`flex flex-col w-full py-8`}>
			<h2 className="text-center text-2xl font-semibold">Recent Activities</h2>
			<div className=" grid xtab:grid-cols-3 tablet:grid-cols-2 desktop:grid-cols-4 w-full">
				{recent.slice(0, 4).map((work: any, index: number) => (
					<Work work={work} key={index} no={index} />
				))}
			</div>
            <Link href={`/projects`}>
                <button onClick={()=> setLinear(true)} className='px-7 mt-6 py-2 bg-blue-800 text-white mx-auto'>
                    See more
                </button>
            </Link>
		</div>
	);
}

export default RecentActivity