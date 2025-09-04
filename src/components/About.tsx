import React from 'react';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 p-1">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100">
              Passionate Developer with a Vision
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in software development, I specialize in creating 
              innovative digital solutions that bridge the gap between technology and user experience. 
              My journey began with a curiosity for how things work and evolved into a passion for 
              building products that make a difference.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in collaborative environments where I can contribute to meaningful projects 
              while continuously learning and growing. My expertise spans full-stack development, 
              with a particular interest in AI/ML integration and modern web technologies.
            </p>

            {/* Interests */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                <Code className="text-blue-400 mb-2" size={24} />
                <h4 className="font-semibold text-gray-200">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-teal-500 transition-colors">
                <Lightbulb className="text-teal-400 mb-2" size={24} />
                <h4 className="font-semibold text-gray-200">Innovation</h4>
                <p className="text-gray-400 text-sm">Exploring cutting-edge technologies</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                <Heart className="text-purple-400 mb-2" size={24} />
                <h4 className="font-semibold text-gray-200">User Focus</h4>
                <p className="text-gray-400 text-sm">Creating delightful experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;