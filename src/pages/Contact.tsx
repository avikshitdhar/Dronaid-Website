import { Mail, MapPin, Phone } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const templateParams = {
      to_email: import.meta.env.VITE_CONTACT_RECEIVER_EMAIL,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      time: new Date().toLocaleString(),
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Failed to send message. Please try again.");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dronaid.mit@gmail.com",
      link: "mailto:dronaid.mit@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      items: [
        { value: "Aarya: +91 6261145225", link: "tel:+916261145225" },
        { value: "Tushar: +91 9446211196", link: "tel:+919446211196" },
      ],
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Manipal Institute of Technology, Manipal, India",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden text-white bg-animated pt-16">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Hero Section */}
        <div className="py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Get in Touch
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions? Want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white uppercase tracking-widest ">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:outline-none focus:border-blue-600 transition-colors rounded-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:outline-none focus:border-blue-600 transition-colors rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none rounded-lg"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg disabled:opacity-50"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>

                {error && <p className="text-red-400 text-center">{error}</p>}
                {submitted && (
                  <p className="text-green-400 text-center">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 lg:pl-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white uppercase tracking-widest">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <info.icon size={22} />
                    </div>
                    <div className="ml-5">
                      <h3 className="font-semibold mb-2">
                        {info.label}
                      </h3>

                      {info.items ? (
                        info.items.map((item, i) => (
                          <a
                            key={i}
                            href={item.link}
                            className="block text-gray-300 hover:text-blue-400"
                          >
                            {item.value}
                          </a>
                        ))
                      ) : info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-400"
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
            </div>

          </div>
        </div>
      </div>

      {/* Animated Gradient */}
      <style>
        {`
          .bg-animated {
            background: linear-gradient(
              -45deg,
              #0f172a,
              #1e3a8a,
              #0ea5e9,
              #1e40af
            );
            background-size: 400% 400%;
            animation: gradientShift 18s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
