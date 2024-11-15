import { useState, useEffect, useRef } from 'react';

const Hero6 = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      // Memeriksa apakah bagian tersebut terlihat di layar
      if (sectionTop <= windowHeight * 0.8) {
        setFadeIn(true); // Menyalakan transisi saat bagian tersebut muncul di layar
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Pastikan transisi tidak terjadi saat halaman pertama kali dimuat
    setFadeIn(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="hero6"
      className="bg-teal-600 text-white py-8"
      ref={sectionRef}
    >
      <h1
        className={`text-3xl md:text-5xl font-bold mt-10 text-yellow-500 text-center text-shadow transition-all duration-1000 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        PAKET BUNDLE GRATIS!
      </h1>
      <section className="bg-teal-800 text-white mt-10 items-center justify-between px-6 md:px-8 relative rounded-lg mx-4 md:mx-auto">
        {/* Books and Feature List */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
          {/* Feature Text */}
          <div
            className={`text-lg md:text-1xl mb-12 md:mb-0 font-bold text-left md:w-1/2 md:pl-6 space-y-3 order-2 md:order-2 transition-all duration-1000 ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="mb-2">Fitur Utama:</p>
            <ul>
              <li>1. Akses ke beberapa template dasar, meliputi: Absensi, Jobdesk, Meeting Doc, Perjanjian Kerja</li>
              <li>2. Solusi praktis untuk kebutuhan dasar administrasi.</li>
              <li>3. Ideal untuk mencoba manfaat dari template Zolve tanpa biaya.</li>
            </ul>
          </div>

          {/* Book Image */}
          <div
            className={`flex justify-center mb-0 sm:mb-0 md:mb-0 md:w-1/3 relative order-1 md:order-1 transition-all duration-1000 ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/book2.png"
              alt="Free Template Admin & HR"
              className="w-3/4 md:w-2/3 md:-mt-14"
            />
          </div>
        </div>
      </section>

      {/* Download Button Outside the Section */}
      <div
        className={`flex justify-center mt-12 pb-6 transition-all duration-1000 ${
          fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <a
          href="https://wa.me/6287823410388?text=Halo%20kak%2C%20saya%20mau%20dapat%20template%20gratis%20apa%20syaratnya%20ya"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg"
        >
          FREE DOWNLOAD
        </a>
      </div>
    </div>
  );
};

export default Hero6;
