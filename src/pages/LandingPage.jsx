import React, { useState, useEffect } from 'react';
import { X, FileText, Leaf, Droplet, Recycle, Heart, Shield, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import RevolutionModal from '../components/RevolutionModal';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [showRevolutionModal, setShowRevolutionModal] = useState(false);
  const navigate = useNavigate(); 
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

      {/* Popup Modal - Made responsive */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-8 sm:bottom-8 z-50 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl shadow-2xl p-4 sm:p-6 max-w-sm mx-auto sm:mx-0 border-4 border-pink-400 animate-bounce-in">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-pink-200 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mb-1 sm:mb-2">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              📄 Project Report
            </h3>
            
            <p className="text-white text-xs sm:text-sm" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Read our complete research & findings!
            </p>
            
            <a
              href="./Low_Cost_Sanitary_Pad_Disposal_Unit updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-white text-pink-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              View Report ✨
            </a>
          </div>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-black/70' 
            : 'bg-white/70'
        }`} style={{ transform: `translateY(${scrollY * 0.3}px)` }} />

        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div 
            className="text-center space-y-6 sm:space-y-8"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="inline-block relative">
              <h1 
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${darkMode ? 'text-white' : 'text-black'}`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                <span className="text-pink-500">SHE</span>volve
              </h1>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-500 animate-pulse" />
              </div>
            </div>

            <p 
              className={`text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-relaxed px-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              Where <span className="text-pink-500">Hygiene</span> Meets <span className="text-pink-500">Sustainability</span>
            </p>

            <div className="flex justify-center items-center space-x-3 sm:space-x-4 py-4">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-pink-500 animate-pulse" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-600 rounded-full" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full" />
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-pink-500 animate-bounce" />
            </div>

            <p 
              className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              A revolutionary low-cost sanitary pad disposal system that promotes 
              <span className="text-pink-500 font-bold"> resource recovery</span> and 
              <span className="text-pink-500 font-bold"> environmental sustainability</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
              <button 
                onClick={() => navigate("/guide")}
                className="bg-pink-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-pink-600 transform hover:scale-105 transition-all shadow-xl text-sm sm:text-base"
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                An Essential Guide 🌸
              </button>
              <button 
                onClick={() => setShowRevolutionModal(true)}
                className={`font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full border-2 sm:border-4 border-pink-500 transform hover:scale-105 transition-all shadow-xl text-sm sm:text-base ${
                  darkMode ? 'bg-black/50 text-white hover:bg-pink-500' : 'bg-white/50 text-pink-500 hover:bg-pink-50'
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
        className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 sm:border-4 border-pink-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-8 sm:mb-12 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              About SHEvolve 🌸
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <p className={`text-base sm:text-lg lg:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  SHEvolve is an innovative project developed by <span className="text-pink-500 font-bold">Group 27</span> at 
                  <span className="text-pink-500 font-bold"> IIT Mandi</span>, addressing one of the most pressing environmental 
                  and health challenges in India.
                </p>
                
                <p className={`text-base sm:text-lg lg:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Our mission is to create a <span className="text-pink-500 font-bold">sustainable, hygienic, and affordable</span> solution 
                  for menstrual waste management that empowers communities while protecting our planet.
                </p>

                <div className={`p-4 sm:p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-500 mb-3" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    Our Vision 🎯
                  </h3>
                  <p className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    To eliminate the stigma around menstruation while creating a circular economy 
                    through resource recovery and sustainable waste management.
                  </p>
                </div>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center border-4 sm:border-8 border-pink-400 shadow-2xl">
                    <div className="text-center space-y-2 sm:space-y-4">
                      <div className="text-6xl sm:text-7xl lg:text-8xl">♻️</div>
                      <p className="text-2xl sm:text-3xl font-black text-white px-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        Sustainable Innovation
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-xl sm:text-3xl shadow-xl">
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
        className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 sm:border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              THE PROBLEM 😰
            </h2>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className={`p-4 sm:p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    📊 Every year, over <span className="text-pink-500">113,000 tons</span> of menstrual waste is generated in India
                  </p>
                </div>

                <div className={`p-4 sm:p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    🧪 These pads consist of up to <span className="text-pink-500 font-bold">90% non-biodegradable polymers</span> and hazardous bio-waste
                  </p>
                </div>

                <div className={`p-4 sm:p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    ⏰ Taking <span className="text-pink-500 font-bold">500-800 years</span> to decompose
                  </p>
                </div>

                <div className={`p-4 sm:p-6 rounded-2xl border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    ☠️ Life-threatening for waste pickers & contaminating our environment with microplastics
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center border-4 sm:border-8 border-pink-400 shadow-2xl">
                    <div className="text-center space-y-2 sm:space-y-4">
                      <div className="text-6xl sm:text-7xl lg:text-7xl">🌍</div>
                      <p className="text-2xl sm:text-3xl font-black text-white px-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        Our Planet Needs Help!
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center text-xl sm:text-3xl animate-pulse shadow-xl">
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
        className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            OUR SOLUTION ✨
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <Recycle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: "On-site Waste Handling & Resource Recovery",
                description: "Process waste right where it's generated and recover valuable materials! ♻️"
              },
              {
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: "Minimal Human Contact & Contamination Risk",
                description: "Keep everyone safe with our automated, hygienic system! 🛡️"
              },
              {
                icon: <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: "Air Circulation System",
                description: "Advanced ventilation keeps everything fresh and efficient! 💨"
              },
              {
                icon: <span className="text-xl sm:text-2xl">🔄</span>,
                title: "Simple Tilting Mechanism",
                description: "Easy cleaning and maintenance for everyone! 🧹"
              },
              {
                icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: "Composting System",
                description: "Turn waste into valuable nutrients for plants! 🌱"
              },
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: "Environment-Friendly Disposal",
                description: "Zero emissions, maximum sustainability! 🌍"
              }
            ].map((feature, index) => (
              <div key={index} className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 sm:border-4 border-pink-500 transform hover:scale-105 transition-all ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-500 mb-3 sm:mb-4" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 sm:border-4 border-pink-500 shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-pink-50'}`}>
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="text-4xl sm:text-5xl lg:text-6xl">🔬</div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Immediate Sterilization to Eliminate Pathogens
              </h3>
              <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Our UV-C sterilization system ensures complete hygiene and safety from the moment of disposal!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section 
        className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className={`max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 sm:border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-pink-500 rounded-full">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Join the Revolution 💖
              </span>
            </div>

            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Be Part of the Change!
            </h3>

            <p className={`text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Join us in creating a world where menstrual hygiene is accessible, 
              sustainable, and stigma-free for everyone! 🌸
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              {['💰 Low-Cost', '♻️ Eco-Friendly', '🔬 Scientific', '💪 Empowering'].map((item, index) => (
                <div key={index} className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className="text-sm sm:text-base lg:text-xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowRevolutionModal(true)}
              className="px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-lg sm:text-xl lg:text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all hover:shadow-pink-500/50 animate-pulse-slow"
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              🚀 Join the Revolution Now!
            </button>

            <p className={`mt-4 sm:mt-6 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Be a changemaker • Make an impact • End the stigma
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            GROUP 27 ✨
          </h2>

          <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 sm:border-4 border-pink-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4 sm:mb-6" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Project Team 👥
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    'Radhika Dwivedi (B24378)',
                    'Samridhi Singh (B24382)',
                    'Vipresh Gupta (B2412)',
                    'Kritika Raj (B2442)',
                    'Harshil Rawal (B2433)',
                    'Ishani Kalra (B24035)'
                  ].map((member, idx) => (
                    <div key={idx} className={`rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                      <p className={`text-sm sm:text-base lg:text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                        {member}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4 sm:mb-6" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Faculty Mentors 🎓
                </h3>
                <div className="space-y-4">
                  <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                    <p className="text-lg sm:text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Dr. Neha Thakur
                    </p>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Assistant Professor, IKSHMA
                    </p>
                  </div>
                  <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                    <p className="text-lg sm:text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Dr. Gajendra Singh
                    </p>
                    <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                      Assistant Professor, SMME
                    </p>
                  </div>
                </div>

                <div className={`mt-6 sm:mt-8 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                  <p className="text-center text-xl sm:text-2xl font-bold text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
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
        className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 text-pink-500" style={{ fontFamily: 'Gabarito, sans-serif' }}>
            GET IN TOUCH 📬
          </h2>

          <div className={`max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 sm:border-4 border-pink-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Email Us
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  shevolve@iitmandi.ac.in
                </p>
              </div>

              <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Call Us
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  +91 XXXX XXXXXX
                </p>
              </div>

              <div className={`sm:col-span-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-pink-500 ${darkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Visit Us
                </h3>
                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Indian Institute of Technology Mandi<br />
                  Kamand, Himachal Pradesh 175005
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Have questions or want to collaborate? We'd love to hear from you! 💌
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 bg-pink-500">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              SHEvolve 🌸
            </h3>
            <p className="text-lg sm:text-xl text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Where Hygiene Meets Sustainability
            </p>
            <div className="flex justify-center space-x-3 sm:space-x-4 text-white text-2xl sm:text-3xl">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-pulse" />
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-bounce" />
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-spin" />
            </div>
            <p className="text-white text-sm sm:text-base" style={{ fontFamily: 'Gabarito, sans-serif' }}>
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