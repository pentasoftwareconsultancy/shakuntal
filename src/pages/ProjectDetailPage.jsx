import React from 'react'
import ProjectHero from '../components/projectDetail/ProjectHero'
import ProjectAbout from '../components/projectDetail/ProjectAbout'
import ProjectBannerOne from '../components/projectDetail/ProjectBannerOne'
import ProjectAmenities from '../components/projectDetail/ProjectAmenities'
import ProjectBannerTwo from '../components/projectDetail/ProjectBannerTwo'
import ProjectLayouts from '../components/projectDetail/ProjectLayouts'
import ProjectGallery from '../components/projectDetail/ProjectGallery'
import ProjectTestimonial from '../components/projectDetail/ProjectTestimonial'
import ProjectMapLocation from '../components/projectDetail/ProjectMapLocation'

const ProjectDetailPage = () => {
  return (
    <div>
      <ProjectHero />
      <ProjectAbout />
      <ProjectBannerOne />
      <ProjectAmenities />
      <ProjectBannerTwo />
      <ProjectLayouts />
      <ProjectGallery />
      <ProjectTestimonial />
      <ProjectMapLocation />
    </div>
  )
}

export default ProjectDetailPage
