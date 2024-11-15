import { useState, useEffect, useRef } from 'react';

const Hero8 = () => {
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
    <div id="hero8" className="bg-teal-700 py-16 px-8 md:px-16" ref={sectionRef}>
      <section className="text-white py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Question 1 */}
            <div
              className={`transition-all duration-1000 ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-yellow-500 text-black p-4 rounded-md">
                <h2 className="font-bold text-lg">Produknya bentuknya apa kak?</h2>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-md">
                <p>Berupa file Word & Excel bisa kamu edit sesuai kebutuhan, juga terdapat video penggunaannya kak.</p>
              </div>
            </div>

            {/* Question 2 */}
            <div
              className={`transition-all duration-1000 ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-yellow-500 text-black p-4 rounded-md">
                <h2 className="font-bold text-lg">Ini cara pakainya gimana?</h2>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-md">
                <p>File-nya nanti kita kirim via WhatsApp. Kakak tinggal download dan gunakan sesuai kebutuhan.</p>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className={`transition-all duration-1000 ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-yellow-500 text-black p-4 rounded-md">
                <h2 className="font-bold text-lg">Aku mengalami kendala, gimana nih?</h2>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-md">
                <p>Bisa DM, bisa WhatsApp kami, +62 897-9915-668, pokoknya kami bantu.</p>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className={`transition-all duration-1000 ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-yellow-500 text-black p-4 rounded-md">
                <h2 className="font-bold text-lg">Masih bingung juga kak</h2>
              </div>
              <div className="bg-teal-800 text-white p-4 rounded-md">
                <p>WhatsApp kita yak +62 897-9915-668 langsung kami pandu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero8;
