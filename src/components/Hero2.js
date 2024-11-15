import { useState, useEffect, useRef } from 'react';

const Hero2 = () => {
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
      id="hero2"
      className="bg-teal-800 py-8 px-8 md:px-16"  // Tidak ada transisi pada background
      ref={sectionRef}
    >
      <section
        className={`text-white py-6 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center rounded-lg transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} transform ${fadeIn ? 'translate-y-0' : '-translate-y-10'}`}
      >
        {/* Kolom Kiri dengan Gambar */}
        <div className="md:w-1/2 md:mt-0 flex justify-center mt-2">
          <img
            src="/orang-pusing.png"
            alt="Image"
            className={`w-full md:w-auto rounded-lg shadow-lg transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Kolom Kanan dengan Teks */}
        <div className={`md:w-1/2 text-center md:text-left pl-4 md:mt-0 transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
            KAMU PERNAH GAK SIH?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-2">
            Merasa pusing membuat dokumen administratif atau HR yang efisien, rapi, dan profesional.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Akhirnya Kamu malah buang-buang waktu untuk menyusun format yang tepat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
