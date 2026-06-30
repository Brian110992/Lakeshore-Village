import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-graphite text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-gold font-bold text-xl mb-6">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-gold w-5 h-5" />
              <a href="tel:2093148064" className="hover:text-gold transition-colors">(209) 314-8064</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-gold w-5 h-5" />
              <a href="mailto:info@thehalsteadteam.com" className="hover:text-gold transition-colors">info@thehalsteadteam.com</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gold w-5 h-5 mt-1" />
              <span>777 S Ham Ln., Suite A,<br />Lodi, CA 95242</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold font-bold text-xl mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/search" className="hover:text-gold transition-colors">Search</Link></li>
            <li><Link to="/market-report" className="hover:text-gold transition-colors">Market Report</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Social & Branding */}
        <div>
          <h3 className="text-gold font-bold text-xl mb-6">Follow Us</h3>
          <div className="flex gap-4 mb-8">
            <a href="https://www.instagram.com/the.halstead.real.estate.team/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold hover:text-graphite transition-all">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/TheHalsteadTeam" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold hover:text-graphite transition-all">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@HalsteadTeam" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-gold hover:text-graphite transition-all">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <div className="text-sm opacity-70">
            <p>The Halstead Team - Real Estate Agents</p>
            <p>Expertise in Lakeshore Village & West Lodi</p>
            <p className="mt-2 text-gold/80">CalDRE #01992952</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-sm opacity-60">
        <p>Copyright 2026 The Halstead Team | Powered by The Halstead Team</p>
      </div>
    </footer>
  );
}
