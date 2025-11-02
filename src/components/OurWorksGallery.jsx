import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

const OurWorksGallery = () => {
  const [activeTab, setActiveTab] = useState("CLIENT FEEDBACK");
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");

    if (tabFromUrl && tabs.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);

  const tabs = [
    "CLIENT FEEDBACK",
    "VIDEO PRODUCTION",
    "PHOTO CONTENT",
    "DESIGN CONTENT",
    "LOGO DESIGN CONCEPT",
    "BRAND IDENTITY",
    "DRONE IMAGE",
    "TRAINING",
    "COMMERCIAL PHOTOGRAPHY",
  ];

  const clientFeedbackSlides = [
    [
      {
        type: "review",
        title: '"BEST SERVICE"',
        text: "Kami sudah bekerja sama dengan Taggallery Agency selama 3 tahun. Sosmed Management berhasil membuat brand kami viral",
        company: "PT Sun Star Motor",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/client/client-1.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/client/smk_palapa.webp",
      },
      {
        type: "review",
        title: '"BEST SERVICE"',
        text: "Langganan sosmed manajemen di Taggallery Agency terbukti mendatangkan banyak customer ke bengkel otomotif di sekolah kami",
        company: "SMK Palapa Semarang",
      },
    ],
    [
      {
        type: "review",
        title: '"GREAT WORK"',
        text: "Skill SDM kami meningkat setelah Taggallery menjadi konsultan sosial media dan SDM content creator",
        company: "PT Primaraja Djegang Bentomie",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/client/primaraja.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/client/blackcode.webp",
      },
      {
        type: "review",
        title: '"AWESOME SERVICE"',
        text: "Bisnis saya lebih dikenal pasar berkat manajemen E-Commerce dan sosial media dari Taggallery Agency  ",
        company: "Blackcode Tailor",
      },
    ],
  ];
  const videoProductionSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/video/video-1.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-4.webp" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/video/video-5.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-6.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-7.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/video/video-8.webp" },
    ],
  ];

  // Tambahkan array khusus untuk PHOTO CONTENT
  const photoContentSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-4.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-1.webp" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-5.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-6.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-7.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/photo2/photo-8.jpg" },
    ],
  ];
  const ContentSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/client-1.png" },
      { type: "image", src: "/assets/foto-GalleryPage/client-2.png" },
      { type: "image", src: "/assets/foto-GalleryPage/client-2.png" },
      { type: "image", src: "/assets/foto-GalleryPage/client-1.png" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/client-1.png" },
      { type: "image", src: "/assets/foto-GalleryPage/client-2.png" },
      { type: "image", src: "/assets/foto-GalleryPage/foto-7.png" },
      { type: "image", src: "/assets/foto-GalleryPage/foto-8.png" },
    ],
  ];
  const designContentSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-1.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-4.webp" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-1.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/design2/desain-4.webp" },
    ],
  ];
  const logoDesignConceptSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-1.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-4.webp" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-4.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/logo2/logo-1.webp" },
    ],
  ];
  const brandIdentitySlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/brand-1.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-2.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-3.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-4.png" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/brand-4.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-3.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-2.png" },
      { type: "image", src: "/assets/foto-GalleryPage/brand-1.png" },
    ],
  ];
  const droneImageSlides = [
    [
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-1.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-2.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-3.webp" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-4.webp" },
    ],
    [
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-5.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-6.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-7.jpg" },
      { type: "image", src: "/assets/foto-GalleryPage/drone2/drone-8.jpg" },
    ],
  ];
  const trainingSlides = [
    [
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-1.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-2.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-3.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-4.webp",
      },
    ],
    [
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-4.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-3.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-2.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/training2/training-1.webp",
      },
    ],
  ];
  const commercialPhotographySlides = [
    [
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-1.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-2.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-3.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-4.webp",
      },
    ],
    [
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-5.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-6.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-7.webp",
      },
      {
        type: "image",
        src: "/assets/foto-GalleryPage/commercial2/commercial-8.webp",
      },
    ],
  ];

  const renderContent = () => {
    const itemHeight = 250;
    const gapY = 24;

    const swiperHeight = itemHeight * 2 + gapY;

    switch (activeTab) {
      case "CLIENT FEEDBACK":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true} // Tambahkan properti ini
              className={`h-[${swiperHeight}px]`}
            >
              {clientFeedbackSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => {
                      if (item.type === "review") {
                        return (
                          <div
                            key={itemIndex}
                            className={`bg-orange-500 text-white text-center p-8 rounded-lg flex flex-col justify-center h-[${itemHeight}px]`}
                          >
                            <h3 className="text-2xl font-bold mb-4">
                              {item.title}
                            </h3>
                            <p className="text-lg mb-4">{item.text}</p>
                            <div className="flex items-center space-x-2">
                              <div class="bg-red-700 rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
                                <i class="ri-user-line text-black"></i>
                              </div>
                              <p className="font-semibold text-sm">
                                {item.company}
                              </p>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={itemIndex}
                            className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                          >
                            <img
                              src={item.src}
                              alt="Client meeting"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );

      case "VIDEO PRODUCTION":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {videoProductionSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Video production ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );

      case "DESIGN CONTENT":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {designContentSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Design content ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "PHOTO CONTENT":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {photoContentSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Photo content ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "LOGO DESIGN CONCEPT":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {logoDesignConceptSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Logo design ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "BRAND IDENTITY":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {brandIdentitySlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Brand identity ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "DRONE IMAGE":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {droneImageSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Drone image ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "TRAINING":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {trainingSlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Training ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );
      case "COMMERCIAL PHOTOGRAPHY":
        return (
          <div className="relative overflow-hidden">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              navigation={false}
              modules={[Navigation]}
              loop={true}
              className={`h-[${swiperHeight}px]`}
            >
              {commercialPhotographySlides.map((slideContent, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 h-full max-w-4xl mx-auto">
                    {slideContent.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-white rounded-lg overflow-hidden shadow-lg h-[${itemHeight}px]`}
                      >
                        <img
                          src={item.src}
                          alt={`Commercial photography ${itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol navigasi */}
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pl-8"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full text-white z-10 pr-8"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-red-800 text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold mt-6 text-center lg:text-left max-w-[1160px] mx-auto">
        OUR WORKS GALLERY
      </h1>

      {/* Container untuk tab + konten */}
      <div className="mt-6 max-w-[1160px] mx-auto">
        {/* Tab navigasi */}
        <nav
          className="
          grid grid-cols-3 gap-3 mb-6 mt-4 text-gray-300
          md:flex md:flex-wrap md:gap-2 lg:gap-11 justify-center lg:justify-start
        "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
              px-3 lg:px-2 py-2 text-sm font-medium rounded-[20px] leading-tight
              flex flex-col justify-start text-left
              ${
                activeTab === tab
                  ? "border border-white text-white"
                  : "hover:text-white"
              }
            `}
            >
              {tab === "LOGO DESIGN CONCEPT" ? (
                <>
                  <span className="block">LOGO DESIGN</span>
                  <span className="block">CONCEPT</span>
                </>
              ) : (
                tab
                  .split(" ")
                  .map((word, index) => <span key={index}>{word}</span>)
              )}
            </button>
          ))}
        </nav>

        <div className="w-full flex justify-center mb-4">
          <span className="inline-block bg-orange-500 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-md">
            Press and Hold the picture to see more details
          </span>
        </div>

        {/* Konten aktif */}
        <div className="mt-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default OurWorksGallery;
