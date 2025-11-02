import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[rgba(95,1,0,1)] text-white px-4 py-4 sm:px-4 sm:py-4 md:px-4 md:py-4 lg:px-0 lg:py-0">
      <div className="taggallery text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
        TAGGALLERY
      </div>
      <div className="logo mt-4 sm:mt-4 md:mt-4 lg:mt-0">
        <img
          src="/assets/logoTaggallery.png"
          alt="Logo Taggallery"
          className="w-24 sm:w-28 md:w-32"
        />
      </div>
      <div className="tentang flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-8 text-lg sm:text-lg md:text-lg lg:text-xl mt-4 sm:mt-4 md:mt-4 lg:mt-0">
        <a href="#">Tentang Kami</a>
        <a href="#">Hubungi Kami</a>
        <a href="#">Layanan Kami</a>
      </div>
      <div className="logo flex gap-4 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-4 md:mt-4 lg:mt-0">
        <a href="https://wa.me/+6289518278402">
          <i className="ri-whatsapp-line ri-2x hover:opacity-50 hover:scale-90"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCUuzZVJGfXTCFstndHZ3a0w">
          <i className="ri-youtube-line ri-2x hover:opacity-50 hover:scale-90"></i>
        </a>
        <a href="https://www.instagram.com/taggalleryagency">
          <i className="ri-instagram-line ri-2x hover:opacity-50 hover:scale-90"></i>
        </a>
        <a href="https://www.tiktok.com/@taggallery_agency">
          <i className="ri-tiktok-line ri-2x hover:opacity-50 hover:scale-90"></i>
        </a>
      </div>
      <div className="mt-4 sm:mt-4 md:mt-4 lg:mb-1 lg:mt-0 text-sm sm:text-sm md:text-sm lg:text-base">
        <p>
          <i className="ri-copyright-line ri-1x lg:text-lg"></i>2025 TAGGALLERY,
          Inc. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer