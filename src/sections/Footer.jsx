import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/assets/grad.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-black text-orange-500 py-6"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/mfc_vit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/mfcvit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/mfcvit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@MozillaFirefoxClubVIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://github.com/MFC-VIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-orange-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="text-center text-sm">
            <p>
            &copy; 2024 COPYRIGHT: MOZILLA FIREFOX CLUB, VIT
            </p>
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
