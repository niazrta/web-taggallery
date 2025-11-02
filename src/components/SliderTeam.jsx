import React from 'react';

// Data tim lengkap berdasarkan gambar, digabungkan menjadi satu array.
const teamData = [
  { name: 'TRIAWANDA TIRTA ADITYA', role: 'FOUNDER & CEO', image: '/assets/foto-ProfilPage/foto-tim/tim-1.png' },
  { name: 'GITTA', role: 'PROJECT MANAGER', image: '/assets/foto-ProfilPage/foto-tim/tim-2.png' },
  { name: 'RIZKY', role: 'VIDEOGRAPHER', image: '/assets/foto-ProfilPage/foto-tim/tim-3.png' },
  { name: 'GHANA', role: 'SOSMED SPESIALIST', image: '/assets/foto-ProfilPage/foto-tim/tim-4.png' },
  { name: 'JIMMY', role: 'PHOTOGRAPHER', image: '/assets/foto-ProfilPage/foto-tim/tim-5.png' },
  { name: 'AFIZ', role: 'VIDEOGRAPHER', image: '/assets/foto-ProfilPage/foto-tim/tim-6.png' },
  { name: 'DWIKI', role: 'SOSMED SPESIALIST', image: '/assets/foto-ProfilPage/foto-tim/tim-7.png' },
  { name: 'DYAH', role: 'FINANCE OFFICER', image: '/assets/foto-ProfilPage/foto-tim/tim-8.png' },
  { name: 'IRFAN', role: 'VIDEOGRAPHER', image: '/assets/foto-ProfilPage/foto-tim/tim-9.png' },
  { name: 'SONY', role: 'GRAPHIC DESIGNER', image: '/assets/foto-ProfilPage/foto-tim/tim-10.png' },
  { name: 'ESTU', role: 'EDITOR', image: '/assets/foto-ProfilPage/foto-tim/tim-13.png' },
  { name: 'SANTIKA', role: 'COPYWRITER', image: '/assets/foto-ProfilPage/foto-tim/tim-11.png' },
  { name: 'DIMAS', role: 'PHOTOGRAPHER', image: '/assets/foto-ProfilPage/foto-tim/tim-12.png' },
];

const TeamSection = () => {
  // Memisahkan data CEO dari anggota tim lainnya
  const ceo = teamData[0];
  const members = teamData.slice(1);

  return (
    // ===== PERUBAHAN DI SINI =====
    <div className="relative z-10 text-white py-20 px-4 md:px-12">
      <div className="flex flex-col items-center">
        
        {/* KARTU CEO DI TENGAH ATAS */}
        <div className="w-46.5 h-62 mb-4 pt-3 bg-[#650000] rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-3 ">
            <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-base font-bold">{ceo.name}</h3>
          <p className="text-sm">{ceo.role}</p>
        </div>

        {/* GRID UNTUK SEMUA ANGGOTA TIM LAINNYA */}
        <div className=" mr-2 -ml-2 md:mx-0 grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 max-w-4xl">
          {members.map((member, index) => (
            <div key={index} className="bg-[#650000] p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center mb-4 pt-3 w-46.5 h-62">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4 ">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;

// <div key={index} className="bg-red-600 p-6 rounded-lg text-center">
                //   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white">
                //     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                //   </div>
                //   <h3 className="text-lg font-bold">{member.name}</h3>
                //   <p className="text-sm">{member.role}</p>
                //   {/* Social media icons */}
                // </div>