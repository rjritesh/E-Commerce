import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-4 mt-10">
      <div className="container mx-auto text-center px-4">
        {/* Copyright + Name */}
        <p className="text-sm sm:text-base leading-relaxed">
          © {new Date().getFullYear()} Built with ❤️ by{" "}
          <span className="font-semibold text-white">Ritesh</span> |
          All rights reserved
        </p>

        {/* Links section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6  text-gray-400">
          <a
            href="https://github.com/rjritesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jhariteshkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
