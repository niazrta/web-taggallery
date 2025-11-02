import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const cards = [
  {
    title: "Sosial Media Management",
    img: "/assets/foto-ServicePage/foto_sosial_media_management.webp",
    alt: "Sosial Media Management",
    features: [
      "Social Media Strategy & Planning",
      "Scheduling & Publishing",
      "Social Media Ads Management",
    ],
  },
  {
    title: "Commercial Photography",
    img: "/assets/foto-ServicePage/foto-social.png",
    alt: "Commercial Photography",
    features: [
      "Product Photography",
      "Corporate Headshot",
      "Fashion & Lifestyle Shoot",
    ],
  },
  {
    title: "Company Profile",
    img: "/assets/foto-ServicePage/foto_company_profile.webp",
    alt: "Company Profile",
    features: [
      "Desain Company Profile",
      "Penulisan Konten Profil ",
      "Branding",
    ],
  },
  {
    title: "Google Maps Management",
    img: "/assets/foto-ServicePage/foto-google.png",
    alt: "Google Maps Management",
    features: [
      "Add Review Bintang 5",
      "Add Section Q&A",
      "Post Promo & Konten",
    ],
  },
  {
    title: "Video Production",
    img: "/assets/foto-ServicePage/foto-video.png",
    alt: "Video Production",
    features: [
      "Video Company Profile",
      "Video Branding",
      "Video Konten Sosmed",
    ],
  },
  {
    title: "Selebgram Management",
    img: "/assets/foto-ServicePage/foto-selebgram.png",
    alt: "Selebgram Management",
    features: ["Paid Promote", "Talent Photo/Video", "Affiliator Program"],
  },
  {
    title: "Marketplace Management",
    img: "/assets/foto-ServicePage/foto-marketplace.png",
    alt: "Marketplace Management",
    features: ["Katalog Product", "Admin Marketplace", "Admin Live Shopping"],
  },
  {
    title: "Drone Footage",
    img: "/assets/foto-ServicePage/foto-drone.png",
    alt: "Commercial Photography",
    features: ["Photo & Video", "Dokumentasi", "Cinematic Drone Shot"],
  },
  {
    title: "Branding Strategy",
    img: "/assets/foto-ServicePage/foto-branding.png",
    alt: "Branding Strategy",
    features: ["Brand Research", "Content Strategy", "Rebranding"],
  },
  {
    title: "Website Production",
    img: "/assets/foto-ServicePage/foto-website.png",
    alt: "Website Production",
    features: [
      "Company Profile Website",
      "E-Commerce Website",
      "SEO Optimization",
    ],
  },
  {
    title: "Graphic Design",
    img: "/assets/foto-ServicePage/foto-graphic.png",
    alt: "Graphic Design",
    features: [
      "Logo & Brand Identity",
      "Media Content Design",
      "Packaging Design",
    ],
  },
  {
    title: "Free Human Resources Training",
    img: "/assets/foto-ServicePage/foto-free.png",
    alt: "Free Human Resources Training",
    features: [
      "Training Digital Marketing",
      "Training Content Creator",
      "Training Mental Health",
    ],
  },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const CardSlider = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // cek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // jumlah card per halaman
  const size = isMobile ? 4 : 6;
  const pages = chunkArray(cards, size);

  // swipe handler khusus mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => setPage((p) => (p < pages.length - 1 ? p + 1 : p)),
    onSwipedRight: () => setPage((p) => (p > 0 ? p - 1 : p)),
    trackMouse: true,
  });

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div
        {...(isMobile ? handlers : {})}
        className="relative w-full max-w-[750px]"
      >
        {/* Grid */}
        <div
          className={`grid gap-6 ${
            isMobile ? "grid-cols-1 grid-rows-4" : "grid-cols-2 grid-rows-3"
          }`}
        >
          {pages[page].map((card, idx) => (
            <div
              key={idx}
              className="bg-transparent border border-white/30 rounded-lg overflow-hidden shadow-lg h-[250px] relative transition-transform duration-300 hover:scale-105 hover:shadow-xl p-2"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full absolute top-0 left-0 object-cover z-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x170?text=Image+Not+Found";
                  }}
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-21 bg-red-900/50 py-0 z-10">
                  <span className="text-white font-semibold text-lg ml-2">
                    {card.title}
                  </span>
                  <ul className="mt-0.5 space-y-1 ml-2">
                    {card.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-white text-sm leading-none"
                      >
                        <i className="ri-checkbox-fill text-white mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol navigasi hanya untuk desktop/tablet */}
        {!isMobile && page < pages.length - 1 && (
          <button
            onClick={() => setPage((p) => p + 1)}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl -mr-12 lg:-mr-12 md:-mr-2"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        )}
        {!isMobile && page > 0 && (
          <button
            onClick={() => setPage((p) => p - 1)}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-5xl -ml-12 lg:-ml-14 md:-ml-2"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
        )}
      </div>

      {/* Dot pagination hanya mobile */}
      {isMobile && (
        <div className="flex mt-4 space-x-2">
          {pages.map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === page ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
