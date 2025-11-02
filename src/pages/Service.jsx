import React from 'react';
import CardSlider from '../components/CardSlider';

const Service = () => {
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
    <div
      className="relative w-full max-w-[1440px]  md:max-w-full min-h-screen mx-auto text-white flex flex-col items-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/foto-ServicePage/bg-page.png')" }}
    >
      {/* Elemen dekoratif kanan atas */}
      <div className="absolute -top-4 right-0 z-[1] w-[200px] h-[300px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[480px] pointer-events-none">
        <img
          src="/assets/foto-ServicePage/bg-kanan-atas.png"
          alt="Dekoratif kanan atas"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Elemen dekoratif kiri bawah */}
      <div className="absolute -bottom-7 -left-4 z-[1] w-[200px] h-[300px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[480px] pointer-events-none">
        <img
          src="/assets/foto-ServicePage/bg-kiri-bawah.png"
          alt="Dekoratif kiri bawah"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Konten utama */}
      <div className="relative z-[2] w-full flex flex-col px-4 md:px-10 2xl:max-w-[1260px]">
        <h1 className="mt-10 md:mt-16 lg:mt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left lg:ml-54 ">
          TAGGALLERY'S SERVICES
        </h1>
        <div className="mb-10 md:mb-16 lg:mb-20">
          <CardSlider />
        </div>
      </div>
    </div>
    </div>
  );
};


export default Service;

