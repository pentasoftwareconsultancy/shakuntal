
import projectdetailhero from '../../assets/projectDetailOne/hero.png';

const ProjectHero = () => {
  return (
    <div>
      <img
        className="w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[70vh] xl:h-[80vh] object-cover"
        src={projectdetailhero}
        alt="Project Hero"
      />
    </div>
  )
}

export default ProjectHero
