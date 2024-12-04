import { useState, useEffect } from 'react';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500); // 500ms delay before fade-in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="hero"
      className="bg-teal-600 py-16 px-8 md:px-16"
    >
      <section
        className={`bg-teal-800 text-white py-12 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center rounded-lg mt-2 md:mt-4 transition-all duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Left Column with Heading */}
        <div
          className={`md:w-1/2 text-center md:text-left  mt-6 md:mt-0 transition-all duration-1000 transform ${fadeIn ? 'translate-y-0' : '-translate-y-10'}`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
            #Mudah & Siap Pakai
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            BUKA PELUANG BARU DALAM KARIER KAMU DENGAN PRODUKTIVITAS YANG LEBIH TINGGI!
          </h1>
        </div>

        {/* Right Column with Image */}
        <div
          className={`md:w-1/2 mt-8 md:mt-0 flex justify-center transition-all duration-1000 transform ${fadeIn ? 'translate-y-0' : '-translate-y-10'}`}
        >
          <img
            src="/templates-book.png"
            alt="Book Cover"
            className="w-full md:w-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
