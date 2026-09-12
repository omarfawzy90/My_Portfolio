import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:omarfawzyy90@gmail.com";
  };

  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-black"
      aria-label="Contact and Footer"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Contact CTA */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-6">
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out if you'd like to connect.
          </p>
          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 bg-emerald-500 text-black px-7 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
            type="button"
            aria-label="Send email to Omar Fawzy"
            id="footer-contact-email"
          >
            <Mail size={18} />
            <span>Get In Touch</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Links and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t border-white/5">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:omarfawzyy90@gmail.com"
                className="block text-gray-400 text-sm hover:text-emerald-400 transition-colors"
              >
                omarfawzyy90@gmail.com
              </a>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <MapPin size={13} />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/omar-fawzy-6029b6177"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/omarfawzy90"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-emerald-400 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Experience", "Skills", "Projects"].map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    const el = document.getElementById(label.toLowerCase());
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="block text-gray-400 text-sm hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-center text-gray-600 text-xs sm:text-sm">
            © {currentYear} Omar Fawzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;