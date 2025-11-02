import React from 'react'
import OurWorksGallery from '../components/OurWorksGallery'

const Gallery = () => {
  return (
    <div>
     <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            width: 100%;
            overflow-x: hidden;
            background-color: #8a0000;
          }
        `}
      </style>
    <div className='className="min-h-[1440px] bg-gradient-to-br from-[#4B0000] to-[#B30000] overflow-hidden">'>
      <OurWorksGallery />
    </div>
    </div>
  )
}

export default Gallery