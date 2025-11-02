import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  'VIDEO PRODUCTION',
  'PHOTO CONTENT',
  'DESIGN CONTENT',
  'LOGO DESIGN CONCEPT',
  'BRAND IDENTITY',
  'DRONE IMAGE',
  'TRAINING',
  'COMMERCIAL PHOTOGRAPHY',
  'CLIENT FEEDBACK',
];

const ServiceList = () => {
  return (
    <div className="w-full mt-12">
      <h3 className="text-2xl font-bold mb-4 text-white">Galeri Layanan Kami</h3>
      <div className="space-y-2">
        {services.map((service, index) => (
          <Link 
            to={`/gallery?tab=${encodeURIComponent(service)}`}
            key={index} 
            className="group flex items-center gap-2 text-white-300 hover:underline transition-all duration-200 ease-in-out"
          >
            <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1">
              &gt;
            </span>
            <span>{service}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;