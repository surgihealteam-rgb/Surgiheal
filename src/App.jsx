import React, { useState, Suspense, lazy } from 'react'
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/ui/FloatingButtons'

// Lazy load all pages for better code splitting
const Home = lazy(() => import('./pages/Home'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const FindDoctor = lazy(() => import('./pages/FindDoctor'))
const Specialties = lazy(() => import('./pages/Specialties'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))
const BookConsultation = lazy(() => import('./pages/BookConsultation'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Lazy load service pages
const EmergencyCare = lazy(() => import('./pages/services/EmergencyCare'))
const Surgery = lazy(() => import('./pages/services/Surgery'))
const LaparoscopicSurgery = lazy(() => import('./pages/services/laparoscopic surgery'))
const Orthopedics = lazy(() => import('./pages/services/Orthopedics'))
const LaserSurgery = lazy(() => import('./pages/services/LaserSurgery'))
const Gynecology = lazy(() => import('./pages/services/Gynecology'))
const Urology = lazy(() => import('./pages/services/Urology'))
const Gastroenterology = lazy(() => import('./pages/services/Gastroenterology'))
const Oncology = lazy(() => import('./pages/services/Oncology'))
const Proctology = lazy(() => import('./pages/services/Proctology'))

// Lazy load admin components
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const ConsultationsPage = lazy(() => import('./pages/admin/ConsultationsPage'))
const WhatsappUsersPage = lazy(() => import('./pages/admin/WhatsappUsersPage'))

function AppContent() {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <Routes>
      {/* Public Routes with Layout */}
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Home onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/about" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <AboutUs />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/find-doctor" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <FindDoctor onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/doctors/specialties" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Specialties onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/contact" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/book-appointment" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <BookAppointment />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/book-consultation" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <BookConsultation />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/emergency" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <EmergencyCare onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/surgery" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Surgery onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/laparoscopic-surgery" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <LaparoscopicSurgery onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/orthopedics" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Orthopedics onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/laser-surgery" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <LaserSurgery onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/gynecology" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Gynecology onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/urology" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Urology onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/gastroenterology" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Gastroenterology onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/oncology" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Oncology onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      <Route path="/services/proctology" element={
        <div className="min-h-screen">
          <Navbar onBookAppointment={handleBookAppointment} />
          <Suspense fallback={<LoadingSpinner />}>
            <Proctology onBookAppointment={handleBookAppointment} />
          </Suspense>
          <Footer />
          <FloatingButtons />
        </div>
      } />
      
      {/* Admin Routes without Layout */}
      <Route path="/admin-access-controll" element={
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <AdminLayout />
        </Suspense>
      }>
        <Route index element={
          <Suspense fallback={<div className="flex justify-center p-8"><div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" /></div>}>
            <AdminDashboard />
          </Suspense>
        } />
        <Route path="consultations" element={
          <Suspense fallback={<div className="flex justify-center p-8"><div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" /></div>}>
            <ConsultationsPage />
          </Suspense>
        } />
        <Route path="whatsapp-users" element={
          <Suspense fallback={<div className="flex justify-center p-8"><div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" /></div>}>
            <WhatsappUsersPage />
          </Suspense>
        } />
      </Route>
      
      {/* 404 Not Found */}
      <Route path="*" element={
        <Suspense fallback={<LoadingSpinner />}>
          <NotFound />
        </Suspense>
      } />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
