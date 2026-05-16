import aboutIcon1 from '../../assets/projectDetailFive/aboutIcon1.png';
import comingsoon from '../../assets/projectDetailFive/COMING SOON.png';

const ProjectAbout = () => {
  return (
    <div className='flex justify-center gap-16 py-8'>
      <img src={aboutIcon1} alt="About Icon 1" className='w-1/6 h-24' />
      <img src={comingsoon} alt="Coming Soon" className='w-1/2 h-24' />
    </div>
  );
};

export default ProjectAbout;