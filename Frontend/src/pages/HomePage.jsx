import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  MessageCircle,
  Star,
  Play,
  ExternalLink,
  BookOpen,
  Heart,
  Shield,
} from "lucide-react";
import UserNavbar from "../Components/Layouts/UserNavbar";

// Blur color constants
const BLUR_COLORS = {
  purple: "bg-purple-500/20",
  blue: "bg-blue-500/20",
  indigo: "bg-indigo-500/20",
  white: "bg-white/10",
  red: "bg-red-500/20",
};

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi",
      text: "This platform helped me connect with seniors who guided me through the entire admission process. Their insights were invaluable!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      college: "NIT Trichy",
      text: "As a current student, I love helping juniors navigate college life. It's rewarding to give back to the community.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      college: "BITS Pilani",
      text: "The real experiences shared here are so much better than generic college websites. Highly recommended!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Direct Student Connect",
      description:
        "Chat directly with current students from your dream colleges",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Real Experiences",
      description:
        "Get authentic insights about college life, academics, and placements",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Admission Guidance",
      description:
        "Step-by-step guidance for entrance exams and admission procedures",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Students",
      description:
        "All our student mentors are verified with proper college credentials",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Connected" },
    { number: "500+", label: "Colleges Covered" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Hero Section */}
      <UserNavbar />
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-20 w-72 h-72 ${BLUR_COLORS.purple} rounded-full blur-3xl animate-pulse`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 ${BLUR_COLORS.blue} rounded-full blur-3xl animate-pulse delay-1000`}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/10 to-transparent rounded-full"></div>
        </div>

        <div
          className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${BLUR_COLORS.purple} ${BLUR_COLORS.blue} rounded-full border border-purple-500/30 text-purple-200 text-sm font-medium backdrop-blur-sm`}
            >
              🎓 Bridge the Gap Between Dreams and Reality
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-950 bg-clip-text text-transparent whitespace-nowrap">
            College Pe Charcha
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connect with current college students, get real insights, and make
            informed decisions about your academic future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Our Story
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-xl font-bold mb-6">
              Why Choose Collage Pe Charcha?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Were more than just a platform - were your bridge to informed
              college decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 ${BLUR_COLORS.white} backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
              >
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors group-hover:scale-110 transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Choose Your College
              </h3>
              <p className="text-gray-400">
                Browse through hundreds of colleges and find the ones youre
                interested in
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Connect with Students
              </h3>
              <p className="text-gray-400">
                Match with verified current students from your chosen colleges
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Real Insights</h3>
              <p className="text-gray-400">
                Chat, ask questions, and get authentic experiences to make
                informed decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 md:p-12">
            <div className="mb-6">
              <span className="text-6xl">💬</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Join Our WhatsApp Community
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect instantly with peers, mentors, and college seniors. Get
              real-time updates, ask questions, and be part of a vibrant student
              community!
            </p>
            <div className="flex justify-center">
              <a
                href="https://chat.whatsapp.com/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.484 1.341 4.997l-1.409 5.151 5.283-1.386c1.463.801 3.125 1.235 4.782 1.235h.001c5.514 0 9.997-4.483 9.997-9.997 0-2.662-1.037-5.164-2.921-7.048-1.884-1.884-4.386-2.949-7.077-2.949zm0 18.181c-1.518 0-3.004-.393-4.292-1.137l-.308-.178-3.136.822.837-3.059-.2-.314c-.831-1.306-1.271-2.823-1.271-4.315 0-4.411 3.589-8 8-8 2.137 0 4.146.833 5.657 2.344 1.511 1.511 2.343 3.52 2.343 5.656 0 4.411-3.589 8-8 8z" />
                </svg>
                Join WhatsApp
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              🚀 Fast answers • Peer support • Free to join
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">
                  `{testimonials[activeTestimonial].text}`
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonial].college}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-purple-500 w-8"
                      : "bg-gray-600"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Channel Promotion */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-12`}
          >
            <div className="mb-6">
              <span className="text-6xl">📺</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Follow Our YouTube Channel
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get exclusive college insights, admission tips, and student
              stories. Join our growing community of ambitious students!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
                <Play className="h-5 w-5" />
                Subscribe Now
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center">
                <Heart className="h-5 w-5 text-red-400" />
                Latest Videos
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              🔔 Hit the bell icon to never miss our latest content!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
