import { FaSteam, FaPlaystation, FaXbox, FaApple, FaGooglePlay, FaTwitter, FaInstagram, FaFacebook, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SiNintendo, SiEpicgames } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section - Platform Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="https://store.steampowered.com" aria-label="Steam" className="hover:text-blue-400 transition-colors">
            <FaSteam className="text-3xl" />
          </a>
          <a href="https://www.playstation.com" aria-label="PlayStation" className="hover:text-blue-500 transition-colors">
            <FaPlaystation className="text-3xl" />
          </a>
          <a href="https://www.xbox.com" aria-label="Xbox" className="hover:text-green-500 transition-colors">
            <FaXbox className="text-3xl" />
          </a>
          <a href="https://www.nintendo.com" aria-label="Nintendo" className="hover:text-red-500 transition-colors">
            <SiNintendo className="text-3xl" />
          </a>
          <a href="https://www.epicgames.com" aria-label="Epic Games" className="hover:text-purple-500 transition-colors">
            <SiEpicgames className="text-3xl" />
          </a>
          <a href="https://www.apple.com/app-store" aria-label="App Store" className="hover:text-gray-300 transition-colors">
            <FaApple className="text-3xl" />
          </a>
          <a href="https://play.google.com" aria-label="Google Play" className="hover:text-green-400 transition-colors">
            <FaGooglePlay className="text-3xl" />
          </a>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/Aboutus" className="hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500 transition-colors ">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://discord.com" aria-label="Discord" className="hover:text-indigo-500 transition-colors">
              <FaDiscord className="text-xl" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-red-500 transition-colors">
              <FaYoutube className="text-xl" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved. All trademarks are property of their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;