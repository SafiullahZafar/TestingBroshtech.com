import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowUpRightIcon,
  QuestionMarkCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

type Section = 'email' | 'call' | 'location';

const ContactComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Section>('email');
  const [showInfo, setShowInfo] = useState(false);

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="relative min-h-screen lg:h-[780px] w-full bg-black text-[#D9D9D9] flex items-center justify-center px-4 md:px-8 py-10 overflow-hidden font-sans">

      {/* Background Text */}
      <div className="absolute lg:top-[-30px] w-full flex justify-center pointer-events-none">
        <h1 className="text-[22vw] font-black opacity-[0.07] tracking-tight">
          Contact
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl px-5 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10">

          {/* Top Header */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center gap-2 bg-[#A0A0A0]/5 border border-white/10 px-4 py-2 rounded-full w-fit"
            >
              <QuestionMarkCircleIcon className="w-4 h-4" />
              <span className="text-[10px] tracking-widest font-semibold">
                Contact Us
              </span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get In Touch
            </h1>

            <p className="text-sm md:text-base text-[#D9D9D9]/80 max-w-md">
              Upgrade your business with expert web development, creative design, and powerful SEO solutions.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="flex flex-col gap-3">
            {[
              { id: 'email', icon: EnvelopeIcon, title: 'Email Us', desc: 'Broshtech123@gmail.com' },
              { id: 'call', icon: PhoneIcon, title: 'Call Us', desc: '(41) 1234-1234' },
              { id: 'location', icon: MapPinIcon, title: 'Our Location', desc: '113 Mall Of, Faisalabad' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Section)}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                  activeTab === item.id
                    ? 'bg-[#A0A0A0]/6 border-white/20'
                    : 'bg-[#A0A0A0]/4 border-transparent hover:bg-[#A0A0A0]/6'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activeTab === item.id
                      ? 'bg-[#A0A0A0]/20 text-black'
                      : 'bg-[#A0A0A0]/10'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-[#D9D9D9]/60">{item.desc}</p>
                  </div>
                </div>

                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <div className="w-full bg-[#A0A0A0]/5 border border-white/10 rounded-3xl p-6 md:p-8 text-[#8B8B8B]">

            <AnimatePresence mode="wait">

              {/* EMAIL */}
              {activeTab === 'email' && (
                <motion.div
                  key="email"
                  {...tabVariants}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-5"
                >
                  {[
                    { label: 'Name', placeholder: 'John Doe', type: 'text' },
                    { label: 'Email', placeholder: 'example@gmail.com', type: 'email' }
                  ].map((field) => (
                    <div key={field.label} className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-widest font-semibold">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-3 rounded-xl bg-[#A0A0A0]/5 border border-white/10 text-sm outline-none"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] tracking-widest font-semibold">
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message here..."
                      className="w-full h-32 p-3 rounded-xl bg-[#A0A0A0]/5 border border-white/10 text-sm resize-none outline-none"
                    />
                  </div>

                  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold text-sm">
                    Send Message
                  </button>
                </motion.div>
              )}

              {/* CALL */}
              {activeTab === 'call' && (
                <motion.div
                  key="call"
                  {...tabVariants}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-2xl font-bold text-[#D9D9D9]">
                    Direct Lines
                  </h3>

                  {[
                    { label: 'Corporate Office', number: '+92 41 1234-1234' },
                    { label: 'Founder & CEO', number: '+92 300 123-4567' },
                    { label: 'Technical Lead', number: '+92 321 987-6543' }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl bg-[#A0A0A0]/5 border border-white/10"
                    >
                      <p className="text-[11px] tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-bold text-[#D9D9D9]">
                        {item.number}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* LOCATION */}
              {activeTab === 'location' && (
                <motion.div
                  key="location"
                  {...tabVariants}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-2xl font-bold text-[#D9D9D9]">
                    Our Location
                  </h3>

                  <div className="p-4 rounded-2xl bg-[#A0A0A0]/5 border border-white/10">
                    <p className="text-sm text-[#D9D9D9]">
                      113 Mall Of, Zia Colony Nasar Ullah Khan Town, Faisalabad, 38000
                    </p>
                  </div>

                  <div className="h-36 rounded-2xl border border-white/10 bg-[#A0A0A0]/4 flex items-center justify-center">
                    <MapPinIcon className="w-8 h-8 text-[#D9D9D9]" />
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* POPUP INFO */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#A0A0A0]/6 border border-white/10 rounded-2xl p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              Contact Us
            </h3>
            <p className="text-sm text-[#D9D9D9]/80 mb-4">
              This is our contact page. Here you can find different ways to contact us and learn more about our services.
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="flex items-center justify-center gap-2 mx-auto bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold"
            >
              <XMarkIcon className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactComponent;
