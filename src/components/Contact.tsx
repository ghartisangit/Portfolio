import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities, innovative projects, and great conversations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-gray-100 font-semibold">john@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-teal-500 transition-colors">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-gray-100 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-gray-100 font-semibold">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-gray-600 transition-all duration-200 ${link.color}`}
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;