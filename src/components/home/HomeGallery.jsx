import group from '../../assets/home/group 42.png'

const HomeGallery = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <img
        src={group}
        alt="Group"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default HomeGallery