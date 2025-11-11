import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    alamat_email: '',
    no_telp: '',
    pesan: '',
  });
  const [isSending, setIsSending] = useState(false);

  const faqs = [
    {
      question: "Kenapa bisnis perlu menggunakan jasa Taggallery Agency?",
      answer: "Taggallery Agency hadir untuk membantu brand tampil lebih profesional di ranah digital. Kami tidak hanya membuat konten, tetapi merancang strategi yang tepat agar setiap aktivitas digital memberikan dampak nyata pada citra, engagement, dan pertumbuhan bisnis Anda.",
    },
    {
      question: "Bagaimana alur kerja Taggallery dengan client?",
      answer: "Proses kerja kami dimulai dari konsultasi dan briefing untuk memahami kebutuhan brand, dilanjutkan dengan strategi serta perencanaan konten. Setelah itu, tim kami memproduksi konten kreatif, melakukan eksekusi dan publikasi di platform yang tepat, lalu memantau performa dan menyajikan laporan rutin agar hasilnya selalu terukur.",
    },
    {
      question: "Apa saja platform media sosial yang mampu dihandle oleh Taggallery Agency?",
      answer: "Kami mengelola berbagai platform populer seperti Instagram, Facebook, TikTok, LinkedIn, YouTube, Website, Google Ads, dan layanan SEO, serta menyesuaikan dengan kebutuhan audiens brand Anda",
    },
    {
      question: "Berapa biaya menggunakan jasa Taggallery Agency?",
      answer: "Biaya jasa kami fleksibel sesuai kebutuhan. Paket paling terjangkau tersedia mulai dari Rp 2 jutaan, sementara untuk kebutuhan project khusus berskala besar dapat mencapai ratusan juta rupiah.",
    },
    {
      question: "Dimana kantor Taggallery Agency",
      answer: "Kantor dan studio kami ada di Banyumanik, Kota Semarang. Namun, kami telah bekerjasama dengan klien dari seluruh Indonesia dari berbagai daerah",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_56d0guo',
      'template_jm91jze',
      formData,
      '4BGZK3iv6ZYXuI3kI'
    )
    .then((result) => {
        console.log(result.text);
        toast.success('Pesan berhasil terkirim!');
        setFormData({ nama_lengkap: '', alamat_email: '', no_telp: '', pesan: '' });
    }, (error) => {
        console.log(error.text);
        toast.error('Gagal mengirim pesan, coba lagi.');
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <div>
      <Toaster position="top-center" />
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
      <div>
        {/* Section 1 FAQ */}
        <div
          className="w-full min-h-screen text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/bg-page/bg-5-home.png')" }}
          data-aos="fade-up"
        >
          <div className="w-full max-w-[1200px] mx-auto px-4 py-24">
            <div>
              <h1 className="text-[48px] font-bold mb-12 text-center" data-aos="fade-down">
                Frequently Asked Questions
              </h1>

              <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                    <div
                      className="bg-[#FF0000] rounded-md px-4 py-3 font-semibold text-lg cursor-pointer hover:bg-red-700 transition-colors flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span>{faq.question}</span>
                      <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                        
                      </span>
                    </div>

                    <div
                      className={`
                        bg-[#C94B4B] rounded-md font-medium text-base
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${openIndex === index ? "max-h-[500px] opacity-100 py-5 px-6 mt-2" : "max-h-0 opacity-0"}
                      `}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      {/* End of Section 1 FAQ */}
      </div>

      <div
        style={{
          backgroundImage: "url('/assets/foto-ContactPage/bg-page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative max-w-[1440px] lg:max-w-full mx-auto text-white p-4 sm:p-6 lg:p-10 min-h-screen pt-12 sm:pt-16 lg:pt-18 overflow-hidden"
      >
        {/* Elemen dekoratif kanan atas */}
        <div className="absolute -top-10 -right-10 sm:-right-12 lg:-right-17 z-0 w-[200px] sm:w-[250px] lg:w-[300px] h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none">
          <img
            src="/assets/foto-ContactPage/bg-kanan-atas.png"
            alt="Dekoratif kanan atas"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Elemen dekoratif kiri bawah */}
        <div className="absolute -bottom-10 -left-10 sm:-left-10 lg:-left-12 z-0 w-[200px] sm:w-[250px] lg:w-[300px] h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none">
          <img
            src="/assets/foto-ContactPage/bg-kiri-bawah.png"
            alt="Dekoratif kiri bawah"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Section 2 Konten utama */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Section Kiri: Formulir Kontak */}
          <div className="col-span-1 p-4 w-full lg:ml-20" data-aos="fade-right">
            <h1 className="text-base sm:text-lg font-semibold mb-2">
              Nama Lengkap
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nama lengkap kamu?"
                  className="w-full p-2 rounded-lg bg-opacity-10 border border-white focus:outline-none focus:ring-2 focus:ring-white"
                  name="nama_lengkap"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h1 className="text-base sm:text-lg font-semibold mb-2">
                    Alamat Email
                  </h1>
                  <input
                    type="email"
                    placeholder="Alamat email aktif"
                    className="w-full p-2 rounded-lg bg-opacity-10 border border-white focus:outline-none focus:ring-2 focus:ring-white"
                    name="alamat_email"
                    value={formData.alamat_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-semibold mb-2">
                    No. Telp.
                  </h1>
                  <input
                    type="tel"
                    placeholder="Nomor telepon aktif"
                    className="w-full p-2 rounded-lg bg-opacity-10 border border-white focus:outline-none focus:ring-2 focus:ring-white"
                    name="no_telp"
                    value={formData.no_telp}
                    onChange={handleChange}
                    required
                  />
                  <p className="text-xs mt-1">*terhubung dengan WhatsApp</p>
                </div>
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-semibold mb-2">
                  Pesan
                </h1>
                <textarea
                  rows="4"
                  placeholder="Tuliskan pesan kamu disini...."
                  className="w-full p-2 rounded-lg bg-opacity-10 border border-white focus:outline-none focus:ring-2 focus:ring-white"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg mt-4 disabled:bg-red-400"
              >
                {isSending ? "Mengirim..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Section Tengah: Live Chat dan Social Media */}
          <div className="flex flex-col space-y-3.5 pt-4 sm:pt-6 lg:pt-7 mx-4 sm:mx-4 lg:mx-30 w-full" data-aos="fade-up">
            <div className="flex flex-col">
              <i className="ri-whatsapp-line text-3xl sm:text-4xl"></i>
              <h2 className="text-base sm:text-lg font-semibold">
                Live chat with us
              </h2>
              <a
                href="https://wa.me/+6289518278402"
                className="bg-[#bd7d71] hover:bg-[#977069] text-white py-1 px-18 sm:px-6 lg:px-19 rounded-full text-sm sm:text-base font-medium mt-4 w-fit"
              >
                Chat now
              </a>
            </div>
            <div className="flex flex-col">
              <i className="ri-mail-line text-3xl sm:text-4xl"></i>
              <h2 className="text-base sm:text-lg font-semibold">
                Send us an email
              </h2>
              <a
                href="#"
                className="bg-[#bd7d71] hover:bg-[#977069] text-white py-1 px-16 sm:px-6 lg:px-19 rounded-full text-sm sm:text-base font-medium mt-4 w-fit"
              >
                Contact us
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Follow us on :
              </h2>
              <div className="space-y-0">
                <a
                  href="https://www.instagram.com/taggalleryagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:scale-100 hover:opacity-80 transition-transform duration-200"
                >
                  <i className="ri-instagram-line text-2xl sm:text-3xl"></i>
                  <p className="text-base sm:text-lg">@taggalleryagency</p>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUuzZVJGfXTCFstndHZ3a0w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:opacity-80 transition duration-200"
                >
                  <i className="ri-youtube-line text-2xl sm:text-3xl"></i>
                  <p className="text-base sm:text-lg">@taggallery5513</p>
                </a>
                <a
                  href="https://www.tiktok.com/@taggallery_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:opacity-80 transition duration-200"
                >
                  <i className="ri-tiktok-line text-2xl sm:text-3xl"></i>
                  <p className="text-base sm:text-lg">@taggallery</p>
                </a>
              </div>
            </div>
          </div>

          {/* Section Kanan: Get in touch */}
          <div className="relative w-full">
            <div className="relative mt-10 rounded-lg overflow-hidden h-[380px] w-full sm:absolute sm:top-0 sm:right-0 sm:mr-[-9%] sm:mt-0 sm:w-[320px] md:w-[400px] lg:w-[440px]" data-aos="fade-left">
              <img
                src="/assets/foto-ContactPage/foto-bgCC.jpg"
                className="absolute inset-0 w-full h-full object-cover brightness-60"
                alt="background"
              />
              <div className="relative z-10 flex flex-col justify-center h-full text-left p-8 md:p-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Get in touch
                </h1>
                <p className="text-base sm:text-lg mt-2 sm:mt-4">
                  Jangan sungkan untuk <br />
                  menghubungi kami kapan saja.
                  <br />
                  Anda bisa berkonsultasi gratis
                  <br />
                  dengan tim ahli kami yang siap
                  <br />
                  membantu anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;