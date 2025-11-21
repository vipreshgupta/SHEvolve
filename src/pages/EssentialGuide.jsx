import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Droplet, AlertCircle, CheckCircle, XCircle, Moon, Sun, Download, ArrowLeft } from 'lucide-react';

const EssentialGuide = () => {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pdfResources = [
    {
      title: "Complete Period Guide",
      description: "Comprehensive guide covering everything about menstruation, health, and wellness",
      icon: "📚",
      pages: "24 pages",
      topics: ["Menstrual cycle", "Hygiene tips", "Common concerns", "When to see a doctor"]
    },
    {
      title: "Nutrition & Periods",
      description: "Foods to eat, supplements to take, and dietary tips for better period health",
      icon: "🥗",
      pages: "16 pages",
      topics: ["Iron-rich foods", "Anti-inflammatory diet", "Supplements", "Meal planning"]
    },
    {
      title: "Period Tracker Template",
      description: "Printable tracker to monitor your cycle, symptoms, and patterns over time",
      icon: "📊",
      pages: "8 pages",
      topics: ["Monthly tracker", "Symptom log", "Mood tracker", "Flow intensity guide"]
    }
  ];

  const cyclePhases = [
    {
      phase: "Menstrual Phase",
      days: "Days 1-5",
      icon: "🩸",
      description: "The period begins! The uterine lining sheds, causing bleeding. This is day 1 of your cycle.",
      tips: ["Rest and stay hydrated", "Use heating pads for cramps", "Eat iron-rich foods"]
    },
    {
      phase: "Follicular Phase",
      days: "Days 1-13",
      icon: "🌱",
      description: "Estrogen rises as the body prepares to release an egg. Energy levels increase!",
      tips: ["Great time for exercise", "Try new activities", "Energy is high"]
    },
    {
      phase: "Ovulation",
      days: "Day 14",
      icon: "✨",
      description: "The egg is released! This is the most fertile time of your cycle.",
      tips: ["Peak fertility window", "Body temperature rises slightly", "Increased energy"]
    },
    {
      phase: "Luteal Phase",
      days: "Days 15-28",
      icon: "🌙",
      description: "Progesterone rises. You might experience PMS symptoms as the period approaches.",
      tips: ["Practice self-care", "Watch for PMS symptoms", "Rest when needed"]
    }
  ];

  const hygieneProducts = [
    {
      name: "Sanitary Pads",
      icon: "🩹",
      pros: ["Easy to use", "Widely available", "Good for beginners"],
      cons: ["Environmental impact", "Can feel bulky", "Needs frequent changing"],
      tips: "Change every 4-6 hours to prevent infections"
    },
    {
      name: "Tampons",
      icon: "🔴",
      pros: ["Discreet", "Good for swimming", "Internal protection"],
      cons: ["Learning curve", "TSS risk if left too long", "Can be uncomfortable"],
      tips: "Never leave in for more than 8 hours"
    },
    {
      name: "Menstrual Cups",
      icon: "🥤",
      pros: ["Eco-friendly", "Cost-effective long-term", "12-hour protection"],
      cons: ["Initial learning curve", "Requires cleaning", "Not for everyone"],
      tips: "Sterilize between cycles and empty every 8-12 hours"
    },
    {
      name: "Period Underwear",
      icon: "👙",
      pros: ["Reusable", "Comfortable", "Eco-friendly"],
      cons: ["Higher upfront cost", "Requires washing", "May need backup"],
      tips: "Great as backup or for light days"
    }
  ];

  const dos = [
    "Stay hydrated - drink plenty of water",
    "Eat iron-rich foods (spinach, red meat, beans)",
    "Exercise regularly (even light walking helps)",
    "Get enough sleep (7-9 hours)",
    "Change sanitary products regularly",
    "Track your cycle to predict periods",
    "Use heating pads for cramps",
    "Practice good hygiene",
    "Wear comfortable, breathable clothing",
    "Seek medical help for severe symptoms"
  ];

  const donts = [
    "Don't use the same pad/tampon for too long",
    "Don't douche - it disrupts natural pH",
    "Don't ignore severe pain or unusual symptoms",
    "Don't skip meals or proper nutrition",
    "Don't be embarrassed to talk about periods",
    "Don't use scented products in intimate areas",
    "Don't compare your cycle to others",
    "Don't panic about irregular cycles (especially early on)",
    "Don't engage in unprotected sex without contraception",
    "Don't let stigma stop you from seeking help"
  ];

  const mythsVsFacts = [
    {
      myth: "You can't swim during periods",
      fact: "You can totally swim! Use tampons or menstrual cups for swimming.",
      icon: "🏊‍♀️"
    },
    {
      myth: "Period blood is dirty",
      fact: "Period blood is just blood and tissue - it's a natural, healthy process!",
      icon: "💪"
    },
    {
      myth: "Periods should be exactly 28 days",
      fact: "Normal cycles range from 21-35 days. Everyone is different!",
      icon: "📅"
    },
    {
      myth: "You can't get pregnant on your period",
      fact: "While less likely, it's still possible. Always use protection!",
      icon: "⚠️"
    },
    {
      myth: "PMS is just in your head",
      fact: "PMS is real! Hormonal changes cause physical and emotional symptoms.",
      icon: "🧠"
    },
    {
      myth: "Exercise makes cramps worse",
      fact: "Exercise can actually help reduce cramps by releasing endorphins!",
      icon: "🏃‍♀️"
    }
  ];

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? (darkMode ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg')
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 transition-transform group-hover:-translate-x-1" />
              <span className="text-lg sm:text-xl font-semibold text-pink-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                Back to Home
              </span>
            </a>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 sm:p-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(/bg2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/80' : 'bg-white/80'}`} />
        
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-block">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${darkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                Essential <span className="text-pink-500">Period</span> Guide
              </h1>
            </div>

            <p className={`text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive menstrual health education and resources for better understanding and management
            </p>

            <div className="flex justify-center items-center space-x-6 py-4">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
              <Droplet className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
            </div>
          </div>
        </div>
      </section>

      {/* PDF Resources Section */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Educational Resources
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Download comprehensive guides to support your menstrual health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pdfResources.map((resource, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'} transition-all hover:shadow-xl`}>
                <div className="text-4xl mb-4 text-center">{resource.icon}</div>
                
                <h3 className="text-xl font-semibold text-pink-500 text-center mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {resource.title}
                </h3>
                
                <p className={`text-sm text-center mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {resource.description}
                </p>

                <div className={`rounded-lg p-4 mb-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                  <p className="text-sm font-medium text-pink-500 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    📄 {resource.pages}
                  </p>
                  <p className="text-xs text-pink-400 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Topics covered:
                  </p>
                  <ul className="space-y-1">
                    {resource.topics.map((topic, idx) => (
                      <li key={idx} className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        • {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2 shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Your Cycle */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Understanding Your Menstrual Cycle
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Learn about the four phases of your cycle and how they affect your body
            </p>
          </div>

          <div className={`rounded-xl p-6 lg:p-8 shadow-lg border mb-12 ${darkMode ? 'bg-black border-pink-500' : 'bg-pink-50 border-pink-300'}`}>
            <div className="text-center space-y-4">
              <div className="text-4xl">🔄</div>
              <h3 className="text-2xl font-semibold text-pink-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                What is a Menstrual Cycle?
              </h3>
              <p className={`text-base max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                The menstrual cycle is a natural monthly process where your body prepares for potential pregnancy. 
                It typically lasts 28 days but can range from 21-35 days. Day 1 marks the first day of your period.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {cyclePhases.map((phase, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-lg border transition-all hover:shadow-xl ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl flex-shrink-0">{phase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {phase.phase}
                    </h3>
                    <p className="text-sm font-medium text-pink-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {phase.days}
                    </p>
                  </div>
                </div>
                <p className={`text-base mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {phase.description}
                </p>
                <div className={`rounded-lg p-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                  <p className="text-sm font-medium text-pink-500 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Helpful Tips:
                  </p>
                  <ul className="space-y-1">
                    {phase.tips.map((tip, idx) => (
                      <li key={idx} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene Products */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Menstrual Products Guide
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Compare different menstrual products to find what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {hygieneProducts.map((product, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-pink-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.name}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className={`rounded-lg p-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                    <p className="text-sm font-medium text-pink-500 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle className="w-4 h-4 mr-2" /> Advantages:
                    </p>
                    <ul className="space-y-1">
                      {product.pros.map((pro, idx) => (
                        <li key={idx} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          • {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`rounded-lg p-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                    <p className="text-sm font-medium text-pink-500 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <XCircle className="w-4 h-4 mr-2" /> Considerations:
                    </p>
                    <ul className="space-y-1">
                      {product.cons.map((con, idx) => (
                        <li key={idx} className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          • {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`rounded-lg p-4 border ${darkMode ? 'bg-black border-pink-500' : 'bg-pink-50 border-pink-300'}`}>
                    <p className="text-sm font-medium text-pink-500 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Usage Tip:
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {product.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Health Guidelines
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dos */}
            <div className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-pink-500 text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Recommended Practices
              </h3>
              <div className="space-y-3">
                {dos.map((item, index) => (
                  <div key={index} className={`rounded-lg p-3 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      ✓ {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-pink-500 text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Practices to Avoid
              </h3>
              <div className="space-y-3">
                {donts.map((item, index) => (
                  <div key={index} className={`rounded-lg p-3 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      ✗ {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Myths vs Facts
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              Separating common misconceptions from evidence-based information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mythsVsFacts.map((item, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
                <div className="text-3xl text-center mb-4">{item.icon}</div>
                
                <div className={`rounded-lg p-4 mb-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                  <p className="text-xs font-semibold text-pink-500 mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Myth
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.myth}
                  </p>
                </div>

                <div className={`rounded-lg p-4 ${darkMode ? 'bg-black border border-pink-500' : 'bg-pink-50 border border-pink-200'}`}>
                  <p className="text-xs font-semibold text-pink-500 mb-2 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Fact
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to See a Doctor */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`max-w-4xl mx-auto rounded-xl p-6 lg:p-8 shadow-lg border ${darkMode ? 'bg-black border-pink-500' : 'bg-white border-pink-300'}`}>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                When to Seek Medical Advice
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                Consult a healthcare provider if you experience any of the following:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Periods lasting longer than 7 days",
                "Very heavy bleeding (soaking through a pad/hour)",
                "Severe cramps that interfere with daily life",
                "Irregular periods after 3+ years of menstruating",
                "Periods that suddenly stop for 3+ months (not pregnant)",
                "Bleeding between periods",
                "Severe PMS affecting quality of life",
                "Any unusual symptoms or concerns"
              ].map((symptom, index) => (
                <div key={index} className={`rounded-lg p-4 border flex items-start space-x-3 ${darkMode ? 'bg-black border-pink-500' : 'bg-pink-50 border-pink-300'}`}>
                  <AlertCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {symptom}
                  </p>
                </div>
              ))}
            </div>

            <div className={`mt-8 rounded-lg p-6 border ${darkMode ? 'bg-black border-pink-500' : 'bg-pink-50 border-pink-300'}`}>
              <p className="text-center font-medium text-pink-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                Your health and well-being are important. Don't hesitate to seek professional medical advice when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-pink-500">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              SHEvolve
            </h3>
            <p className="text-lg text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Empowering Menstrual Health Education
            </p>
            <div className="flex justify-center space-x-4 text-white">
              <Heart className="w-6 h-6" />
              <Droplet className="w-6 h-6" />
              <Calendar className="w-6 h-6" />
            </div>
            <p className="text-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2025 SHEvolve - IIT Mandi | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
};

export default EssentialGuide;