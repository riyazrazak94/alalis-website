"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle, Loader2, Clock, Building2 } from "lucide-react";
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_2, WHATSAPP_NUMBER, EMAIL, ADDRESS, PO_BOX, WORKING_HOURS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create WhatsApp message
    const message = `Hello! I'm contacting you from your website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`;

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const message = "Hello! I'd like to inquire about your products and services.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Have questions or need a quote? We&apos;re here to help. Reach out to us through 
              any of the channels below or fill out the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-6 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-10 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Call Us</h3>
              <div className="space-y-2">
                <a href={`tel:${PHONE_NUMBER}`} className="block text-[#1e40af] hover:text-[#3b82f6] font-medium transition-colors">+974 4486 4702</a>
                <a href={`tel:${WHATSAPP_NUMBER}`} className="block text-[#1e40af] hover:text-[#3b82f6] font-medium transition-colors">+974 5562 2006</a>
                <a href={`tel:${PHONE_NUMBER_2}`} className="block text-[#1e40af] hover:text-[#3b82f6] font-medium transition-colors">+974 7008 9595</a>
              </div>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#f97316] to-[#fb923c] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email Us</h3>
              <a href={`mailto:${EMAIL}`} className="text-[#1e40af] hover:text-[#3b82f6] font-medium transition-colors">{EMAIL}</a>
            </div>

            {/* Location */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#22c55e] to-[#16a34a] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visit Us</h3>
              <p className="text-slate-600">{ADDRESS}</p>
              <p className="text-slate-600">{PO_BOX}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div id="quote" className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 lg:p-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-100">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 text-lg">
                    Thank you for contacting us. We&apos;ll respond via WhatsApp or email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="text-[#1e40af] font-semibold hover:text-[#3b82f6] transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] outline-none transition-all bg-slate-50 hover:bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] outline-none transition-all bg-slate-50 hover:bg-white"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] outline-none transition-all bg-slate-50 hover:bg-white"
                        placeholder="+974 XXXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] outline-none transition-all bg-slate-50 hover:bg-white cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Price Quote">Price Quote</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] outline-none transition-all resize-none bg-slate-50 hover:bg-white"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-linear-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold rounded-xl hover:from-[#1e3a5f] hover:to-[#1e40af] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="bg-linear-to-br from-[#22c55e] to-[#16a34a] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Prefer WhatsApp?</h3>
                      <p className="text-green-100">Get instant responses</p>
                    </div>
                  </div>
                  <p className="mb-8 text-green-100 text-lg leading-relaxed">
                    Chat with us directly on WhatsApp for quick inquiries, product availability, 
                    and instant price quotes.
                  </p>
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full px-6 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start WhatsApp Chat
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1e40af]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-100">
                    <span className="text-slate-600">Saturday - Thursday</span>
                    <span className="font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-600">Friday</span>
                    <span className="font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">6:00 PM - 10:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Walk-ins welcome! Visit our store in Madinat Khalifa South, Doha.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#1e40af]" />
                    <span className="font-semibold text-slate-900">Find Us on Map</span>
                  </div>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57707.029221854595!2d51.483673!3d25.31464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db6e1cdb040f%3A0xc729889010f25997!2sAl%20Alis%20Building%20Materials%20And%20Electrical!5e0!3m2!1sen!2sqa!4v1764688091865!5m2!1sen!2sqa" 
                  width="100%" 
                  height="280" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
