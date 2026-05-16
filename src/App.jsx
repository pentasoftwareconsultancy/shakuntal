import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import { ROUTES } from './core/constants/routes.constant'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'))
const OurProjectsPage = lazy(() => import('./pages/OurProjectPage'))
const EnquiryPage = lazy(() => import('./pages/EnquirePage'))
const CareersPage = lazy(() => import('./pages/CareerPage'))
const ProjectDetailsPage1 = lazy(() => import('./pages/ProjectDetailPage1'))
const ProjectDetailsPage2 = lazy(() => import('./pages/ProjectDetailPage2'))
const ProjectDetailsPage3 = lazy(() => import('./pages/ProjectDetailPage3'))
const ProjectDetailsPage4 = lazy(() => import('./pages/ProjectDetailPage4'))
const ProjectDetailsPage5 = lazy(() => import('./pages/ProjectDetailPage5'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
const Footer = lazy(() => import('./components/common/Footer'))
const Navbar = lazy(() => import('./components/common/Navbar'))

function AppContent() {

  const location = useLocation()

  const hideFooterRoutes = [
    ROUTES.OURPROJECT,
    ROUTES.ENQUIRE,
  ]

  const shouldHideFooter = hideFooterRoutes.includes(
    location.pathname
  )

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Navbar />

      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.OURSTORY} element={<OurStoryPage />} />
        <Route path={ROUTES.OURPROJECT} element={<OurProjectsPage />} />
        <Route path={ROUTES.ENQUIRE} element={<EnquiryPage />} />
        <Route path={ROUTES.CAREER} element={<CareersPage />} />
        <Route path={ROUTES.PROJECTDETAILONE} element={<ProjectDetailsPage1 />} />
        <Route path={ROUTES.PROJECTDETAILTWO} element={<ProjectDetailsPage2 />} />
        <Route path={ROUTES.PROJECTDETAILTHREE} element={<ProjectDetailsPage3 />} />
        <Route path={ROUTES.PROJECTDETAILFOUR} element={<ProjectDetailsPage4 />} />
        <Route path={ROUTES.PROJECTDETAILFIVE} element={<ProjectDetailsPage5 />} />
        <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />
      </Routes>

      <ScrollToTop />

      {!shouldHideFooter && <Footer />}

    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App