import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Zap, ArrowRight, MessageCircle, Droplets, Building2, Wrench, ShieldCheck, Flame, Hammer } from "lucide-react";
import { COMPANY_NAME, ABOUT_US, STATS, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: ABOUT_US.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] text-white py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#f97316] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
              About {COMPANY_NAME}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Building Qatar&apos;s Future Since 2017
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              {ABOUT_US.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-10 -mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1e40af] to-[#3b82f6] mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-sm font-semibold mb-5 tracking-wide">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Over 8 Years of Excellence
              </h2>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2017, {COMPANY_NAME} has grown from a small trading company to become 
                  one of Qatar&apos;s leading suppliers of building materials and electrical supplies. 
                  Our journey has been marked by a commitment to quality, customer satisfaction, 
                  and continuous improvement.
                </p>
                <p>
                  {ABOUT_US.specialization}
                </p>
                <p>
                  Today, we serve contractors, businesses, and homeowners across Qatar, providing 
                  them with the materials they need to bring their construction projects to life. 
                  Our extensive inventory, competitive pricing, and expert support have made us 
                  the preferred choice for thousands of customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-slate-50 to-slate-100 rounded-3xl flex items-center justify-center border border-slate-200 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt={COMPANY_NAME}
                  width={280}
                  height={140}
                  className="w-auto h-auto max-w-[75%] drop-shadow-lg"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#f97316]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#1e40af]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#f97316] rounded-full text-sm font-semibold mb-4 tracking-wide">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-linear-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {ABOUT_US.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-linear-to-br from-[#f97316] to-[#fb923c] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {ABOUT_US.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-sm font-semibold mb-4 tracking-wide">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Complete Solutions Under One Roof
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We are a professional trading company, grouping under one roof a wide range of 
              construction materials from worldwide known manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Electrical Supplies", icon: <Zap className="w-7 h-7" />, description: "Switches, plugs, breakers, LED lighting, and complete wiring solutions", color: "from-[#f59e0b] to-[#d97706]" },
              { title: "Plumbing Materials", icon: <Droplets className="w-7 h-7" />, description: "PVC fittings, PPR pipes, valves, and all plumbing accessories", color: "from-[#3b82f6] to-[#2563eb]" },
              { title: "Sanitary Ware", icon: <Wrench className="w-7 h-7" />, description: "Wash basins, toilets, bathtubs, mixers, and shower systems", color: "from-[#06b6d4] to-[#0891b2]" },
              { title: "Construction Materials", icon: <Building2 className="w-7 h-7" />, description: "Nails, wiremesh, bitumen membranes, abrasives, and more", color: "from-[#8b5cf6] to-[#7c3aed]" },
              { title: "Fire Safety & PPE", icon: <Flame className="w-7 h-7" />, description: "Fire alarms, sprinklers, helmets, gloves, and safety equipment", color: "from-[#ef4444] to-[#dc2626]" },
              { title: "Power Tools", icon: <Hammer className="w-7 h-7" />, description: "Drills, grinders, saws, hammers, and professional-grade tools", color: "from-[#22c55e] to-[#16a34a]" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 bg-linear-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold rounded-xl hover:from-[#1e3a5f] hover:to-[#1e40af] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#f97316] rounded-full text-sm font-semibold mb-4 tracking-wide">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Quality", description: "We source only the highest quality materials from reputable manufacturers worldwide." },
              { title: "Integrity", description: "We conduct our business with honesty, transparency, and ethical practices." },
              { title: "Service", description: "We provide expert guidance and support to help customers find the right solutions." },
              { title: "Reliability", description: "We are committed to delivering on our promises, every time." },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white shadow-xl shadow-slate-200/50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1e40af] to-[#3b82f6]">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-linear-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#f97316] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your project requirements. Our team is ready to help 
            you find the right materials at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e40af] font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello! I'd like to learn more about Al Alis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
