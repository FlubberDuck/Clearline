import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Antenna, 
  Phone, 
  Cable, 
  Droplets, 
  Wrench, 
  Scissors,
  CheckCircle2,
  Shield,
  Award,
  Sparkles,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    icon: <Antenna className="w-8 h-8" />,
    title: "TV Aerial Removal",
    desc: "We safely remove unwanted TV aerials and brackets — completely free of charge.",
    free: true
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone Line Removal",
    desc: "We remove old phone lines and associated wiring — completely free of charge.",
    free: true
  },
  {
    icon: <Cable className="w-8 h-8" />,
    title: "Cable & Wiring Clearance",
    desc: "We clear redundant cables and wiring to tidy up your property.",
    free: false
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Wall Entry Point Sealing",
    desc: "We seal and weatherproof unused cable entry points.",
    free: false
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repairs & Restoration",
    desc: "From small patch repairs to full restorations, we've got it covered.",
    free: false
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "External Tidying",
    desc: "We tidy and secure remaining cables for a clean, neat finish.",
    free: false
  }
];

export default function Home() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 selection:bg-[#4a9c3a] selection:text-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#1a2a4a] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex justify-center gap-3 mb-8 flex-wrap"
              >
                <motion.span variants={fadeIn} className="px-4 py-1.5 rounded-full bg-[#4a9c3a]/20 text-[#4a9c3a] font-bold text-sm tracking-wide border border-[#4a9c3a]/30">
                  TV Aerials Removed FREE
                </motion.span>
                <motion.span variants={fadeIn} className="px-4 py-1.5 rounded-full bg-[#4a9c3a]/20 text-[#4a9c3a] font-bold text-sm tracking-wide border border-[#4a9c3a]/30">
                  Phone Lines Removed FREE
                </motion.span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
              >
                Cut the Clutter.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9c3a] to-[#7be668]">Clear the Line.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto"
              >
                YOUR PROPERTY, CABLE FREE
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <Button 
                  size="lg" 
                  className="bg-[#4a9c3a] hover:bg-[#3d832f] text-white h-14 px-8 text-lg font-bold"
                  onClick={() => scrollTo("#contact")}
                  data-testid="hero-cta-contact"
                >
                  GET A FREE REMOVAL
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-500 text-white hover:bg-white/10 h-14 px-8 text-lg font-bold"
                  onClick={() => scrollTo("#services")}
                  data-testid="hero-cta-services"
                >
                  OUR SERVICES
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center gap-2 text-gray-400 font-semibold tracking-widest text-sm"
              >
                <Award className="w-5 h-5 text-[#4a9c3a]" />
                SAFE. RELIABLE. PROFESSIONAL.
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#4a9c3a] font-bold tracking-wider mb-2">OUR SERVICES</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a2a4a] mb-6">FREE REMOVAL. EXPERT REPAIRS.</h3>
              <p className="text-lg text-gray-600">
                We provide professional removal of unwanted aerials and phone lines completely free of charge. Any necessary repairs are quoted before work begins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                  }}
                  className="bg-[#f5f5f5] p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1a2a4a] mb-6 group-hover:bg-[#4a9c3a] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1a2a4a] mb-3 pr-12">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  
                  {service.free && (
                    <div className="absolute top-6 right-6 bg-[#4a9c3a] text-white text-xs font-bold px-3 py-1 rounded-full">
                      FREE
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT & WHY CHOOSE US */}
        <section id="about" className="py-24 bg-[#f5f5f5]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-[#4a9c3a] font-bold tracking-wider mb-2">ABOUT US</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a2a4a] mb-6 leading-tight">
                  CLEARING CONNECTIONS.<br/>IMPROVING HOMES.
                </h3>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  At ClearLine Removal Services, we specialise in the professional removal of TV aerials, phone lines and unwanted cables from your property. We take pride in delivering a clean, safe and reliable service with no hidden fees for removals.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <Shield className="w-8 h-8 text-[#4a9c3a] shrink-0" />
                    <div>
                      <h5 className="font-bold text-[#1a2a4a]">Fully Insured</h5>
                      <p className="text-sm text-gray-500">Complete peace of mind for your property</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <Award className="w-8 h-8 text-[#4a9c3a] shrink-0" />
                    <div>
                      <h5 className="font-bold text-[#1a2a4a]">Experienced Professionals</h5>
                      <p className="text-sm text-gray-500">Expert tradesmen you can trust</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <Sparkles className="w-8 h-8 text-[#4a9c3a] shrink-0" />
                    <div>
                      <h5 className="font-bold text-[#1a2a4a]">Clean & Tidy Workmanship</h5>
                      <p className="text-sm text-gray-500">We leave your property spotless</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                id="why-choose-us"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#1a2a4a] p-10 md:p-14 rounded-3xl text-white shadow-2xl"
              >
                <h3 className="text-3xl font-extrabold mb-8">WHY CHOOSE US?</h3>
                <ul className="flex flex-col gap-6">
                  {[
                    "FREE removal of aerials & phone lines",
                    "No hidden charges",
                    "Fast, friendly & reliable service",
                    "Repairs carried out to the highest standard",
                    "We treat your property with care"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="bg-[#4a9c3a] rounded-full p-1 mt-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg md:text-xl font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-gray-300 mb-4 font-medium">Ready to clear your property?</p>
                  <Button 
                    className="w-full bg-[#4a9c3a] hover:bg-[#3d832f] h-14 text-lg font-bold"
                    onClick={() => scrollTo("#contact")}
                  >
                    BOOK NOW <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & GALLERY */}
        <section id="gallery" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[#4a9c3a] font-bold tracking-wider mb-2">RECENT WORK</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a2a4a]">SEE THE DIFFERENCE</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Before/After placeholder block */}
              <div className="lg:col-span-7">
                <div className="bg-[#f5f5f5] rounded-3xl p-4 md:p-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-xl uppercase tracking-widest bg-white/80 px-4 py-2 rounded shadow-sm">Before</span>
                  </div>
                  <div className="flex-1 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#e8f5e9] border-2 border-dashed border-[#4a9c3a]/30 flex items-center justify-center">
                    <span className="text-[#4a9c3a] font-bold text-xl uppercase tracking-widest bg-white/90 px-4 py-2 rounded shadow-sm">After</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="lg:col-span-5 bg-[#1a2a4a] text-white p-10 md:p-12 rounded-3xl relative">
                <div className="text-6xl text-[#4a9c3a] font-serif absolute top-6 left-8 opacity-40">"</div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl font-medium leading-relaxed mb-8">
                    Great service from start to finish. Aerial removed quickly and the wall repaired perfectly.
                  </p>
                  <div>
                    <h5 className="font-bold text-lg text-[#4a9c3a]">Mr T. Johnson</h5>
                    <span className="text-gray-400">Birmingham</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section id="contact" className="py-20 bg-[#1a2a4a] text-white border-t-8 border-[#4a9c3a]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              FREE REMOVALS <span className="text-gray-400 font-light hidden md:inline">|</span> <span className="block md:inline mt-2 md:mt-0 text-[#4a9c3a]">REPAIRS QUOTED SEPARATELY</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get in touch today for a free assessment and clear your property of unwanted clutter.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a href="tel:08002494368" className="flex items-center gap-3 text-2xl font-bold hover:text-[#4a9c3a] transition-colors">
                <Phone className="w-8 h-8 text-[#4a9c3a]" />
                0800 2494368
              </a>
              <span className="hidden sm:block text-gray-600 text-3xl font-light">/</span>
              <a href="tel:07304142128" className="flex items-center gap-3 text-2xl font-bold hover:text-[#4a9c3a] transition-colors">
                <Phone className="w-8 h-8 text-[#4a9c3a]" />
                07304 142128
              </a>
            </div>

            <Button size="lg" className="bg-[#4a9c3a] hover:bg-[#3d832f] text-white h-16 px-10 text-xl font-bold shadow-xl shadow-[#4a9c3a]/20">
              GET YOUR FREE REMOVAL
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
