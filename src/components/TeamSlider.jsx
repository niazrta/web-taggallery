import React from 'react';
import Slider from 'react-slick';

// Array data anggota tim
const teamMembers = [
  {
    name: 'TRIWANDA TIRTA ADITYA',
    role: 'FOUNDER & CEO',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar sebenarnya
    socials: {
      instagram: '#',
      linkedin: '#',
      tiktok: '#',
    },
  },
  {
    name: 'GITTA',
    role: 'PROJECT MANAGER',
    image: 'https://via.placeholder.com/150',
    socials: {
      instagram: '#',
      linkedin: '#',
      tiktok: '#',
    },
  },
  {
    name: 'RIZKY',
    role: 'VIDEOGRAPHER',
    image: 'https://via.placeholder.com/150',
    socials: {
      instagram: '#',
      linkedin: '#',
      tiktok: '#',
    },
  },
  {
    name: 'GHANA',
    role: 'SOSMED SPESIALIST',
    image: 'https://via.placeholder.com/150',
    socials: {
      instagram: '#',
      linkedin: '#',
      tiktok: '#',
    },
  },
];

const TeamSlider = () => {
  // Pengaturan Slick Carousel untuk responsivitas dan tampilan kartu
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-red-900 p-8">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-red-800 rounded-xl p-6 text-white text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={`Foto ${member.name}`} // Alt text untuk aksesibilitas
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                {/* Ikon Media Sosial */}
                <a href={member.socials.instagram} className="text-white hover:text-gray-400">
                  {/* Sisipkan ikon Instagram di sini */}
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.socials.linkedin} className="text-white hover:text-gray-400">
                  {/* Sisipkan ikon LinkedIn di sini */}
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.socials.tiktok} className="text-white hover:text-gray-400">
                  {/* Sisipkan ikon TikTok di sini */}
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;