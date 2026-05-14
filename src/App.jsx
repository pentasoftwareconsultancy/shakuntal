import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './core/constants/routes.constant'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'))
const OurProjectsPage = lazy(() => import('./pages/OurProjectPage'))
const EnquiryPage = lazy(() => import('./pages/EnquirePage'))
const CareersPage = lazy(() => import('./pages/CareerPage'))
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const Footer = lazy(() => import('./components/common/Footer'))
const Navbar = lazy(() => import('./components/common/Navbar'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.OURSTORY} element={<OurStoryPage />} />
          <Route path={ROUTES.OURPROJECT} element={<OurProjectsPage />} />
          <Route path={ROUTES.ENQUIRE} element={<EnquiryPage />} />
          <Route path={ROUTES.CAREER} element={<CareersPage />} />
          <Route path={ROUTES.PROJECTDETAIL} element={<ProjectDetailsPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
