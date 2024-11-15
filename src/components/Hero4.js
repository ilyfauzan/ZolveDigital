import { useState, useEffect, useRef } from 'react';

const Hero4 = () => {
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
      id="hero4"
      className="bg-teal-800 py-16 px-8 md:px-16"
      ref={sectionRef}
    >
      <section className="text-white text-center">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 mb-10 transition-all duration-1000 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          KENAPA HARUS ZOLVE?
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* First Column - Anime 1 */}
          <div
            className={`md:w-1/3 flex flex-col items-center transition-all duration-1000 ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/anime1.png"
              alt="Mahasiswa"
              className="w-24 mb-4 transition-all duration-1000"
            />
            <p className="text-lg sm:text-xl md:text-2xl">
              Zolve hadir untuk <strong>Mahasiswa</strong>, membantu membangun pengalaman kerja nyata di bidang Admin & HR
            </p>
          </div>

          {/* Second Column - Anime 2 */}
          <div
            className={`md:w-1/3 flex flex-col items-center transition-all duration-1000 ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/anime2.png"
              alt="Job Seeker"
              className="w-24 mb-4 transition-all duration-1000"
            />
            <p className="text-lg sm:text-xl md:text-2xl">
              Zolve hadir untuk <strong>Job Seeker</strong> yang ingin meningkatkan skill dan peluang karir di bidang Admin & HR
            </p>
          </div>

          {/* Third Column - Anime 3 */}
          <div
            className={`md:w-1/3 flex flex-col items-center transition-all duration-1000 ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/anime3.png"
              alt="Professional"
              className="w-24 mb-4 transition-all duration-1000"
            />
            <p className="text-lg sm:text-xl md:text-2xl">
              Apalagi kamu yang <strong>Profesional</strong>, Template ini mempermudah pekerjaanmu dan mendukung perkembangan karirmu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero4;
