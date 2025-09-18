

import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
   const education = [
    {
      degree: '+2 Level',
      institution: 'Nepal Mega College',
      location: 'New Baneshwar, KTM',
      period: '2021-2023',
      details: 'Completed +2 Science with a focus on Physics, Mathematics, and Computer Science, building a strong foundation in problem-solving and analytical thinking.',
    },
    {
      degree: 'BSc. CSIT',
      institution: 'Tribhuvan University',
      location: 'Shantinagar, KTM',
      period: '2023-Ongoing',
      details: 'Currently pursuing BSc.CSIT in Computer Science at Tribhuvan University, focusing on software development, web technologies, and building practical skills in programming and problem-solving.',
    },
  ];

  const certifications = [
    {
      name: 'Organizer and Core Memeber of Techtrix',
      provider: 'Techtrix Nepal',
      period: '2023',
      details: 'Certificate of appreciation for organizing Techtrix, a university-level tech event fostering innovation, workshops, and collaborative projects among students.',
    },
    {
      name: 'Python Bootcamp',
      provider: 'Python Users Group Nepal',
      period: '2023',
      details: 'Completed a Python Bootcamp, gaining hands-on experience in Python programming, problem-solving, and building small projects to strengthen coding skills.',
    },
    {
      name: 'Sixty Hours Andriod Workshop',
      provider: 'Techtrix Nepal ',
      period: '2023',
      details: 'Completed a 60-hour Android Workshop, gaining practical experience in Android app development, UI design, and building functional mobile applications.',
    },
  ];

  const experiences = [
    
    {
      type: 'work',
      title: 'Internship',
      company: '------',
      location: '------',
      period: '---',
      description: 'No internship experience yet .....',
    },
  ];

 

  

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience, <span className="text-teal-400">Education</span> & <span className="text-blue-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My journey of learning, professional experiences, and certifications that shaped my skills.
          </p>
        </div>

        {/* Education Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">Education</h3>
        <div className="space-y-6 mb-12">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">{edu.degree}</h3>
                  <p className="text-blue-400 font-semibold">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {edu.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {edu.location}
                </div>
              </div>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>


        {/* Experience Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">Experience</h3>
        <div className="space-y-6 mb-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <Briefcase size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {exp.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </div>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        

        {/* Certifications Section */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-6">Certifications</h3>
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">{cert.name}</h3>
                  <p className="text-blue-400 font-semibold">{cert.provider}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {cert.period}
                </div>
              </div>
              <p className="text-gray-300">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
