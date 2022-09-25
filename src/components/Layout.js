import React from 'react'
import Navbar from './Navbar';
import Content from './Content';
import Feature from './Feature';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Feature />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}

export default Layout