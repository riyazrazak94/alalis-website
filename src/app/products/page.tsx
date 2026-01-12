import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Zap, Droplets, Building2, Wrench, ShieldCheck, Check, ArrowRight, BadgeCheck, DollarSign, Truck, HeadphonesIcon, MessageCircle } from "lucide-react";
import { COMPANY_NAME, PRODUCT_CATEGORIES, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description: `Browse our complete range of building materials, electrical supplies, and construction equipment at ${COMPANY_NAME}. Quality products at competitive prices.`,
};

const categoryIcons: Record<string, React.ReactNode> = {
  electrical: <Zap className="w-8 h-8" />,
  "sanitary-plumbing": <Droplets className="w-8 h-8" />,
  "building-materials": <Building2 className="w-8 h-8" />,
  "hardware-tools": <Wrench className="w-8 h-8" />,
  safety: <ShieldCheck className="w-8 h-8" />,
};

export default function ProductsPage() {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Quality Building Materials & Supplies
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Explore our comprehensive range of construction materials, electrical supplies, 
              plumbing equipment, and industrial tools from world-renowned manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-10 -mt-16 flex flex-wrap justify-center gap-10 md:gap-20 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1e40af] to-[#3b82f6] mb-1">{PRODUCT_CATEGORIES.length}</div>
              <div className="text-slate-600 font-medium">Categories</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1e40af] to-[#3b82f6] mb-1">5000+</div>
              <div className="text-slate-600 font-medium">Products</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1e40af] to-[#3b82f6] mb-1">50+</div>
              <div className="text-slate-600 font-medium">Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-sm font-semibold mb-4 tracking-wide">
              BROWSE PRODUCTS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Browse by Category
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Click on any category to view products and inquire about pricing. 
              We offer competitive rates for bulk orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Category Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#1e40af] shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {categoryIcons[category.id]}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-7">
                  <p className="text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Products List */}
                  <ul className="space-y-2.5 mb-5">
                    {category.items.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-[#1e40af]/10 flex items-center justify-center mr-3 shrink-0">
                          <Check className="w-3 h-3 text-[#1e40af]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* View Category Link */}
                  <div className="flex items-center text-[#1e40af] font-semibold group-hover:text-[#f97316] transition-colors pt-4 border-t border-slate-100">
                    View All Products
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#f97316] rounded-full text-sm font-semibold mb-4 tracking-wide">
              WHY BUY FROM US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Your Trusted Supplier Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BadgeCheck className="w-8 h-8" />,
                title: "Genuine Products",
                description: "All products sourced directly from authorized manufacturers and distributors",
                color: "from-[#1e40af] to-[#3b82f6]",
                shadow: "shadow-blue-500/25",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Best Prices",
                description: "Competitive pricing with special discounts for bulk and wholesale orders",
                color: "from-[#22c55e] to-[#16a34a]",
                shadow: "shadow-green-500/25",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Same-day delivery available in Doha. Quick shipping across Qatar",
                color: "from-[#f97316] to-[#fb923c]",
                shadow: "shadow-orange-500/25",
              },
              {
                icon: <HeadphonesIcon className="w-8 h-8" />,
                title: "Expert Support",
                description: "Technical guidance from our experienced team to help you choose right",
                color: "from-[#8b5cf6] to-[#a78bfa]",
                shadow: "shadow-purple-500/25",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100 transition-all duration-500 group">
                <div className={`w-18 h-18 bg-linear-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We have thousands of products in our inventory. Contact us directly and we&apos;ll 
            help you find exactly what you need for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e40af] font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello! I'm looking for specific products. Can you help?`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 mr-2" fill="currentColor" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
