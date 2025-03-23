import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle mouse movement for cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "visualsense.ai",
      description: "A web app enhancing accessibility for visually impaired individuals through audio prompts, flexible UI, and real-time image analysis.",
      //image: "/api/placeholder/400/300",
      tags: ["TensorFlow", "PyTorch", "React.js", "Node.js"]
    },
    {
      title: "legaldash.ai",
      description: "A web app automating legal document analysis and lawsuit management for SaaS companies, featuring clause detection, loophole identification, and real-time dashboards.",
      //image: "/api/placeholder/400/300",
      tags: ["NLP Libraries", "ML", "Django"]
    },
    {
      title: "signflow.ai",
      description: "A model converting Indian Sign Language gestures into text and speech, supporting real-time and uploaded content.",
      //image: "/api/placeholder/400/300",
      tags: ["OpenCV", "MediaPipe", "Flask"]
    },
    {
      title: "AYA - Cohere for AI",
      description: "A project promoting multilingual representation in AI, focusing on Marathi language contributions for LLMs.",
      //image: "/api/placeholder/400/300",
      tags: ["Hugging Face Transformers"]
    },
    {
      title: "Pet Frame Detection",
      description: "Contributions in Image Annotations for developing an ML model that detects pets in images.",
      //image: "/api/placeholder/400/300",
      tags: ["OpenCV", "YOLO", "Flask"]
    }
  ];

  const certifications = [
    "IBM's Python for Data Science, AI & Development",
    "ISRO-IIRS Remote Sensing and Geospatial Information Systems"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Cursor follower */}
<div 
  style={{ 
    position: 'fixed',
    width: '32px',
    height: '32px',
    backgroundColor: '#f97316', // orange-500 color
    borderRadius: '50%',
    filter: 'blur(10px)',
    pointerEvents: 'none',
    opacity: 0.7,
    zIndex: 50,
    left: `${mousePosition.x - 16}px`,
    top: `${mousePosition.y - 16}px`,
    transform: `scale(${scrollProgress / 50 + 1})`,
    transition: 'all 100ms ease'
  }}
/>

      {/* Progress gradient */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                Ruchika Metkar
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-orange-500 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
              <a href="/resume.pdf" className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
                <Download size={18} />
                <span>Resume</span>
              </a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:text-orange-500 transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 hover:text-orange-500 transition-colors">Projects</a>
              <a href="#certifications" className="block px-3 py-2 hover:text-orange-500 transition-colors">Certifications</a>
              <a href="#contact" className="block px-3 py-2 hover:text-orange-500 transition-colors">Contact</a>
              <a href="/resume.pdf" className="block px-3 py-2 hover:text-orange-500 transition-colors">Resume</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Hi, I'm Ruchika
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-500">
            Computer Science & Business Undergrad | Machine Learning Developer | Cognitive Science Researcher
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Exploring the intersection of Machine Learning, Cognitive Science, and Business Intelligence
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg">
                I'm a second-year undergraduate student pursuing a double major in Computer Science and Business. 
                Understanding and exploring the intersection between the two, and research in Computational Neuroscience interests me.
              </p>
              <p className="text-lg">
                My research interests lie at the intersection of Machine Learning, Cognitive Science, and Computational Neuroscience. 
                I'm particularly fascinated by neural networks and their parallels with human cognition.
              </p>
              <p className="text-lg">
                On campus, I'm actively involved in multiple clubs, where I collaborate 
                with fellow students on innovative projects and participate in hackathons.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Areas of Interest</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Deep Learning",
                  "Cognitive Science",
                  "Computational Neuroscience",
                  "Risk Analysis",
                  "Business Intelligence"
                ].map((interest, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg
                    transform hover:scale-105 transition-transform`}
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all
                ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm
                        ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all
                ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span className="text-lg">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/groovycatblaze" className="transform hover:scale-110 transition-transform hover:text-orange-500">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/ruchika-metkar/" className="transform hover:scale-110 transition-transform hover:text-orange-500">
              <Linkedin size={32} />
            </a>
            <a href="ruchika.metkar@gmail.com" className="transform hover:scale-110 transition-transform hover:text-orange-500">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            © {new Date().getFullYear()} Ruchika Metkar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
