import React, { useState, useEffect } from 'react';
import { X, FileText, Leaf, Droplet, Recycle, Heart, Shield, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import RevolutionModal from '../components/RevolutionModal';

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [showRevolutionModal, setShowRevolutionModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Navbar Component */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Revolution Modal */}
      <RevolutionModal 
        isOpen={showRevolutionModal} 
        onClose={() => setShowRevolutionModal(false)}
        darkMode={darkMode}
      />

      {/* Popup Modal - No Blur */}
      {showPopup && (
        <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl shadow-2xl p-6 max-w-sm border-4 border-pink-400 animate-bounce-in">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-white hover:text-pink-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-2">
              <FileText className="w-8 h-8 text-pink-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              📄 Project Report
            </h3>
            
            <p className="text-white text-sm" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Read our complete research & findings!
            </p>
            
            <a
              href="./Low_Cost_Sanitary_Pad_Disposal_Unit updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-white text-pink-600 font-bold py-3 px-6 rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all shadow-lg"
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              View Report ✨
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-pink-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div 
            className="text-center space-y-8"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="inline-block relative">
              <h1 
                className={`text-8xl font-black ${darkMode ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                <span className="text-pink-500">SHE</span>volve
              </h1>
              <div className="absolute -top-6 -right-6">
                <Sparkles className="w-12 h-12 text-pink-500 animate-pulse" />
              </div>
            </div>

            <p 
              className={`text-3xl font-bold max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              Where <span className="text-pink-500">Hygiene</span> Meets <span className="text-pink-500">Sustainability</span>
            </p>

            <div className="flex justify-center items-center space-x-4 py-4">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              <div className="w-2 h-2 bg-pink-600 rounded-full" />
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              <Leaf className="w-8 h-8 text-pink-500 animate-bounce" />
            </div>

            <p 
              className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              A revolutionary low-cost sanitary pad disposal system that promotes 
              <span className="text-pink-500 font-bold"> resource recovery</span> and 
              <span className="text-pink-500 font-bold"> environmental sustainability</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-pink-500 text-white font-bold py-4 px-8 rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all shadow-xl"
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                Learn More 🌸
              </button>
              <button 
                onClick={() => setShowRevolutionModal(true)}
                className={`font-bold py-4 px-8 rounded-full border-4 border-pink-500 transform hover:scale-105 transition-all shadow-xl ${
                  darkMode ? 'bg-black text-white hover:bg-pink-500' : 'bg-white text-pink-500 hover:bg-pink-50'
                }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                Join Revolution 🚀
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        className={`relative py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div className="container mx-auto px-6">
          <div className={`rounded-3xl shadow-2xl p-12 border-4 border-pink-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className="text-6xl font-black text-center mb-12 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              About SHEvolve 🌸
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  SHEvolve is an innovative project developed by <span className="text-pink-500 font-bold">Group 27</span> at 
                  <span className="text-pink-500 font-bold"> IIT Mandi</span>, addressing one of the most pressing environmental 
                  and health challenges in India.
                </p>
                
                <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Our mission is to create a <span className="text-pink-500 font-bold">sustainable, hygienic, and affordable</span> solution 
                  for menstrual waste management that empowers communities while protecting our planet.
                </p>

                <div className={`p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <h3 className="text-2xl font-bold text-pink-500 mb-3" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    Our Vision 🎯
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    To eliminate the stigma around menstruation while creating a circular economy 
                    through resource recovery and sustainable waste management.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center border-8 border-pink-400 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-8xl">♻️</div>
                      <p className="text-3xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        Sustainable<br/>Innovation
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-xl">
                    ✨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section 
        id="problem"
        className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="container mx-auto px-6">
          <div className={`rounded-3xl shadow-2xl p-12 border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h2 className="text-6xl font-black text-center mb-8 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              THE PROBLEM 😰
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className={`p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    📊 Every year, over <span className="text-pink-500">113,000 tons</span> of menstrual waste is generated in India
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    🧪 These pads consist of up to <span className="text-pink-500 font-bold">90% non-biodegradable polymers</span> and hazardous bio-waste
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    ⏰ Taking <span className="text-pink-500 font-bold">500-800 years</span> to decompose
                  </p>
                </div>

                <div className={`p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    ☠️ Life-threatening for waste pickers & contaminating our environment with microplastics
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center border-8 border-pink-400 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-7xl">🌍</div>
                      <p className="text-3xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        Our Planet<br/>Needs Help!
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl animate-pulse shadow-xl">
                    ⚠️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section 
        id="solution"
        className={`relative py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            OUR SOLUTION ✨
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                On-site Waste Handling & Resource Recovery
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Process waste right where it's generated and recover valuable materials! ♻️
              </p>
            </div>

            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Minimal Human Contact & Contamination Risk
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Keep everyone safe with our automated, hygienic system! 🛡️
              </p>
            </div>

            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Air Circulation System
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Advanced ventilation keeps everything fresh and efficient! 💨
              </p>
            </div>

            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Simple Tilting Mechanism
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Easy cleaning and maintenance for everyone! 🧹
              </p>
            </div>

            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Composting System
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Turn waste into valuable nutrients for plants! 🌱
              </p>
            </div>

            <div className={`rounded-3xl p-8 shadow-xl border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Environment-Friendly Disposal
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Zero emissions, maximum sustainability! 🌍
              </p>
            </div>
          </div>

          <div className={`mt-16 rounded-3xl p-12 border-4 border-pink-500 shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-pink-50'}`}>
            <div className="text-center space-y-6">
              <div className="text-6xl">🔬</div>
              <h3 className="text-4xl font-black text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Immediate Sterilization to Eliminate Pathogens
              </h3>
              <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Our UV-C sterilization system ensures complete hygiene and safety from the moment of disposal!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section 
        className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-4xl mx-auto rounded-3xl p-12 shadow-2xl border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="inline-block mb-8 px-8 py-4 bg-pink-500 rounded-full">
              <span className="text-4xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Join the Revolution 💖
              </span>
            </div>

            <h3 className={`text-4xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Be Part of the Change!
            </h3>

            <p className={`text-2xl mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Join us in creating a world where menstrual hygiene is accessible, 
              sustainable, and stigma-free for everyone! 🌸
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <p className="text-xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  💰 Low-Cost
                </p>
              </div>
              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <p className="text-xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  ♻️ Eco-Friendly
                </p>
              </div>
              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <p className="text-xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  🔬 Scientific
                </p>
              </div>
              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <p className="text-xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  💪 Empowering
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowRevolutionModal(true)}
              className="px-12 py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all hover:shadow-pink-500/50 animate-pulse-slow"
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              🚀 Join the Revolution Now!
            </button>

            <p className={`mt-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Be a changemaker • Make an impact • End the stigma
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            GROUP 27 ✨
          </h2>

          <div className={`rounded-3xl p-12 shadow-2xl border-4 border-pink-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-pink-500 mb-6" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Project Team 👥
                </h3>
                <div className="space-y-3">
                  {[
                    'Radhika Dwivedi (B24378)',
                    'Samridhi Singh (B24382)',
                    'Vipresh Gupta (B2412)',
                    'Kritika Raj (B2442)',
                    'Harshil Rawal (B2433)',
                    'Ishani Kalra (B24035)'
                  ].map((member, idx) => (
                    <div key={idx} className={`rounded-xl p-4 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                      <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        {member}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-500 mb-6" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Faculty Mentors 🎓
                </h3>
                <div className="space-y-4">
                  <div className={`rounded-xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                    <p className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Dr. Neha Thakur
                    </p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Assistant Professor, IKSHMA
                    </p>
                  </div>
                  <div className={`rounded-xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                    <p className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Dr. Gajendra Singh
                    </p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Assistant Professor, SMME
                    </p>
                  </div>
                </div>

                <div className={`mt-8 rounded-xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className="text-center text-2xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    🏛️ IIT Mandi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className={`relative py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            GET IN TOUCH 📬
          </h2>

          <div className={`max-w-4xl mx-auto rounded-3xl p-12 shadow-2xl border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <Mail className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Email Us
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  shevolve@iitmandi.ac.in
                </p>
              </div>

              <div className={`rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <Phone className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Call Us
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  +91 XXXX XXXXXX
                </p>
              </div>

              <div className={`md:col-span-2 rounded-2xl p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <MapPin className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Visit Us
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Indian Institute of Technology Mandi<br />
                  Kamand, Himachal Pradesh 175005
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Have questions or want to collaborate? We'd love to hear from you! 💌
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-pink-500">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <h3 className="text-4xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              SHEvolve 🌸
            </h3>
            <p className="text-xl text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Where Hygiene Meets Sustainability
            </p>
            <div className="flex justify-center space-x-4 text-white text-3xl">
              <Heart className="w-8 h-8 animate-pulse" />
              <Leaf className="w-8 h-8 animate-bounce" />
              <Sparkles className="w-8 h-8 animate-spin" />
            </div>
            <p className="text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              © 2025 SHEvolve - IIT Mandi | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes bounce-in {
          0% {
            transform: scale(0.3) translateX(100px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1) translateX(0);
            opacity: 1;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
};

export default LandingPage;