import React, { useState } from 'react'; // ⬅️ ADDED: Import useState for state management
import { DATA } from '../../data/portfolioData';

const Contact = () => {

    // 🔑 1. CONFIGURATION: YOUR LIVE Formspree ENDPOINT
    // This hash 'xgvgbjyq' is unique to your Formspree account.
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvgbjyq"; 
    // -----------------------------------------------------------

    // 2. State management for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '', // We use 'email' here as it's required by Formspree
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handles input changes and updates state
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 3. Handles form submission using the Fetch API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('loading');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


  // 🛠️ HELPER: This ensures we get the correct icon shapes every time
  const getIconPath = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
      case 'linkedin':
        return "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";
      case 'instagram':
        // ✅ CORRECT INSTAGRAM CAMERA ICON
        return "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z";
      case 'whatsapp':
        return "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z";
      default:
        return "";
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-black/40">
      
      {/* 1. Header Section */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          Let’s Connect & Collaborate <span className="text-white">💙</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed">
          Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
        </p>
      </div>

      {/* 2. Glowing Social Icons (With FIXED Paths) */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {DATA.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-800 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-2"
          >
            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded">
              {social.name}
            </span>
            
            {/* Icon - Using the Helper Function to fix logos */}
            <svg 
              className="w-7 h-7 fill-gray-400 group-hover:fill-cyan-400 transition-colors duration-300" 
              viewBox="0 0 24 24"
            >
              <path d={getIconPath(social.name)} />
            </svg>
          </a>
        ))}
      </div>

      {/* 3. The Contact Form (MODIFIED) */}
      <div className="w-full max-w-2xl bg-gray-900/80 p-8 md:p-10 rounded-3xl border border-gray-800/50 shadow-2xl backdrop-blur-xl">
        {/* ADDED: onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Input */}
          <div className="group">
            <input 
              type="text" 
              name="name" // ⬅️ ADDED: name attribute
              value={formData.name} // ⬅️ ADDED: value binding
              onChange={handleChange} // ⬅️ ADDED: change handler
              placeholder="Your Name" 
              className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:bg-gray-800 transition-all duration-300"
            />
          </div>

          {/* Email/Phone Input (type and name set for Formspree) */}
          <div className="group">
            <input 
              type="email" // ⬅️ CHANGED: type is now 'email'
              name="email" // ⬅️ ADDED: name='email' (CRITICAL)
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email (Required)" // ⬅️ Updated placeholder
              required // ⬅️ ADDED: required
              className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:bg-gray-800 transition-all duration-300"
            />
          </div>

          {/* Subject Input */}
          <div className="group">
            <input 
              type="text" 
              name="subject" // ⬅️ ADDED: name attribute
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject" 
              className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:bg-gray-800 transition-all duration-300"
            />
          </div>

          {/* Message Textarea */}
          <div className="group">
            <textarea 
              rows="5" 
              name="message" // ⬅️ ADDED: name attribute
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..." 
              required // ⬅️ ADDED: required
              className="w-full bg-gray-800/40 border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:bg-gray-800 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Status Message (Success/Error) */}
          {status === 'success' && (
              <p className="text-green-400 text-center font-semibold">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
              <p className="text-red-400 text-center font-semibold">Oops! There was an issue sending your message. Please try again or contact me directly.</p>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting} // ⬅️ ADDED: Disable when submitting
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Sending...' : '🚀'}</span> {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contact;