import { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { SiGithub, SiWhatsapp } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formState;

    if (!name || !email || !subject || !message) {
      setSubmitStatus('validation_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1️⃣ Send form to your own email
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_7lwhurd',
          template_id: 'template_g7cqmdo',
          user_id: 'wz2nWyL8OFlXcte77',
          template_params: {
            from_name: name,
            from_email: email,
            subject,
            message,
            to_email: 'arunpandeylaudari2003@gmail.com',
          }
        })
      });

      if (!response.ok) throw new Error('Email sending failed');

      // 2️⃣ Send auto-reply to user
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_7lwhurd',
          template_id: 'template_2yjruaa',
          user_id: 'wz2nWyL8OFlXcte77',
          template_params: {
            from_name: name,       // user’s name
            from_email: email,     // ✅ matches {{from_email}} in template
            subject: subject,      // optional, if template uses {{subject}}
            message: message       // optional, if template uses {{message}}
          }
        })
      });

      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    { icon: <Mail className="w-6 h-6 text-purple-400" />, title: "Email", value: "arunpandeylaudari2003@gmail.com", link: "mailto:arunpandeylaudari2003@gmail.com" },
    { icon: <Phone className="w-6 h-6 text-purple-400" />, title: "Phone", value: "+977-9829096752", link: "tel:+9779829096752" },
    { icon: <MapPin className="w-6 h-6 text-purple-400" />, title: "Location", value: "Bharatpur, Chitwan, Nepal", link: "https://maps.google.com/?q=Bharatpur,Chitwan,Nepal" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/arun-pandey-laudari-214a9832a", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <SiGithub className="w-5 h-5" />, url: "https://github.com/KodePanda2003", label: "GitHub", color: "hover:bg-gray-600" },
    { icon: <SiWhatsapp className="w-5 h-5" />, url: "https://wa.me/9779829096752", label: "WhatsApp", color: "hover:bg-green-600" },
  ];

  return (
    <section className="w-full min-h-screen  py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, i) => (
                <a key={i} href={method.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 group hover:bg-gray-800/60">
                  <div className="p-4 rounded-xl bg-gray-700/50 mr-6 group-hover:bg-purple-900/30 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-1">{method.title}</h4>
                    <p className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Your Name *</label>
                  <input type="text" name="name" value={formState.name} onChange={handleChange}
                    className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Email Address *</label>
                  <input type="email" name="email" value={formState.email} onChange={handleChange}
                    className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    placeholder="Enter your email address" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Subject *</label>
                <input type="text" name="subject" value={formState.subject} onChange={handleChange}
                  className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  placeholder="What's this regarding?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Your Message *</label>
                <textarea name="message" value={formState.message} onChange={handleChange} rows="6"
                  className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-4 px-5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                  placeholder="How can I help you?"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${isSubmitting ? 'bg-gray-600/50 cursor-not-allowed text-gray-400' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-xl hover:shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'}`}>
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div> : <>Send Message <Send className="w-5 h-5" /></>}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/50 rounded-xl text-emerald-400 text-center font-medium">
                    ✨ Your message has been sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-xl text-red-400 text-center font-medium">
                    ❌ There was an error sending your message. Please try again.
                  </div>
                )}
                {submitStatus === 'validation_error' && (
                  <div className="mt-6 p-4 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 rounded-xl text-yellow-400 text-center font-medium">
                    ⚠️ Please fill in all required fields.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
