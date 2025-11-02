// src/components/LogoSlider.jsx
import React, { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const totalSlides = 5; // ganti sesuai jumlah screenshot
const BASE_SLIDES = Array.from(
  { length: totalSlides },
  (_, i) => `/assets/logos/slide-${i}.png`
);

// Tinggi slide sama dengan versi grid 4x4
const itemHeight = 250;
const gapY = 24;
const swiperHeight = itemHeight * 2 + gapY; // = 524px

const LogoSlider = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const slides = useMemo(() => {
    const arr = [...BASE_SLIDES];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto py-10 px-10 bg-transparent">
      {/* Tombol Navigasi */}
      <div
        ref={swiperNavPrevRef}
        className="absolute -left-16 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-3 text-white hover:text-white/70 transition"
      >
        <i className="ri-arrow-left-s-line text-5xl"></i>
      </div>

      <div
        ref={swiperNavNextRef}
        className="absolute -right-16 top-1/2 -translate-y-1/2 cursor-pointer z-10 p-3 text-white hover:text-white/70 transition"
      >
        <i className="ri-arrow-right-s-line text-5xl"></i>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
        loop
        centeredSlides
        slidesPerView={1.5}
        spaceBetween={-106}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="group"
      >
        {slides.map((src) => (
          <SwiperSlide key={src}>
            {({ isActive }) => (
              <div
                className={`h-[${swiperHeight}px] flex items-center justify-center transition-transform duration-500 ease-in-out ${
                  isActive ? "scale-100" : "scale-60 opacity-50"
                }`}
              >
                <img
                  src={src}
                  alt={src}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-lg"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
