const Footer = () => {
    return (
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold">ZOLVE DIGITAL</p>
              <p className="text-xs">Menyediakan solusi template Admin & HR yang praktis dan mudah digunakan untuk kebutuhan bisnis Anda.</p>
            </div>
  
            {/* Social Media Links with Icons */}
            <div className="flex space-x-6 mt-4 md:mt-0 items-center">
              <a
                href="https://instagram.com/zolve.id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
              >
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
              <a
                href="https://wa.me/6287823410388"
                target="_blank"
                rel="noopener noreferrer"
                className="transition"
              >
                <img
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Zolve Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  