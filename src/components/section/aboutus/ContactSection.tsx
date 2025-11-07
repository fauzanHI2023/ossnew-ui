"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Contact Us</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hubungi kami untuk informasi lebih lanjut atau kerja sama</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl mb-6 text-gray-900">Get In Touch</h3>
            <p className="text-gray-600 mb-8">Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui form atau kontak di bawah ini.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#268ece] rounded-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Head Office</h4>
                  <p className="text-gray-600">
                    Jl. Anggrek No. 97
                    <br />
                    Kelurahan Cisalak Pasar
                    <br />
                    Kecamatan Cimanggis Kota Depok
                    <br />
                    Jawa Barat. 16452
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#268ece] rounded-lg">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Phone</h4>
                  <p className="text-gray-600">
                    Phone: (021) 21287213
                    <br />
                    Fax: (021) 87780013
                    <br />
                    WhatsApp: +62 812 8080 4561
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#268ece] rounded-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">Email</h4>
                  <p className="text-gray-600">care@human-initiative.org</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-xl text-white">
              <h4 className="text-xl mb-2">Jam Operasional</h4>
              <p className="opacity-90">
                Senin - Jumat: 09:00 - 17:00 WIB
                <br />
                Sabtu: 09:00 - 13:00 WIB
                <br />
                Minggu: Tutup
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#268ece] focus:outline-none focus:ring-2 focus:ring-[#268ece]/20 transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#268ece] focus:outline-none focus:ring-2 focus:ring-[#268ece]/20 transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#268ece] focus:outline-none focus:ring-2 focus:ring-[#268ece]/20 transition-all"
                  placeholder="Topik pesan Anda"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#268ece] focus:outline-none focus:ring-2 focus:ring-[#268ece]/20 transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-[#268ece] text-white rounded-lg hover:bg-[#1a5f8f] transition-colors flex items-center justify-center gap-2">
                <Send size={20} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
