/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  BookOpen,
  Star,
  Play,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Sparkles,
} from "lucide-react";

const HassanQuranInstitute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    whatsapp: "",
    details: "",
  });
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const encodedMessage = encodeURIComponent("Hello from my form!");
    const whatsappURL = `https://wa.me/923294546498?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    if (!formData.parentName || !formData.childName || !formData.email) {
      showNotification("Please fill in all required fields!");
      return;
    }
    showNotification(
      "Registration submitted successfully! We will contact you soon."
    );
    setFormData({
      parentName: "",
      childName: "",
      email: "",
      whatsapp: "",
      details: "",
    });
  };

  const packages = [
    {
      id: 1,
      name: "Basic Quran Reading",
      duration: "30 minutes",
      sessions: "2 sessions/week",
      price: "$80/month",
      popular: false,
      features: [
        "Basic Arabic letters",
        "Quran reading",
        "Pronunciation guide",
        "Progress tracking",
        "Monthly report",
      ],
    },
    {
      id: 2,
      name: "Tajweed & Recitation",
      duration: "45 minutes",
      sessions: "3 sessions/week",
      price: "$120/month",
      popular: true,
      features: [
        "Advanced Tajweed rules",
        "Perfect recitation",
        "Mistake correction",
        "Audio practice sessions",
        "Completion certificate",
      ],
    },
    {
      id: 3,
      name: "Hifz (Memorization)",
      duration: "60 minutes",
      sessions: "4 sessions/week",
      price: "$160/month",
      popular: false,
      features: [
        "Verse memorization",
        "Revision techniques",
        "Memory improvement",
        "Daily practice plan",
        "Progress reports",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Fatima Ahmed",
      country: "UK",
      text: "My daughter has improved so much in just 3 months! Teacher Ali Hassan is very patient and skilled.",
      rating: 5,
      image: "👩‍🦱",
    },
    {
      name: "Ahmed Hassan",
      country: "USA",
      text: "Excellent teaching method. My son can now read Quran fluently. Highly recommended!",
      rating: 5,
      image: "👨‍🦰",
    },
    {
      name: "Aisha Khan",
      country: "Canada",
      text: "The online classes are very convenient and effective. Great value for money.",
      rating: 5,
      image: "👩‍🦳",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-x-hidden">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
            {notification}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-2xl sticky top-0 z-40 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <BookOpen className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                  Hassan Quran Institute
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                  Excellence in Quran Education
                </p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Packages", "Reviews", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-emerald-600" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 animate-fadeIn">
            <div className="px-4 py-4 space-y-4">
              {["Home", "About", "Packages", "Reviews", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium hover:pl-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-blue-100/50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full animate-bounce opacity-40"></div>

        <div
          className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-emerald-600 animate-spin" />
            <span className="text-emerald-700 font-semibold">
              Welcome to Hassan Quran Institute
            </span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          </div>

          <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Learn Quran Online with
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              {" "}
              Teacher Ali Hassan
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            🌟 Professional Quran teaching for international Muslim children.
            Learn proper recitation, Tajweed, and memorization from the comfort
            of your home with expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() =>
                showNotification("Free trial booking form opened!")
              }
              className="group bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              href="https://wa.me/923294546498"
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("packages")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View Learning Packages</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 to-blue-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Hassan Quran Institute?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference in online Quran education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "International Students",
                description:
                  "Teaching Muslim children worldwide with flexible timing across different time zones.",
                color: "emerald",
                delay: "0ms",
              },
              {
                icon: Play,
                title: "Interactive Learning",
                description:
                  "Engaging online sessions with audio, visual aids, and interactive teaching methods.",
                color: "blue",
                delay: "200ms",
              },
              {
                icon: Award,
                title: "Certified Progress",
                description:
                  "Regular progress tracking and certificates upon completion of each level.",
                color: "purple",
                delay: "400ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border hover:border-emerald-200"
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`w-20 h-20 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}
                >
                  <feature.icon
                    className={`w-10 h-10 text-${feature.color}-600 group-hover:animate-pulse`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 font-semibold">
                  Meet Your Teacher
                </span>
              </div>

              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                About{" "}
                <span className="text-emerald-600">Teacher Ali Hassan</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                🕌 Assalamu Alaikum! I am Teacher Ali Hassan, a qualified Quran
                instructor with over 8 years of experience teaching
                international Muslim children. My passion is to make Quran
                learning accessible and enjoyable for every child.
              </p>

              <div className="space-y-4">
                {[
                  "✨ Proper Quran recitation and pronunciation",
                  "📚 Tajweed rules and implementation",
                  "🎯 Hifz (Memorization) techniques",
                  "🌟 Islamic studies and character building",
                  "💻 Modern online teaching methods",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 animate-pulse" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-40 h-40 bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-20 h-20 text-white animate-pulse" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                      <Star className="w-5 h-5 text-yellow-800" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    Teacher Ali Hassan
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-6">
                    Certified Quran Teacher & Hafiz
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                      <div className="text-3xl font-bold text-emerald-600 animate-pulse">
                        500+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Students Taught
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <div className="text-3xl font-bold text-blue-600 animate-pulse">
                        5+
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-r from-emerald-200 to-blue-200 rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-spin" />
              <span className="text-emerald-700 font-semibold">
                Choose Your Learning Path
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Learning Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package for your child's Quran learning journey
              with Teacher Ali Hassan
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8"
            href="https://wa.me/923294546498"
          >
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group ${
                  pkg.popular
                    ? "border-emerald-500 scale-105"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    href="https://wa.me/923294546498"
                  >
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      🌟 Most Popular
                    </div>
                  </div>
                )}

                <div
                  className="text-center mb-8"
                  href="https://wa.me/923294546498"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                    {pkg.price}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {pkg.duration} • {pkg.sessions}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 animate-pulse" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    showNotification(`${pkg.name} package selected!`);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:-translate-y-1"
                >
                  Select This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="reviews"
        className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from satisfied parents around the world about Teacher Ali
              Hassan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{testimonial.country}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600">
              Book your free trial class with Teacher Ali Hassan and begin your
              child's Quran learning adventure
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">
                    Parent's Name *
                  </div>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-300"
                    placeholder="Enter parent's name"
                  />
                </div>
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">
                    Child's Name *
                  </div>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-300"
                    placeholder="Enter child's name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-300"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <div
                    className="block text-gray-700 font-semibold mb-2"
                    href="https://wa.me/923294546498"
                  >
                    WhatsApp Number
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-300"
                    placeholder="Enter WhatsApp number"
                  />
                </div>
              </div>

              <div className="mb-8">
                <div className="block text-gray-700 font-semibold mb-2">
                  Child's Age & Current Level
                </div>
                <textarea
                  rows="4"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-300"
                  placeholder="Tell us about your child's age and current Quran reading level..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                href="https://wa.me/923294546498"
                className="w-full bg-gradient-to-r from-emerald-600 via-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 group-hover:animate-pulse" />
                  <span href="https://wa.me/923294546498">
                    Book Free Trial Class
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hassan Quran Institute</h3>
                  <p className="text-gray-400 text-sm">
                    With Teacher Ali Hassan
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional online Quran teaching for international Muslim
                children with love and care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Quick Links
              </h4>
              <div className="space-y-3">
                {["About Teacher", "Packages", "Reviews", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Our Services
              </h4>
              <div className="space-y-3">
                {[
                  "Basic Quran Reading",
                  "Tajweed & Recitation",
                  "Hifz (Memorization)",
                  "Islamic Studies",
                ].map((item) => (
                  <div
                    key={item}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Contact Us
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>+92 329 4546498</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span href="mailto:alihassanakram.dev@gmail.com">
                    alihassanakram.dev@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span href="https://wa.me/923294546498">
                    Available on WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hassan Quran Institute. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HassanQuranInstitute;
