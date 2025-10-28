import React from 'react';
import { Mail, Terminal, Code, Shield, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const email = 'omarfawzyy90@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-black text-white border-t mb-2 border-green-500 py-10 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span className="text-lg sm:text-xl font-mono font-bold text-green-400">
                &gt; SYSTEM_ONLINE
              </span>
            </div>
            <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
              [STATUS: OPERATIONAL]<br />
              Secure communications established.<br />
              Ready for data transmission.
            </p>
          </div>

          {/* Quick Access Section */}
          <div className="space-y-4">
            <h3 className="text-green-400 font-mono font-bold uppercase tracking-wider text-sm sm:text-base">
              &gt; Quick_Access
            </h3>
            <div className="space-y-2 font-mono text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Code className="w-4 h-4" />
                <a 
                  href="https://github.com/omarfawzy90"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  Projects
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Github className="w-4 h-4" />
                <a 
                  href="https://github.com/omarfawzy90"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
                <a 
                  href="https://www.linkedin.com/in/omar-fawzy-6029b6177/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-green-400 font-mono font-bold uppercase tracking-wider text-sm sm:text-base">
              &gt; Establish_Contact
            </h3>
            <p className="text-gray-300 font-mono text-xs sm:text-sm">
              Initiate secure communication channel
            </p>
            <button
              onClick={handleContactClick}
              className="relative z-20 group w-full sm:w-auto bg-black border-2 border-green-500 text-green-400 px-4 sm:px-6 py-3 font-mono font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer active:scale-95"
              type="button"
              aria-label="Send email to Omar Fawzy"
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>&gt; Contact_Me</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 pt-6">
          <div className="font-mono text-xs sm:text-sm text-gray-400 space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div className="text-center md:text-left">
                <span className="text-green-400">root@system:~$</span> echo "Omar Fawzy © 2025 All rights reserved"
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4">
                <span className="text-green-400 text-xs">[ENCRYPTED]</span>
                <span className="text-green-400 text-xs">[SECURE]</span>
                <span className="text-green-400 text-xs">[VERIFIED]</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-left">
              &gt; Connection established via secure protocol | Last ping: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;