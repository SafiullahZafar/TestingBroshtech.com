import React, { useState, useRef } from 'react';
import toast from "react-hot-toast";
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
  const formRef = useRef<HTMLFormElement>(null);

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch("https://formspree.io/f/xykdlgwl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    formRef.current?.reset();

    toast.success("Message Sent Successfully ");

  } catch (error) {
    toast.error("Something went wrong ");
  }
};
  return (
    <div className="relative min-h-screen lg:h-[880px] w-full bg-black text-[#D9D9D9] flex items-center justify-center px-4 md:px-8 py-16 overflow-hidden font-sans"
      style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Background Text */}
      <div className="absolute hidden sm:block lg:top-[123px] w-full md:w-[74vw] flex justify-center pointer-events-none">
            <img src="/contact.png" alt="contact" />
      </div>

      <div className="relative z-10 top-14 sm:-top-14 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-10 relative md:top-14 lg:w-[45vw]">

          {/* Top Header */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center gap-0.75 bg-[#D9D9D9]/21 md:relative md:left-0.75 border border-white/50 px-3.75 py-1.75 hover:cursor-pointer hover:bg-[#D9D9D9]/31 rounded-full w-fit"
            >
              <QuestionMarkCircleIcon className="w-6 h-8 relative md:right-2.5 md:top-0.44" />
              <span className="text-[13px] tracking-tight font-semibold md:right-2.5 relative md:top-0.5">
                Contact Us
              </span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold ">
              Get In Touch
            </h1>
            <p className="text-sm md:text-base lg:w-[290px] relative lg:-top-3 text-white max-w-md">
              Upgrade your business with expert web development, creative design, and powerful SEO solutions.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="flex flex-col gap-5">
            {[
              { id: 'email', icon: EnvelopeIcon, title: 'Email Us', desc: 'Broshtech123@gmail.com' },
              { id: 'call', icon: PhoneIcon, title: 'Call Us', desc: '(41) 1521-8391' },
              { id: 'location', icon: MapPinIcon, title: 'Our Location', desc: '113 Mall Of, Faisalabad' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Section)}
                className={`flex items-center justify-between hover:cursor-pointer p-4 rounded-[10px] border transition-all ${activeTab === item.id
                    ? 'bg-[#D9D9D9]/21 border-white/20'
                    : 'bg-[#D9D9D9]/11 border-transparent hover:bg-[#A0A0A0]/6'
                  }`}
              >
                <div className="flex items-center gap-4 hover:cursor-pointer">
                  <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${activeTab === item.id
                      ? 'bg-[#D9D9D9]/21 text-black'
                      : 'bg-[#A0A0A0]/10'
                    }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-[#D9D9D9]/60">{item.desc}</p>
                  </div>
                </div>
                <ArrowUpRightIcon
                  className={`w-4 h-4 transition-colors duration-300 ${activeTab === item.id
                      ? 'text-black'
                      : 'text-[#D9D9D9]/60'
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:top-14 relative">
          <div className="w-full lg:w-[44vw] bg-[#D9D9D9]/21 border lg:left-7 relative border-white/10 rounded-[10px] p-6 md:p-8 text-[#8B8B8B]">

            <AnimatePresence mode="wait">

              {/* EMAIL */}
         {activeTab === 'email' && (
<motion.form
  ref={formRef}
  onSubmit={handleSubmit}
  key="email"
  {...tabVariants}
  transition={{ duration: 0.4 }}
  className="flex flex-col gap-5 text-white font-medium"
>

    {/* Name */}
    <div className="flex flex-col gap-1">
      <label className="text-[13px] tracking-widest font-semibold">
        Name
      </label>
      <input
        type="text"
        name="name"
        required
        placeholder="John Doe"
        className="w-full p-3 py-4 rounded-[10px] bg-[#A0A0A0]/5 border border-white/10 text-sm outline-none"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-[13px] tracking-widest font-semibold">
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="example@gmail.com"
        className="w-full p-3 py-4 rounded-[10px] bg-[#A0A0A0]/5 border border-white/10 text-sm outline-none"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col gap-1">
      <label className="text-[13px] tracking-widest font-medium">
        Message
      </label>
      <textarea
        name="message"
        required
        placeholder="Write your message here..."
        className="w-full h-32 p-3 rounded-[10px] bg-[#A0A0A0]/5 border border-white/10 text-sm resize-none outline-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-white text-black py-4 hover:bg-[#aeaeae] hover:text-white rounded-[10px] font-medium text-sm transition"
    >
      Send Message
    </button>

  </motion.form>
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
                    { label: 'Corporate Office', number: '+92 41 1521-8391' },
                    { label: 'Founder', number: '+92 300 366-2818' },
                    // { label: 'Technical Lead', number: '+92 321 987-6543' }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-[10px] bg-[#A0A0A0]/5 border border-white/10"
                    >
                      <p className="text-[10px] tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-[14px] font-medium text-[#D9D9D9]">
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

                  <div className="p-4 rounded-[10px] bg-[#A0A0A0]/5 border border-white/10">
                    <p className="text-sm text-[#D9D9D9]">
                      113 Mall Of, Zia Colony Nasar Ullah Khan Town, Faisalabad, 38000
                    </p>
                  </div>

                  <div className="h-36 rounded-[10px] border border-white/10 bg-[#A0A0A0]/4 flex items-center justify-center">
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
          <div className="bg-[#A0A0A0]/30 border border-white/10 rounded-[10px] p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              Contact Us
            </h3>
            <p className="text-sm text-[#D9D9D9]/80 mb-4">
              This is our contact page. Here you can find different ways to contact us and learn more about our services.
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="flex items-center justify-center gap-2 mx-auto bg-white text-black px-4 py-2 rounded-[10px] text-sm font-semibold"
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