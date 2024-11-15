import { useState, useEffect, useRef } from 'react';

const Hero7 = () => {
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
    <section
      id="hero7"
      className="bg-teal-800 py-16 px-6 lg:px-24"
      ref={sectionRef}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div
          className={`text-left lg:text-left text-white lg:mb-0 transition-all duration-1000 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500">
            PAKET ZOLVE EKSKLUSIF!
          </h1>
          <p className="text-lg lg:text-xl">Fitur Utama:</p>
          <ul className="space-y-2">
            <li className="text-base lg:text-lg">1. Akses ke Semua Template Premium</li>
            <li className="text-base lg:text-lg">2. Dukungan Pelanggan: Mendapatkan bantuan untuk penggunaan template berupa video.</li>
            <li className="text-base lg:text-lg">3. Update Rutin: Akses konten edukasi Admin & HR bulanan.</li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div
          className={`lg:w-1/2 mt-4 transition-all duration-1000 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/Hero7.png" // Path to your uploaded image
                alt="Product"
                className="rounded-lg shadow-lg"
              />
              {/* Button with Transition */}
              <a
              href="https://wa.me/6287823410388?text=Halo%20kak%2C%20saya%20tertarik%20untuk%20beli%20bundle%20template%20Zolve"
              target="_blank"
              rel="noopener noreferrer"
        >
                <div className="bg-yellow-400 text-black mt-10 py-2 px-6 rounded-full cursor-pointer hover:bg-yellow-300 transition duration-300 max-w-fit mx-auto">
                  DAPATKAN!
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
