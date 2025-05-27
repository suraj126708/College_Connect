import { useEffect, useRef } from "react";
import vit from "../../assets/vit.jpg";
import pict from "../../assets/pict.jpg";
import pccoe from "../../assets/pccoe.jpg";
import dpu from "../../assets/dpu.jpg";
import walchand from "../../assets/walchand.jpg";
import cumines from "../../assets/cumines.jpg";
import coep from "../../assets/coep.jpg";

const colleges = [
  {
    name: "VIT Pune",
    address: "Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037",
    image: vit,
  },
  {
    name: "PICT Pune",
    address: "Survey No. 27, Dhankawadi, Pune, Maharashtra 411043",
    image: pict,
  },
  {
    name: "PCCOE Pune",
    address: "Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044",
    image: pccoe,
  },
  {
    name: "Dr. D. Y. Patil Institute of Technology",
    address: "Sant Tukaram Nagar, Pimpri Colony, Pune, Maharashtra 411018",
    image: dpu,
  },
  {
    name: "Walchand College of Engineering",
    address: "Walchand Hirachand Marg, Vishrambag, Sangli, Maharashtra 416415",
    image: walchand,
  },
  {
    name: "Cummins College of Engineering for Women",
    address: "Karve Nagar, Pune, Maharashtra 411052",
    image: cumines,
  },
  {
    name: "COEP Technological University",
    address: "Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005",
    image: coep,
  },
];

const CollegeSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let isHovered = false;

    const scrollStep = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 0.8;
        // Loop back to start for infinite scroll effect
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Triple colleges for seamless infinite scroll
  const displayColleges = [...colleges, ...colleges, ...colleges];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 text-transparent bg-clip-text">
            Explore Top Colleges
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Scroll through and discover colleges. Connect with students and get
            real insights!
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl">
          <div
            ref={scrollRef}
            className="flex gap-6 w-full overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {displayColleges.map((college, idx) => (
              <div
                key={`${college.name}-${idx}`}
                className="min-w-[280px] bg-white/10 border border-white/20 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 flex flex-col group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">
                    {college.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-5 flex-1 line-clamp-2 leading-relaxed">
                    {college.address}
                  </p>
                  <button className="mt-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced fade effects for dark theme */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-indigo-900 via-indigo-900/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent" />
        </div>
      </div>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CollegeSection;
