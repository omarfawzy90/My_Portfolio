import React from 'react';
import { Mail, Terminal, Code, Shield } from 'lucide-react';

const Footer = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const email = 'omarfawzyy90@gmail.com';
    const subject = 'Contact Request';
    const body = 'Hello,\n\nI would like to get in touch with you.\n\nBest regards';
    
    // Encode the mailto URL properly
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    console.log('Attempting to open:', mailtoLink); 
    
    try {
      // Primary method - direct assignment
      window.location.href = mailtoLink;
      
      // Fallback - create temporary link
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 100);
      
    } catch (error) {
      console.error('Mailto failed:', error);
      // Fallback - copy email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email copied to clipboard: ${email}`);
      }).catch(() => {
        alert(`Please email me at: ${email}`);
      });
    }
  };

  return (
    <footer className="bg-black text-white border-t mb-2 border-green-500 py-10 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-xl font-mono font-bold text-green-400">
                &gt; SYSTEM_ONLINE
              </span>
            </div>
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              [STATUS: OPERATIONAL]<br />
              Secure communications established.<br />
              Ready for data transmission.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-400 font-mono font-bold uppercase tracking-wider">
              &gt; Quick_Access
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Code className="w-4 h-4" />
                <a href="https://github.com/omarfawzy90">Projects</a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Shield className="w-4 h-4" />
                <span>Security</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors cursor-pointer">
                <Terminal className="w-4 h-4" />
                <span>Terminal</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-400 font-mono font-bold uppercase tracking-wider">
              &gt; Establish_Contact
            </h3>
            <p className="text-gray-300 font-mono text-sm">
              Initiate secure communication channel
            </p>
            <button
              onClick={handleContactClick}
              className="relative z-20 group bg-black border-2 border-green-500 text-green-400 px-6 py-3 font-mono font-bold uppercase tracking-wider hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer active:scale-95"
              type="button"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>&gt; Contact_Me</span>
              </div>
            </button>
          </div>
        </div>

        <div className="border-t border-green-500 pt-6">
          <div className="font-mono text-sm text-gray-400 space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <div>
                <span className="text-green-400">root@system:~$</span> echo "Omar Fawzy© 2025 All rights reserved"
              </div>
              <div className="flex space-x-4">
                <span className="text-green-400">[ENCRYPTED]</span>
                <span className="text-green-400">[SECURE]</span>
                <span className="text-green-400">[VERIFIED]</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              &gt; Connection established via secure protocol | Last ping: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;