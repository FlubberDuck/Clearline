import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2a4a] text-white pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg inline-block self-start">
              <Logo />
            </div>
            <p className="text-gray-300 mt-4 max-w-sm">
              Cut the Clutter. Clear the Line.<br />
              Your reliable partner for professional cable and aerial removal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">QUICK LINKS</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li><a href="#home" className="hover:text-[#4a9c3a] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#4a9c3a] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#4a9c3a] transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-[#4a9c3a] transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-[#4a9c3a] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#4a9c3a] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">OUR SERVICES</h3>
            <ul className="flex flex-col gap-3 text-gray-300">
              <li>TV Aerial Removal (Free)</li>
              <li>Phone Line Removal (Free)</li>
              <li>Cable & Wiring Clearance</li>
              <li>Repairs & Restoration</li>
              <li>External Tidying</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">CONTACT US</h3>
            <ul className="flex flex-col gap-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4a9c3a] shrink-0 mt-0.5" />
                <div>
                  <div>0800 246 1010</div>
                  <div>07304 142128</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4a9c3a] shrink-0" />
                <a href="mailto:info@clearlineRemovals.co.uk" className="hover:text-white transition-colors">
                  info@clearlineRemovals.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4a9c3a] shrink-0 mt-0.5" />
                <span>Covering all local areas</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3 text-gray-400">FOLLOW US</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#2a3a5a] flex items-center justify-center hover:bg-[#4a9c3a] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2a3a5a] flex items-center justify-center hover:bg-[#4a9c3a] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2024 ClearLine Removal Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
