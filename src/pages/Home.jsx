import React, { useState, useEffect } from "react";
import LogoSlider from "../components/LogoSlider";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL;
        const res = await axios.get(`${apiUrl}/api/blogs`);
        setLatestArticles(res.data.slice(0, 3));
      } catch (error) {
        console.error("Gagal mengambil artikel terbaru:", error);
      }
    };
    fetchLatest();
  }, []);

  const createPreview = (content) => {
    try {
      const parsed = JSON.parse(content);
      const textBlock = parsed.blocks.find(
        (block) => block.type === "paragraph" || block.type === "header"
      );
      if (!textBlock) return "";

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = textBlock.data.text;
      let plainText = tempDiv.textContent || tempDiv.innerText || "";

      return plainText.length > 100
        ? plainText.substring(0, 100) + "..."
        : plainText;
    } catch {
      return "No preview available";
    }
  };

  const whoWeAreImages = [
    "assets/foto-HomePage/fotoTim_rev/potrait.webp",
    "assets/foto-HomePage/fotoTim_rev/landscape.webp",
    "assets/foto-ProfilPage/kolase-3.png",
    "assets/foto-HomePage/fotoTim_rev/remote.webp",
    "assets/foto-HomePage/fotoTim_rev/landscape2.webp",
    "assets/foto-ProfilPage/kolase-6.png",
  ];

  const ImageBox = ({ src, alt, className }) => (
    <div
      className={`group relative overflow-hidden rounded-lg border-2 border-white ${className}`}
    >
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
      {/* Hero Section */}
      <div className=" ">
        <div
          className="text-white min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen bg-cover bg-center mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-36 px-4 sm:px-6 md:px-8 lg:px-10"
          style={{ backgroundImage: "url('/assets/bg-page/bg-3-home.png')" }}
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          {/* //lg:text-48px// */}
          <div className="ml-4 sm:ml-8 md:ml-28 lg:ml-86 xl:ml-80 lg:-mt-4  ">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight sm:max-w-160 mt-10 sm:mt-0 "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Kami Bantu Brandmu Tampil Berkesan, Berdampak, & Berkelas.
            </h1>
            <p
              className="ml-1 mt-2.5 text-lg sm:text-xl md:text-2xl lg:text-[24px]"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Taggallery Agency: Solusi Lengkap Bisnismu
            </p>
            <div
              className="flex flex-col sm:flex-row gap-2 -mt-2 mb-10 sm:mb-16 md:mb-20 lg:mb-23 relative"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <button></button>
              <a
                href="https://wa.me/+6289518278402"
                target="_blank"
                rel="noopener noreferrer"
                className="button1 text-base bg-[#D31313] hover:bg-[#980505] px-4 p-1 rounded-2xl mt-12 w-fit ml-20 sm:ml-0 sm:translate-x-0 lg:translate-x-0"
              >
                KONSULTASI GRATIS
              </a>
              <Link
                to="/profile"
                className="button2 text-base bg-[#bd7d71] hover:bg-[#977069] px-10 sm:px-8 w-fit p-1 rounded-2xl mt-4 sm:mt-12 sm:translate-x-10 ml-20 sm:ml-0"
              >
                About us
              </Link>
            </div>
            {/* Trusted by */}
            <div
              className="flex sm:flex-row items-center gap-4 sm:gap-2 pb-10 sm:pb-16 lg:pb-20 -translate-y-6 "
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="flex items-center -space-x-3 sm:-space-x-4 lg:-space-x-5 mr-2 sm:mr-0">
                <img
                  src="/assets/foto-HomePage/logo-mitsubishi.jpg"
                  className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-full border-1 border-black object-contain"
                  alt="Logo Mitsubishi"
                />
                <img
                  src="/assets/foto-HomePage/logo-djp.jpg"
                  className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-full border-1 border-black bg-white object-contain"
                  alt="Logo DJP"
                />
                <img
                  src="/assets/foto-HomePage/logo-telkom.webp"
                  className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 rounded-full border-1 border-black bg-white object-contain"
                  alt="Logo Telkom"
                />
              </div>
              <div className="h-20 sm:h-17 w-0.5 sm:w-px bg-white my-4 sm:my-0"></div>
              <div className="text-sm sm:text-md lg:text-md">
                <p>Trusted by</p>
                <p className="text-xl sm:text-2xl font-bold">100++</p>
                <p>Brands Across Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        {/* section 2 (INI BAGIAN YANG DIUBAH) */}
        {/* section 2 (RESPONSIVE) */}
        {/* section 2 (RESPONSIVE + DESKTOP SESUAI DESAIN BARU) */}
        <section
          className="bg-cover bg-center bg-no-repeat py-10 sm:py-16 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('/assets/foto-ProfilPage/bg-2.png')" }}
          data-aos="fade-up"
          data-aos-duration="1000"
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
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* === Mobile/Tablet pakai default (auto-rows) === */}
              {/* === Desktop pakai fixed grid 3x3 === */}
              <ImageBox
                src={whoWeAreImages[0]}
                alt="Tim bekerja"
                className="col-span-1 sm:row-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2"
              />
              <ImageBox
                src={whoWeAreImages[1]}
                alt="Kerja sama bisnis"
                className="col-span-1 sm:col-span-2 row-span-1 lg:col-span-2 lg:row-span-1"
              />
              <ImageBox
                src={whoWeAreImages[2]}
                alt="Produksi film"
                className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1"
              />
              <ImageBox
                src={whoWeAreImages[3]}
                alt="Desain digital"
                className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1"
              />
              <ImageBox
                src={whoWeAreImages[4]}
                alt="Tim produksi video"
                className="col-span-1 sm:col-span-2 row-span-1 lg:col-span-2 lg:row-span-1"
              />
              <ImageBox
                src={whoWeAreImages[5]}
                alt="Diskusi tim kreatif"
                className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1"
              />
            </div>

            {/* Kolom Kanan: Teks */}
            <div
              className="text-white mt-10 lg:mt-0 text-center lg:text-left lg:ml-40 xl:ml-36 2xl:ml-40  lg:max-w-[400px] lg:gap-6"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                data-aos="fade-down"
                data-aos-delay="600"
              >
                Who We Are?
              </h2>
              {/* Versi mobile/tablet = normal paragraf */}
              {/* Versi desktop = pakai <br/> seperti desainmu */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:hidden">
                Taggallery adalah Creative Digital Agency yang berdiri sejak
                2021 untuk membantu brand go digital, lebih kreatif, dan
                berdampak.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:hidden">
                Kami terdiri dari videografer, fotografer, desainer, ads
                strategist, dan director yang telah berpengalaman menggarap
                proyek dari brand lokal hingga nasional.
              </p>

              {/* Hanya muncul di desktop */}
              <p className="hidden lg:block mt-6 text-[22px] leading-tight">
                Taggallery adalah Creative <br />
                Digital Agency yang berdiri sejak 2021
                <br />
                untuk membantu brand go digital, <br />
                lebih kreatif, dan <br />
                berdampak.
              </p>
              <p className="hidden lg:block mt-4 text-[22px] leading-tight">
                Kami terdiri dari videografer, <br />
                fotografer, desainer, ads strategist, dan director yang telah
                berpengalaman menggarap proyek dari
                <br />
                brand lokal hingga nasional <br />
              </p>
            </div>
          </div>
        </section>

        {/* Layanan Section */}
        <div
          className="text-white w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bg-page/bg-4-home.png')" }}
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start w-full">
              <div
                className="w-full"
                data-aos="slide-right"
                data-aos-delay="300"
              >
                <img
                  src="assets/foto-ProfilPage/bg-top-2.jpg"
                  alt="Consultation Service"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-90 object-cover rounded-xl shadow-lg ml-0 lg:ml-4 relative bottom-4"
                />
              </div>
              <div
                className="flex flex-col justify-center relative bottom-8"
                data-aos="slide-left"
                data-aos-delay="500"
              >
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  OUR SERVICE
                </h1>
                <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
                  - Sosial Media Manajemen <br />
                  - Digital Marketing Manajemen <br />
                  - Selebgram Manajemen <br />
                  - Website Production <br />
                  - Video Company Profile <br />
                  - Foto Produk <br />
                  - Ecommerce Manajemen <br />
                  - Google Maps Manajemen <br />
                  - Drone Foto & Video <br />
                  - Branding Strategy <br />
                  - Event Organizer <br />
                  - Human Resource Training <br />
                </p>
                <div className="mt-8">
                  <a
                    href="https://wa.me/+6289518278402  "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#D31313] hover:bg-[#980505] text-white px-6 p-1 text-base rounded-2xl w-fit transition duration-300 ease-in-out"
                  >
                    KONSULTASI GRATIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artikel Section */}
        <div
          className="relative w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-full mx-auto bg-[#8a0000] text-white flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="overflow-hidden absolute top-0 right-0 w-full h-full z-[1]">
            <img
              src="/assets/foto-ServicePage/bg-kanan-atas.png"
              alt="Elemen dekoratif kanan"
              className="absolute -top-1 -right-2 w-[200px] sm:w-[250px] lg:w-[300px] h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none"
            />
          </div>
          <div className="relative bg-[rgba(94,1,0,1)] p-4 sm:p-6 md:p-8 lg:p-10 rounded-t-[80px] sm:rounded-t-[100px] lg:rounded-t-[130px] lg:flex mt-16 sm:mt-20 lg:mt-25 z-[2]">
            <div
              className="lg:w-1/2 flex flex-col justify-center pb-10 sm:pb-16 lg:pb-26 ml-0 sm:ml-8 lg:ml-12 mb-6 sm:mb-8 lg:mb-0"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white mt-8 sm:mt-0">
                Fresh Updates <br className="hidden md:inline" />
                from Taggallery
              </h2>
              <div className="w-full sm:w-100 h-1 bg-white mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md text-gray-200">
                Dapatkan informasi terbaru,
                <br />
                cerita inspiratif, dan insight
                <br />
                menarik dari dunia kreatif
                <br />
                Taggallery.
              </p>
              <Link
                to="/articles"
                className="button1 text-base bg-[#D31313] hover:bg-[#980505] px-8 p-1 rounded-2xl w-fit"
              >
                See more
              </Link>
            </div>
            <div
              className="lg:w-1/2 -mt-8 sm:mt-8 md:-mt-12 lg:mt-0 lg:-ml-10 sm:lg:-ml-14 lg:-ml-18 space-y-3 sm:space-y-4"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              {latestArticles.map((article, index) => (
                <Link 
                to={`/artikel/${article.slug}`}
                key={article._id}
                className="flex space-x-3 sm:space-x-4 items-start" 
                data-aos="slide-up"
                data-aos-delay={200 + index * 100}
                >
                  
                  <img
                  src={
                    article.banner_url
                    ? article.banner_url
                    : "/assets/placeholder-banner.jpg"
                  }
                  alt={article.title}
                  className="w-40 sm:w-48 md:w-52 lg:w-58 h-24 sm:h-28 md:h-32 lg:h-34 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white line-clamp-2">
                      {article.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg mt-1 text-gray-300 line-clamp-2">
                        {createPreview(article.content)}
                        </p>
                        
                        <span
                        className="text-sm mt-1 text-white hover:text-zinc-400 transition duration-300"
                        >
                          Read More...
                      </span>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div
          className="relative w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-full mx-auto bg-[#8a0000] text-white flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-0"
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <div className="overflow-hidden absolute top-0 right-0 w-full h-full z-[1]">
            <img
              src="/assets/foto-ServicePage/bg-kanan-atas.png"
              alt="Elemen dekoratif kanan"
              className="absolute -top-1 -right-2 w-[200px] sm:w-[250px] lg:w-[300px] h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none"
            />
          </div>
          <div className="h-auto sm:h-120 lg:h-150 relative bg-[rgba(94,1,0,1)] p-4 sm:p-6 md:p-8 lg:p-10 rounded-t-[80px] sm:rounded-t-[100px] lg:rounded-t-[130px] flex flex-col items-center z-[2] mt-16 sm:mt-20 lg:mt-26">
            <h1
              className="mt-4 sm:-mt-16 md:-mb-16 md:-mt-24 lg:-mt-20 text-xl sm:text-2xl font-bold text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              BRANDS GROW WITH TAGGALLERY – YOUR PARTNER IN CREATIVE DIGITAL
              SOLUTIONS
            </h1>
            <div
              className="mt-4 sm:mt-6 md:mt-12 lg:mt-24 w-full"
              data-aos="slide-up"
              data-aos-delay="500"
            >
              <LogoSlider />
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div
          className="w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-screen text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bg-page/bg-5-home.png')" }}
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <div className="w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-[1200px] h-full mx-auto flex items-center px-4 sm:px-6 md:px-8">
            <div
              className=" mt-0 sm:mt-40 max-w-full sm:max-w-3xl md:max-w-4xl text-left ml-0 sm:ml-8 md:ml-12 lg:ml-20"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                GARANSI UANG KEMBALI JIKA TIDAK CAPAI TARGET
              </h1>
              <div
                className="bg-white h-[2px] w-full max-w-md my-6 sm:my-8"
                data-aos="slide-right"
                data-aos-delay="700"
              ></div>
              <p
                className="text-base sm:text-lg md:text-xl"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                "Kami berani memberikan garansi uang kembali
                <br />
                100% jika target yang disepakati tidak tercapai."
              </p>
              <Link to="/contact">
                <button
                  className="bg-[#FF0000] hover:bg-red-700 transition-colors duration-300 text-white px-12 p-1 text-base rounded-2xl mt-8"
                  data-aos="zoom-in"
                  data-aos-delay="1100"
                >
                  Discuss Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
