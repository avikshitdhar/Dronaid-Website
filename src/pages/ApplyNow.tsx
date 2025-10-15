import { ExternalLink, CheckCircle2, HelpCircle, QrCode } from 'lucide-react';

/**
 * Apply Now Page
 * Application guidelines, FAQs, QR code, and Google Form link
 */

const ApplyNow = () => {
  const guidelines = [
    'Must be currently enrolled in a university or college',
    'Previous experience with drones or robotics is a plus, but not required',
    'Commitment to attend weekly team meetings and practice sessions',
    'Willingness to learn and collaborate with team members',
    'Available for competitions and team events (typically 2-3 per semester)',
  ];

  const faqs = [
    {
      question: 'Do I need prior drone experience?',
      answer: 'No! We welcome members of all skill levels. We provide training and mentorship for beginners while offering advanced projects for experienced members.',
    },
    {
      question: 'What time commitment is required?',
      answer: 'We typically meet 2-3 times per week for 2-3 hours each session. Additional time may be needed before competitions, but we work around academic schedules.',
    },
    {
      question: 'What roles are available?',
      answer: 'We have positions in mechanical engineering, electrical engineering, software development, flight operations, marketing, and more. There\'s a place for everyone!',
    },
    {
      question: 'When are applications reviewed?',
      answer: 'Applications are reviewed on a rolling basis at the start of each semester. We typically recruit in August-September and January-February.',
    },
    {
      question: 'Is there a membership fee?',
      answer: 'No membership fees! All costs are covered through sponsorships and university funding. You\'ll have access to all equipment and resources.',
    },
  ];

  const applicationLink = 'https://forms.google.com/your-application-form';

  return (
    <div className="min-h-screen bg-gray-950 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of something extraordinary. Apply now to join our drone team!
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Application Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <CheckCircle2 className="mr-3 text-blue-500" size={32} />
            Application Guidelines
          </h2>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're looking for passionate, dedicated individuals who want to push the boundaries
              of drone technology. Whether you're an engineer, designer, programmer, or just someone
              excited about drones, we want to hear from you!
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">Requirements:</h3>
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application Form Access */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
            <p className="text-white/90 mb-6 text-lg">
              Fill out our application form to get started
            </p>

            {/* QR Code Placeholder */}
            <div className="bg-white rounded-xl p-8 inline-block mb-6">
              <QrCode size={200} className="text-gray-900" />
              <p className="text-gray-900 mt-4 font-semibold">Scan to Apply</p>
            </div>

            {/* Application Link Button */}
            <div>
              <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Open Application Form
                <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <HelpCircle className="mr-3 text-blue-500" size={32} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer text-white font-semibold hover:bg-gray-800 transition-colors flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 py-4 border-t border-gray-800">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Don't hesitate to reach out to us directly
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplyNow;
