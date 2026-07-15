import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center group">
              <Logo />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              NexaTax provides expert consultation, negotiation, and resolution to protect your assets and secure your financial future.
            </p>
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-brand transition-colors">Tax Relief</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">Tax Preparation</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">Tax Negotiation</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">Protection Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-brand transition-colors">Our Team</Link></li>
              <li><Link to="/resources" className="hover:text-brand transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/resources" className="hover:text-brand transition-colors">Tax Tips</Link></li>
              <li><Link to="/resources" className="hover:text-brand transition-colors">IRS Updates</Link></li>
              <li><Link to="#" className="hover:text-brand transition-colors">Client Portal</Link></li>
              <li><Link to="#" className="hover:text-brand transition-colors">FAQs</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 border-t border-slate-100">
          <p>&copy; {new Date().getFullYear()} NexaTax. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-secondary">Privacy Policy</Link>
            <Link to="#" className="hover:text-secondary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
