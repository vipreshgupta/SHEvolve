import React, { useState, useEffect } from 'react';
import { X, FileText, Leaf, Droplet, Recycle, Heart, Shield, Sparkles } from 'lucide-react';

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-x-hidden">
      {/* Popup Modal */}
      {showPopup && (
        <>
          {/* Backdrop blur */}
          <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-40" />
          
          {/* Popup Box */}
          <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl shadow-2xl p-6 max-w-sm border-4 border-pink-300 animate-bounce-in">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-pink-600 hover:text-pink-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-300 rounded-full mb-2">
                <FileText className="w-8 h-8 text-pink-700" />
              </div>
              
              <h3 className="text-2xl font-bold text-pink-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                📄 Project Report
              </h3>
              
              <p className="text-pink-700 text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Read our complete research & findings!
              </p>
              
              <a
                href="/mnt/project/Low_Cost_Sanitary_Pad_Disposal_Unit_updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-lg"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                View Report ✨
              </a>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 z-10">
          <div 
            className="text-center space-y-8"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            {/* Logo/Brand */}
            <div className="inline-block relative">
              <h1 
                className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 drop-shadow-2xl"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                SHE
                <span className="text-gray-800">volve</span>
              </h1>
              <div className="absolute -top-6 -right-6">
                <Sparkles className="w-12 h-12 text-pink-400 animate-pulse" />
              </div>
            </div>

            {/* Tagline */}
            <p 
              className="text-3xl font-bold text-gray-700 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              Where <span className="text-pink-500">Hygiene</span> Meets <span className="text-purple-500">Sustainability</span>
            </p>

            {/* Decorative Icon */}
            <div className="flex justify-center items-center space-x-4 py-4">
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              <div className="w-2 h-2 bg-pink-400 rounded-full" />
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <div className="w-2 h-2 bg-pink-400 rounded-full" />
              <Leaf className="w-8 h-8 text-green-400 animate-bounce" />
            </div>

            {/* Subtitle */}
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              A revolutionary low-cost sanitary pad disposal system that promotes 
              <span className="text-pink-600 font-bold"> resource recovery</span> and 
              <span className="text-green-600 font-bold"> environmental sustainability</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-xl"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                Learn More 🌸
              </button>
              <button className="bg-white text-pink-600 font-bold py-4 px-8 rounded-full border-4 border-pink-300 hover:bg-pink-50 transform hover:scale-105 transition-all shadow-xl"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                End the Stigma 💪
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-4 border-pink-400 rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-pink-200 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />
            
            <h2 
              className="text-6xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              THE PROBLEM 😰
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl border-2 border-pink-200">
                  <p 
                    className="text-2xl font-bold text-gray-800 mb-4"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    📊 Every year, over <span className="text-red-600">113,000 tons</span> of menstrual waste is generated in India
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border-2 border-purple-200">
                  <p 
                    className="text-xl text-gray-700"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    🧪 These pads consist of up to <span className="text-red-600 font-bold">90% non-biodegradable polymers</span> and hazardous bio-waste
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-2xl border-2 border-red-200">
                  <p 
                    className="text-xl text-gray-700"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    ⏰ Taking <span className="text-red-600 font-bold">500-800 years</span> to decompose
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border-2 border-orange-200">
                  <p 
                    className="text-xl text-gray-700"
                    style={{ fontFamily: 'Comic Sans MS, cursive' }}
                  >
                    ☠️ Life-threatening for waste pickers & contaminating our environment with microplastics
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center border-8 border-pink-300 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-7xl">🌍</div>
                      <p className="text-3xl font-black text-pink-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        Our Planet<br/>Needs Help!
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-3xl animate-pulse">
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
        className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-blue-50"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="container mx-auto px-6">
          <h2 
            className="text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            OUR SOLUTION ✨
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                On-site Waste Handling & Resource Recovery
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Process waste right where it's generated and recover valuable materials! ♻️
              </p>
            </div>

            {/* Solution Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Minimal Human Contact & Contamination Risk
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Keep everyone safe with our automated, hygienic system! 🛡️
              </p>
            </div>

            {/* Solution Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Air Circulation System for Smooth Operation
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Advanced ventilation keeps everything fresh and efficient! 💨
              </p>
            </div>

            {/* Solution Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-green-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Simple Tilting Mechanism
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Easy cleaning and maintenance for everyone! 🧹
              </p>
            </div>

            {/* Solution Card 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Composting System to Produce Bio-fertilizer
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Turn waste into valuable nutrients for plants! 🌱
              </p>
            </div>

            {/* Solution Card 6 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-teal-200 transform hover:scale-105 transition-all hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Promotes Environment-Friendly Disposal
              </h3>
              <p className="text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Zero emissions, maximum impact on sustainability! 🌍
              </p>
            </div>
          </div>

          {/* Sterilization Highlight */}
          <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-12 border-4 border-purple-300 shadow-2xl">
            <div className="text-center space-y-6">
              <div className="text-6xl">🔬</div>
              <h3 className="text-4xl font-black text-purple-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Immediate Sterilization to Eliminate Pathogens
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Our UV-C sterilization system ensures complete hygiene and safety from the moment of disposal!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End the Stigma Section */}
      <section 
        className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border-4 border-pink-300">
            <div className="inline-block mb-8 px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full">
              <span className="text-4xl font-black text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                End the Stigma 💖
              </span>
            </div>

            <h3 className="text-4xl font-black text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Together, We Can Make a Difference!
            </h3>

            <p className="text-2xl text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Join us in creating a world where menstrual hygiene is accessible, 
              sustainable, and stigma-free for everyone! 🌸
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-pink-100 rounded-2xl p-6 border-2 border-pink-300">
                <p className="text-xl font-bold text-pink-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  💰 Low-Cost
                </p>
              </div>
              <div className="bg-purple-100 rounded-2xl p-6 border-2 border-purple-300">
                <p className="text-xl font-bold text-purple-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  ♻️ Eco-Friendly
                </p>
              </div>
              <div className="bg-blue-100 rounded-2xl p-6 border-2 border-blue-300">
                <p className="text-xl font-bold text-blue-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  🔬 Scientific
                </p>
              </div>
              <div className="bg-green-100 rounded-2xl p-6 border-2 border-green-300">
                <p className="text-xl font-bold text-green-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  💪 Empowering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 
            className="text-6xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            style={{ fontFamily: 'Comic Sans MS, cursive' }}
          >
            GROUP 27 ✨
          </h2>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-pink-200">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-pink-600 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
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
                    <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border-2 border-pink-200">
                      <p className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                        {member}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-600 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Faculty Mentors 🎓
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
                    <p className="text-xl font-bold text-purple-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Dr. Neha Thakur
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Assistant Professor, IKSHMA
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                    <p className="text-xl font-bold text-blue-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Dr. Gajendra Singh
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      Assistant Professor, SMME
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                  <p className="text-center text-2xl font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    🏛️ IIT Mandi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <h3 className="text-4xl font-black text-white" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              SHEvolve 🌸
            </h3>
            <p className="text-xl text-pink-100" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Where Hygiene Meets Sustainability
            </p>
            <div className="flex justify-center space-x-4 text-white text-3xl">
              <Heart className="w-8 h-8 animate-pulse" />
              <Leaf className="w-8 h-8 animate-bounce" />
              <Sparkles className="w-8 h-8 animate-spin" />
            </div>
            <p className="text-pink-100" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              © 2025 SHEvolve - IIT Mandi | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
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