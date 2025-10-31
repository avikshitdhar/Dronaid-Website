import { Instagram, Linkedin, Mail, LocateIcon } from 'lucide-react';

/**
 * Footer Component
 * Displays social media links and copyright information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/project.dronaid/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/dronaid/', label: 'LinkedIn' },
    { icon: LocateIcon, href: 'https://maps.app.goo.gl/3airczvSRFsiEewx5', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dronaid.mit@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Dronaid | One Flight Saves Lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
