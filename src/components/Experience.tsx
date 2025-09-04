import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Software Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.'
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and AWS. Improved application performance by 40%.'
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. GPA: 3.8/4.0. Thesis on neural networks for natural language processing.'
    },
    {
      type: 'work',
      title: 'Software Engineer Intern',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 (Summer)',
      description: 'Built RESTful APIs and implemented automated testing pipelines. Contributed to a 25% reduction in bug reports.'
    },
    {
      type: 'education',
      title: 'Bachelor of Software Engineering',
      company: 'University of California',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Magna Cum Laude. President of Computer Science Club. Led team projects and hackathon competitions.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience & <span className="text-teal-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background that shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-teal-400 to-purple-400"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gray-900 border-4 border-blue-400 rounded-full z-10">
                <div className="absolute inset-1 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 flex-1 max-w-lg ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                      exp.type === 'work' ? 'from-blue-500 to-blue-700' : 'from-teal-500 to-teal-700'
                    } flex items-center justify-center`}>
                      {exp.type === 'work' ? (
                        <Briefcase size={20} className="text-white" />
                      ) : (
                        <GraduationCap size={20} className="text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;