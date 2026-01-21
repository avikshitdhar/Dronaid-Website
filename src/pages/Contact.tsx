import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Contact Page
 * EmailJS integration for sending emails
 */

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your Public Key
    // Get your Public Key from: https://dashboard.emailjs.com/admin/account
    emailjs.init('wME5PplhO5SGCSlt0');
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const templateParams = {
      to_email: 'dronaid.mit@gmail.com', // Email where you want to receive messages
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      time: new Date().toLocaleString(),
      message: formData.message,
    };

    emailjs
      .send(
        'service_6cau1ad', // Your EmailJS Service ID
        'template_h7mn2sa', // Your EmailJS Template ID
        templateParams
      )
      .then((response) => {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setError('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/project.dronaid/',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/dronaid/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/dronaid.care/',
      color: 'hover:text-gray-400',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dronaid.mit@gmail.com',
      link: 'mailto:dronaid.mit@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      items: [
        { value: 'Aarya: +91 6261145225', link: 'tel:+916261145225' },
        { value: 'Tushar: +91 9446211196', link: 'tel:+919446211196' },
      ],
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Manipal Institute of Technology, Manipal, India',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                    {info.items ? (
                      <div className="space-y-1">
                        {info.items.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.link}
                            className="block text-gray-300 hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ))}
                      </div>
                    ) : info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center transition-colors ${social.color} border border-gray-700 hover:border-current`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} className="text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {error && (
                <p className="text-red-400 text-center">
                  {error}
                </p>
              )}

              {submitted && (
                <p className="text-green-400 text-center">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
