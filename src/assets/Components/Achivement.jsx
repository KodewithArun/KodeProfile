import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import achivement1 from '../../../public/achivement1.jpg';
import achivement2 from '../../../public/achivement2.webp'; 
import achivement3 from '../../../public/achivement3.png';
import achivement4 from '../../../public/achivement4.webp';

import { 
  Trophy,
  Medal,
  Award,
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { i } from 'framer-motion/client';

const Achievement = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: "AI/ML Coursework Certification",
      description: "Completed comprehensive AI/ML coursework, mastering Python, data analysis, machine learning, deep learning, RAG, and agents.",
      image: achivement2,
      date: "August 2025",
      category: "Certification",
      icon: FileText,
      skills: ["Python", "Data Analysis", "ML", "DL" ,"RAG","AGENTS"],
      color: "from-blue-500 to-indigo-500"
    },
  
   
    {
      id: 2,
      title: "Hackathon Champion Hosted by UTech",
      description: "Led team to victory in 72-hour coding marathon, building award-winning Hand For Change application from concept to deployment.",
      image: achivement1,
      date: "December 2024",
      category: "Competition",
      icon: Trophy,
      skills: ["Team Leadership", "Rapid Development", "Hand For Change", "Problem Solving"],
      color: "from-red-500 to-pink-500"
    },

    {
        id: 3,
        title: "CyberUtsav 2.0 Mentor",
        description: "Mentored aspiring developers in web technologies, guiding project development and fostering innovation during CyberUtsav 2.0 event.",
        image:achivement3,
        date: "September 2025",
        category: "Mentorship",
        icon: Medal,
        skills: ["Mentorship", "Leadership" , "Community Engagement"],
        color: "from-yellow-400 to-amber-500"
    },

    {
      id: 4,
      title: "Public Speaking Course Completion",
      description: "Completed a public speaking course to enhance communication skills, focusing on clarity, engagement, and audience connection.",
      image: achivement4,
        date: "June 2022",
        category: "Certification",
        icon: FileText,
        skills: ["Public Speaking", "Communication", "Confidence"],
        color: "from-green-500 to-teal-500"
      },
    
      
  
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(achievements.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(achievements.length / 3)) % Math.ceil(achievements.length / 3));
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white" ref={containerRef}>
      {/* Decorative Background Blobs */}
    

      <div className=" mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              MILESTONES & RECOGNITION
            </span>
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-4">
            Achievements
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of milestones, recognitions, and accomplishments that showcase dedication to excellence and continuous learning.
          </p>
        </motion.div>


        {/* Achievements Grid */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex"
          >
            {Array.from({ length: Math.ceil(achievements.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievements
                    .slice(slideIndex * 3, (slideIndex + 1) * 3)
                    .map((achievement, index) => {
                      const Icon = achievement.icon;
                      
                      return (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: isVisible ? 1 : 0, 
                            y: isVisible ? 0 : 20
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1
                          }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-black/30 border border-gray-800 p-0 cursor-pointer"
                          onClick={() => setSelectedAchievement(achievement)}
                        >
                          {/* Background Gradient Overlay on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            <div className={`w-full h-full bg-gradient-to-br ${achievement.color}`}></div>
                          </div>

                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={achievement.image} 
                              alt={achievement.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
                              <Icon size={20} className="text-white" />
                            </div>
                            <div className={`absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full border border-white/20`}>
                              {achievement.category}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center text-sm text-gray-400 mb-3">
                              <Calendar size={14} className="mr-1" />
                              {achievement.date}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                              {achievement.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                              {achievement.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                              {achievement.skills.slice(0, 3).map((skill, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 rounded-md backdrop-blur-sm border border-gray-700"
                                >
                                  {skill}
                                </span>
                              ))}
                              {achievement.skills.length > 3 && (
                                <span className="px-2 py-1 text-xs font-medium bg-gray-800/60 text-gray-500 rounded-md backdrop-blur-sm">
                                  +{achievement.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Corner Glow Accent */}
                          <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${achievement.color} opacity-10 blur-2xl`}></div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        

       
      </div>

      
        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={prevSlide}
            className="p-3 rounded-xl border border-gray-700 text-gray-400 hover:bg-gray-900 hover:border-gray-600 transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(achievements.length / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-xl border border-gray-700 text-gray-400 hover:bg-gray-900 hover:border-gray-600 transition-all backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>



      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full rounded-2xl overflow-hidden border border-gray-700 bg-black/40 backdrop-blur-xl shadow-2xl"
            >
              <div className="relative h-64">
                <img 
                  src={selectedAchievement.image} 
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg hover:bg-black/80 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
                <div className={`absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-sm rounded-lg`}>
                  <selectedAchievement.icon size={24} className="text-white" />
                </div>
              </div>
              
              <div className="p-8 bg-black">
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{selectedAchievement.date}</span>
                  <span>•</span>
                  <span className="text-sm">{selectedAchievement.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-4">
                  {selectedAchievement.title}
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedAchievement.description}
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-md text-sm font-medium backdrop-blur-sm border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Achievement;