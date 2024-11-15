import { useState, useEffect, useRef } from 'react';

const Hero5 = () => {
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
      id="hero5"
      className="bg-teal-700 py-8 px-8 md:px-16"
      ref={sectionRef}
    >
      <section className="text-white py-6 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center rounded-lg transition-all duration-1000">
        {/* Book Image */}
        <div
          className={`md:w-1/2 mt-4 md:mt-0 flex justify-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <img src="/tablet1.png" alt="Image" className="w-full md:w-[130%]" /> {/* Increased image width */}
        </div>

        {/* Feature Text */}
        <div
          className={`md:w-1/2 md:mt-0 text-left mx-auto transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="w-full max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-yellow-500">TEMPLATES ZOLVE!</h1>
            <div className="grid grid-cols-2 gap-4 text-left">
              <ul className="list-disc pl-3 space-y-2">
                <li>Absensi</li>
                <li>APD Dokumentasi</li>
                <li>BPJS Kesehatan</li>
                <li>Perjanjian Kerja</li>
                <li>Database Karyawan</li>
              </ul>
              <ul className="list-disc pl-3 space-y-2">
                <li>Jobdesk</li>
                <li>Kompensasi</li>
                <li>Meeting Dokument</li>
                <li>BPJS Ketenagakerjaan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero5;
