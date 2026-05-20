import group from '../../assets/home/Group 42.png'

const HomeGallery = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={group}
        alt="Group"
        className="w-full h-full object-cover"
      />
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 underline underline-offset-[10px] font-raleway text-white text-2xl md:text-[34px] font-[400]'>
        Discover Alentia
      </div>
    </div>
  )
}

export default HomeGallery