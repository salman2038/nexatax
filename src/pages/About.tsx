import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Flag, Target, Compass, 
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';

const teamMembers = [
  { name: 'Eric Jackson', role: 'Founder & Lead Tax Consultant', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Sarah Jenkins', role: 'Senior Tax Attorney', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'David Thompson', role: 'CPA, Tax Preparation', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Elena Martinez', role: 'Client Success Manager', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500' }
];

const brands = ['Inc 5000', 'Deloitte Fast 500', 'Forbes 1000', 'Clutch Top 1000', 'Dot Comm Award', 'Horizon Gold'];

export function About() {
  return (
    <main className="flex-1 w-full bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-900">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
            Expert Tax & Financial Solutions to Secure Your Future
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We specialize in building scalable, user-centric tax strategies to help individuals and businesses resolve IRS issues and transform their financial future.
          </p>
        </div>

        {/* Hero Image & Overlay Card */}
        <div className="relative max-w-6xl mx-auto mt-12 md:mt-24">
          <div className="grid md:grid-cols-12 gap-6 relative">
            <div className="md:col-span-9 rounded-3xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Quote Card */}
            <div className="md:absolute right-0 top-1/2 md:-translate-y-1/2 md:w-[400px] bg-slate-950 text-white p-10 rounded-3xl shadow-2xl z-20">
              <p className="text-xl leading-relaxed mb-8 font-medium">
                "We don't just process tax returns. Our mission is to empower individuals and businesses with tax strategies that are as resilient and ambitious as they are."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Eric Jackson" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-800"
                />
                <div>
                  <div className="font-bold text-lg">Eric Jackson</div>
                  <div className="text-slate-400 text-sm">Founder & Lead Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold mb-6 border border-slate-200">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Discover why leading clients choose us
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                As a leading tax resolution firm, we remain committed to aggressive client advocacy, continuous education, and building strong relationships. Our focus is on securing your financial freedom with precision-driven strategies.
              </p>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800" 
                  alt="Business meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-brand/10 border border-brand/20 p-10 rounded-3xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-sm border border-brand/20">
                  <Flag size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Company Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  Our mission is to provide expert tax relief, reliable consultation, and scalable financial strategies that empower growth for individuals and businesses alike.
                </p>
              </div>

              <div className="bg-brand/10 border border-brand/20 p-10 rounded-3xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-sm border border-brand/20">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Company Vision</h3>
                <p className="text-slate-700 leading-relaxed">
                  Our vision is to become a leading force in tax resolution—where expertise meets uncompromising client advocacy, shaping a future free from IRS intimidation.
                </p>
              </div>

              <div className="bg-brand/10 border border-brand/20 p-10 rounded-3xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-sm border border-brand/20">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Future Goals</h3>
                <p className="text-slate-700 leading-relaxed">
                  We aim to expand our services, enter new markets, and continuously elevate the client experience through transparent, technology-driven resolution processes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brands Ticker */}
      <section className="py-16 border-t border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-slate-500 mb-10">Trusted by over 5,000 clients nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
            {brands.map((brand, i) => (
              <span key={i} className="text-xl font-bold tracking-tight text-slate-800">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* Left Large Image */}
            <div className="bg-slate-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team collaboration" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative z-10 bg-white p-8 rounded-3xl max-w-sm flex items-center gap-6 shadow-xl">
                <div className="text-5xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600 font-medium leading-snug border-l-2 border-brand pl-4">
                  Years of combined<br/>industry experience
                </div>
              </div>
            </div>

            {/* Right Side Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Top Full Width */}
              <div className="col-span-2 bg-slate-950 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden flex flex-col justify-center">
                {/* Dotted globe/map graphic placeholder */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 relative z-10">99%</div>
                <div className="text-slate-400 font-medium text-lg relative z-10">Success in Levy & Lien Stays</div>
              </div>

              {/* Bottom Left Light Green */}
              <div className="bg-brand rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">$100M+</div>
                <div className="text-slate-800 font-medium leading-snug">Tax Liabilities<br/>Resolved</div>
              </div>

              {/* Bottom Right Dark */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">50+</div>
                <div className="text-slate-400 font-medium leading-snug">State Jurisdictions<br/>Covered</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6">
              Team Member
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Talented team behind our<br/>financial services
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you're facing an active IRS audit or need comprehensive tax planning, we've got a strategy tailored for your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] mb-6 relative bg-slate-200">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="bg-brand rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Subtle dotted background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
              Launch with ease
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Take the First Step Toward Financial Freedom
            </h2>
            <p className="text-slate-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the full power of our expertise—free consultation. No credit card required, no strings attached.
            </p>
            <Link to="/contact" className="bg-slate-950 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-2xl mx-auto text-lg group">
              Book Your Free Consultation 
              <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-brand transition-colors">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
