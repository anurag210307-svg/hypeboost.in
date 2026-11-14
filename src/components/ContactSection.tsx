import React, { useState, useEffect } from 'react';
import { CheckCircle2, Mail, ArrowRight, Instagram } from 'lucide-react';
import { XIcon, SubstackIcon } from './SocialIcons';

interface ContactSectionProps {
  initialRole?: 'creator' | 'brand';
  prefilledNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialRole = 'brand',
  prefilledNote = ''
}) => {
  const [role, setRole] = useState<'creator' | 'brand'>(initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [message, setMessage] = useState(prefilledNote);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  useEffect(() => {
    if (prefilledNote) {
      setMessage(prefilledNote);
    }
  }, [prefilledNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-block transform -rotate-1 mb-2">
            <span className="bg-[#EB6226] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              Direct Inquiries
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Let's Start a <span className="underline decoration-[#FFE478] decoration-wavy">Conversation</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 font-medium mt-2">
            We respond within 24 hours. No sales scripts, just honest recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Neubrutalist Form */}
          <div className="md:col-span-7 relative bg-white border-[3px] border-[#141414] p-6 sm:p-8 rounded-lg shadow-[6px_6px_0px_#141414]">
            {/* Washi Tape Strip */}
            <div className="washi-tape -top-3 left-10 rotate-1" />

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#FFE478] border-2 border-[#141414] mx-auto flex items-center justify-center text-2xl shadow-[2px_2px_0px_#141414]">
                  🎉
                </div>
                <h3 className="text-2xl font-black text-[#141414] font-['Space_Grotesk']">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 max-w-sm mx-auto font-medium">
                  Thanks for reaching out! A dedicated strategist will follow up within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="neu-btn text-xs px-5 py-2.5 mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Role Switcher Pill */}
                <div className="flex rounded-full border-2 border-[#141414] bg-[#F7F1E6] p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setRole('brand')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${role === 'brand'
                        ? 'bg-[#141414] text-white shadow-[1.5px_1.5px_0px_#EB6226]'
                        : 'text-[#141414] hover:bg-white'
                      }`}
                  >
                    I represent a Brand
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('creator')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${role === 'creator'
                        ? 'bg-[#141414] text-white shadow-[1.5px_1.5px_0px_#EB6226]'
                        : 'text-[#141414] hover:bg-white'
                      }`}
                  >
                    I am a Creator
                  </button>
                </div>

                {error && (
                  <div className="p-2.5 rounded bg-red-100 border-2 border-red-500 text-xs font-bold text-red-700">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase text-[#141414] mb-1 font-['Space_Grotesk']">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 rounded border-2 border-[#141414] bg-[#F7F1E6]/40 text-xs text-[#141414] font-medium focus:bg-white focus:outline-none focus:border-[#EB6226] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#141414] mb-1 font-['Space_Grotesk']">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded border-2 border-[#141414] bg-[#F7F1E6]/40 text-xs text-[#141414] font-medium focus:bg-white focus:outline-none focus:border-[#EB6226] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#141414] mb-1 font-['Space_Grotesk']">
                    {role === 'creator' ? 'Social Handle / Channel URL' : 'Company or Brand Name'}
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder={role === 'creator' ? '@yourhandle or channel link' : 'Acme Brands Inc.'}
                    className="w-full px-3.5 py-2.5 rounded border-2 border-[#141414] bg-[#F7F1E6]/40 text-xs text-[#141414] font-medium focus:bg-white focus:outline-none focus:border-[#EB6226] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#141414] mb-1 font-['Space_Grotesk']">
                    Project / Campaign Note *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      role === 'creator'
                        ? 'Share your niche, current follower count, and what management support you are looking for...'
                        : 'Tell us your campaign objective, target creator niches, or budget bracket...'
                    }
                    className="w-full px-3.5 py-2.5 rounded border-2 border-[#141414] bg-[#F7F1E6]/40 text-xs text-[#141414] font-medium focus:bg-white focus:outline-none focus:border-[#EB6226] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full neu-btn py-3.5 text-xs uppercase tracking-wider font-black flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & WhatsApp Cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Direct Channels & Socials Card */}
            <div className="bg-[#FFE478] border-[3px] border-[#141414] rounded-lg p-5 shadow-[4px_4px_0px_#141414]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚡</span>
                <span className="text-xs font-black uppercase text-[#141414] font-['Space_Grotesk']">
                  Official Channels
                </span>
              </div>
              <p className="text-xs text-neutral-800 font-medium mb-3">
                Follow our creator drops, campaign strategy essays, and industry analysis:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/hypeboost.in1?xtok=MXZub3huMDhqMjdiZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-white text-xs py-2 px-3.5 inline-flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#EB6226]" />
                    <span>Instagram (@hypeboost.in1)</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://x.com/hypeboostin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-white text-xs py-2 px-3.5 inline-flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <XIcon className="w-3.5 h-3.5 text-[#141414]" />
                    <span>X / Twitter (@hypeboostin)</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://substack.com/@hypeboost?utm_source=share&utm_medium=android&r=9bz6ql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn-white text-xs py-2 px-3.5 inline-flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <SubstackIcon className="w-3.5 h-3.5 text-[#EB6226]" />
                    <span>Substack Publication</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border-[3px] border-[#141414] rounded-lg p-5 shadow-[4px_4px_0px_#141414]">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#EB6226]" />
                <span className="text-xs font-black uppercase text-[#141414] font-['Space_Grotesk']">
                  Direct Inquiries
                </span>
              </div>
              <a
                href="mailto:contact@hypeboost.in"
                className="text-xs font-bold text-[#141414] hover:text-[#EB6226] transition-colors block"
              >
                contact@hypeboost.in
              </a>
              <p className="text-[11px] text-neutral-600 mt-1">
                Mon - Fri, 9am - 7pm IST
              </p>
            </div>

            {/* Trust Stamp */}
            <div className="bg-[#F7F1E6] border-2 border-dashed border-[#141414] rounded-lg p-4 text-center">
              <span className="text-xs font-['Permanent_Marker'] text-[#EB6226]">
                ★ ZERO HIDDEN COMMISSIONS ★
              </span>
              <p className="text-[11px] text-neutral-600 mt-1">
                Flat upfront pricing. Direct creator transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
