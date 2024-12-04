import { useState, useEffect, useRef } from 'react';

const Hero3 = () => {
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
      id="hero3"
      className="bg-teal-600 py-8 px-8 md:px-16"
      ref={sectionRef}
    >
      <section
        className={`text-white flex flex-col-reverse md:flex-row-reverse items-center justify-center rounded-lg transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} transform ${fadeIn ? 'translate-x-0' : '-translate-x-10'}`}
      >
        {/* Kolom Kiri dengan Gambar */}
        <div className={`md:w-1/2 mt-4 md:mt-0 flex justify-center transition-all duration-1000 ${fadeIn ? 'translate-x-0' : 'translate-x-10'}`}>
          <img
            src="/laptop.png"
            alt="Laptop with Templates"
            className="w-full md:w-auto"
          />
        </div>

        {/* Kolom Kanan dengan Teks */}
        <div className={`md:w-1/2 text-center md:text-left mt-4 md:mt-0 transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} ${fadeIn ? 'translate-y-0' : '-translate-y-10'}`}>
          {/* Teks di atas judul */}
          <p className="italic text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
            Pekerjaan administratif bisa menghabiskan waktu berharga Kamu yang seharusnya bisa digunakan untuk hal yang lebih penting, entah itu belajar, bekerja, atau mengembangkan bisnis Anda.
          </p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            ZOLVE HADIR UNTUK KAMU!
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
            menyediakan template siap pakai yang akan menghemat waktu Kamu,
            mengurangi kesalahan, dan membuat dokumen Kamu lebih profesional tanpa repot.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Template yang berhubungan dengan Admin & HR
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero3;
