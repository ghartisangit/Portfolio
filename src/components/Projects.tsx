import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Education Management Information System',
      description: 'Education Management Information System where all the works related to college can be done like attendence, giving assignment and many others task',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      tags: ['Django', 'HTML'],
      demoUrl: '#',
      githubUrl: 'https://github.com/ghartisangit/Education-Management-Information-System.git',
      featured: true
    },
    {
      title: 'Hotel Management System',
      description: 'Hotel Management System enabling guests to order food, request service via web',
      image: '/src/images/Hotel.jpg',
      tags: ['Django', 'HTML'],
      demoUrl: '#',
      githubUrl: 'https://github.com/ghartisangit/Hotel-Management-System/tree/main/hotel_appt',
      featured: true
    },
    {
      title: 'Mero Palika',
      description: 'Mero Palika is a digital platform which is designed to streamline citizen services like complaints, training and vacancy announcement.',
      image: '/src/images/Image.png',
      tags: ['Django', 'Bootstrap','Html'],
      demoUrl: '#',
      githubUrl: 'https://github.com/ghartisangit/Mero_Palika',
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-blue-500/30' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-2 flex items-center gap-2">
                  <Star size={16} className="text-white" />
                  <span className="text-white text-sm font-semibold">Featured Project</span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-blue-300 text-sm rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 px-4 py-2 rounded-lg text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;