
type Props = {
    works?: object[];
}

const WorkSlider: React.FC<Props> = ({works}) => {
  return (
    <div className='w-full h-screen bg-black/60 flex items-center justify-center fixed top-0 left-0 z-[3]'>
        <div className="absolute h-full w-full x-[4]"></div>
        <div className="w-10/12 h-2/3 flex flex-col"></div>
    </div>
  )
}

export default WorkSlider