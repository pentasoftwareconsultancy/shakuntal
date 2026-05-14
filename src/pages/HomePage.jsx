import React from 'react'
import HomeHero from '../components/home/HomeHero';
import HomeService from '../components/home/HomeService';
import HomeAbout from '../components/home/HomeAbout';
import HomeActivities from '../components/home/HomeActivities';
import HomeBanner from '../components/home/HomeBanner';
import HomeBlog from '../components/home/HomeBlog';
import HomeClients from '../components/home/HomeClients';
import HomeGallery from '../components/home/HomeGallery';
import HomeProject from '../components/home/HomeProject';
import HomeQuestions from '../components/home/HomeQuestions';

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeBanner />
      <HomeProject />
      <HomeService />
      <HomeGallery />
      <HomeClients />
      <HomeActivities />
      <HomeBlog />
      <HomeQuestions />
    </div>
  )
}

export default HomePage
