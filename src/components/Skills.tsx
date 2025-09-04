import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Frontend Frameworks',
      skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte'],
      color: 'from-teal-500 to-teal-700'
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Docker', 'AWS', 'Git', 'Kubernetes', 'GraphQL'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn', 'Pandas'],
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Soft Skills',
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Teamwork', 'Mentoring'],
      color: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;