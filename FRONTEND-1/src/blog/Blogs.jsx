import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Blogs() {
  return (
    <>
    <Navbar />
      <div className='min-h-screen'>
        <Blog />
      </div>
      <Footer />
    </>
  )
}

export default Blogs