import React from 'react';
import Slider from 'react-slick';

// Import CSS untuk react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SliderTeam from '../components/SliderTeam';


// --- Komponen untuk tombol navigasi slider ---
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-5 sm:right-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white hover:opacity-75 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white hover:opacity-75 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};


const Profile = () => {
  
  // --- Pengaturan untuk slider background ---
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // --- Daftar gambar untuk background slider ---
  const backgroundImages = [
    {
      src: "assets/foto-ProfilPage/bg-top-fix.jpg", // Gambar pertama Anda
      alt: "Gambar branding 1"
    },
    {
      src: "assets/foto-ProfilPage/bg-top-2.jpg", // Ganti dengan path gambar kedua Anda
      alt: "Gambar branding 2"
    }
  ];

  // --- Daftar gambar untuk section 2 ---
  // Ganti URL ini dengan path gambar-gambarmu
  const whoWeAreImages = [
    'assets/foto-ProfilPage/kolase-1.png', // Tim sedang berdiskusi
    'assets/foto-ProfilPage/kolase-2.png', // Handshake
    'assets/foto-ProfilPage/kolase-3.png', // Clapperboard film
    'assets/foto-ProfilPage/kolase-4.png', // Tangan di tablet
    'assets/foto-ProfilPage/kolase-5.png', // Tim di depan kamera
    'assets/foto-ProfilPage/kolase-6.png'  // Tim di depan laptop
  ];

  // Komponen kecil untuk kotak gambar agar kode tidak berulang
  const ImageBox = ({ src, alt, className }) => (
    <div className={`group relative overflow-hidden rounded-lg border-2 border-white ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
    </div>
  );

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
      {/* section 1 (TIDAK DIUBAH) */}
      <div className="relative w-full h-[643px] bg-gradient-to-br from-[#4B0000] to-[#B30000] overflow-hidden">
        <div className="pt-10 sm:pt-16 md:pt-16">
          <Slider {...sliderSettings}>
            {backgroundImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[643px] object-cover brightness-65 rounded-t-[50px]"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white top-42">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-lg sm:text-xl font-light">Introduction to Best Digital Agency</p>
          <div className="w-48 sm:w-96 h-0.5 bg-white mt-6 sm:mt-8"></div>
        </div>
      </div>
      {/* section 1 */}


{/* section 2 (INI BAGIAN YANG DIUBAH) */}
      {/* section 2 (RESPONSIVE) */}
{/* section 2 (RESPONSIVE + DESKTOP SESUAI DESAIN BARU) */}
<section
  className="bg-cover bg-center bg-no-repeat py-10 sm:py-16 px-4 sm:px-6 lg:px-8"
  style={{ backgroundImage: "url('/assets/foto-ProfilPage/bg-2.png')" }}
>
  <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:gap-12 lg:grid-cols-2">
    
    {/* Kolom Kiri: Galeri Foto */}
    <div 
      className="
        grid w-full mx-auto
        grid-cols-2 sm:grid-cols-3 gap-2
        auto-rows-[200px] sm:auto-rows-[150px] md:auto-rows-[170px] 
        lg:h-[550px] lg:w-[690px] lg:grid-cols-3 lg:grid-rows-3 lg:translate-x-10
      "
    >
      {/* === Mobile/Tablet pakai default (auto-rows) === */}
      {/* === Desktop pakai fixed grid 3x3 === */}
      <ImageBox src={whoWeAreImages[0]} alt="Tim bekerja" className="col-span-1 sm:row-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2" />
      <ImageBox src={whoWeAreImages[1]} alt="Kerja sama bisnis" className="col-span-1 sm:col-span-2 row-span-1 lg:col-span-2 lg:row-span-1" />
      <ImageBox src={whoWeAreImages[2]} alt="Produksi film" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1" />
      <ImageBox src={whoWeAreImages[3]} alt="Desain digital" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1" />
      <ImageBox src={whoWeAreImages[4]} alt="Tim produksi video" className="col-span-1 sm:col-span-2 row-span-1 lg:col-span-2 lg:row-span-1" />
      <ImageBox src={whoWeAreImages[5]} alt="Diskusi tim kreatif" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1" />
    </div>

    {/* Kolom Kanan: Teks */}
    <div className="text-white mt-10 lg:mt-0 text-center lg:text-left lg:ml-40 xl:ml-36 2xl:ml-40  lg:max-w-[400px] lg:gap-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        FREE KONSULTASI 24 JAM
      </h2>
      {/* Versi mobile/tablet = normal paragraf */}
      {/* Versi desktop = pakai <br/> seperti desainmu */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:hidden">
        Ratusan klien dari seluruh Indonesia pernah bekerjasama dengan kami. Jangan ragu untuk berdiskusi dengan ngobrol dengan kami,GRATIS 24 jam.
      </p>
      

      {/* Hanya muncul di desktop */}
      <p className="hidden lg:block mt-6 text-[22px] leading-tight">
        Ratusan klien dari seluruh Indonesia pernah bekerjasama dengan kami. Jangan ragu untuk berdiskusi dengan ngobrol dengan kami, GRATIS 24 JAM.
      </p>
      
    </div>
  </div>
</section>


      {/* section 2 */}


{/* MEET OUR CREATIVE TEAM */}
<div className="relative w-full max-w-[1440px] lg:max-w-full mx-auto bg-gradient-to-br from-[#4B0000] to-[#B30000] bg-[url('/assets/foto-ProfilPage/bg-4.png')] bg-cover bg-center bg-blend-multiply text-white text-center py-20 overflow-hidden">

  {/* ===== INI FOTO TAMBAHANNYA (DI BAWAH foto-3) ===== */}
  {/* Foto ini memiliki z-index di antara background (-z-0 yang setara dengan z-0) dan foto-3 (z-[5]) */}
  <img
    src='/assets/foto-ProfilPage/element-kanan.png' // <-- Pastikan path dan nama file sudah benar
    alt="Elemen dekoratif kanan"
    // Atur posisi, ukuran, dan z-index di sini
    className="absolute top-90 -right-4 z-[1] w-[300px] h-[480px] pointer-events-none"
  />
  <img
    src='/assets/foto-ProfilPage/element-kiri.png' // <-- Pastikan path dan nama file sudah benar
    alt="Elemen dekoratif kiri"
    // Atur posisi, ukuran, dan z-index di sini
    className="absolute top-90 -left-4 md: lg: z-[1] w-[300px] h-[480px] pointer-events-none"
  />
  {/* ================================================= */}

  {/* Gambar background utama (YANG AKAN MENIMPANYA) */}
  <div className='absolute top-0 left-0 right-0 h-[400px] flex justify-center items-start pt-20 z-[5]'>
    <img
      src='/assets/foto-ProfilPage/bg-tengah.jpg'
      className='w-full lg:max-w-[1450px] md:max-w-[750px] 2xl:max-w-[2000px] md:mx-1 lg:mx-4 h-full  object-cover brightness-80 rounded-[70px]'
      alt='foto bg'
    />
  </div>

  {/* Konten Judul dan Slider (INI TIDAK DIUBAH) */}
  <div className='relative z-[10]'> {/* Pastikan z-index ini lebih tinggi dari elemen tambahan */}
    <h1 className='text-5xl font-bold -mb-6 pt-30'>MEET OUR CREATIVE TEAM</h1>
    <div className=''>
      {/* ===== INI FOTO TAMBAHANNYA (DI BAWAH foto-3) ===== */}
    {/* Foto ini memiliki z-index di antara background (-z-0 yang setara dengan z-0) dan foto-3 (z-[5]) */}
    <img
      src='/assets/foto-ProfilPage/element-kanan-bawah.png' // <-- Pastikan path dan nama file sudah benar
      alt="Elemen dekoratif kanan"
      // Atur posisi, ukuran, dan z-index di sini
      className="absolute -bottom-24 -right-4 z-[1] w-[300px] h-[480px] pointer-events-none"
    />
    <img
      src='/assets/foto-ProfilPage/element-kiri-bawah.png' // <-- Pastikan path dan nama file sudah benar
      alt="Elemen dekoratif kiri"
      // Atur posisi, ukuran, dan z-index di sini
      className="absolute -bottom-24 -left-4 z-[1] w-[300px] h-[480px] pointer-events-none"
    />
    {/* ================================================= */}

        <SliderTeam />
    </div>
  </div>

</div>
{/* MEET OUR CREATIVE TEAM */}
    </div>
  )
}

export default Profile;