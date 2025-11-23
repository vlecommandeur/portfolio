import { useState } from 'react';
import styles from './Experience.module.css';

interface Project {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  technologies: string[];
  details: string[];
}

const experiences: Project[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Homa',
    period: 'July 2022 - July 2024',
    description:
      'Contributed to the Homa dashboard, implementing front-end features in React/TypeScript and developing backend services in Node.js.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST', 'GraphQL', 'Jest', 'Cypress'],
    details: [
      'Contributed to the Homa dashboard, implementing front-end features in React/TypeScript',
      'Developed and maintained backend services in Node.js, including REST and GraphQL endpoints, user management, and data processing pipelines',
      'Improved test coverage across frontend and backend using Jest and Cypress',
      'Participated in architecture decisions, performance optimizations and CI/CD improvements',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Happydemics',
    period: 'July 2020 - July 2022',
    description:
      'Implemented new features on the analytics platform using React/Redux and TypeScript, developed internal APIs in Ruby on Rails.',
    technologies: ['React', 'Redux', 'TypeScript', 'Ruby on Rails', 'Cypress'],
    details: [
      'Implemented new features on the analytics platform using React/Redux and TypeScript',
      'Developed internal APIs in Ruby on Rails',
      'Set up automation and end-to-end testing with Cypress',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Viveris',
    period: 'October 2018 - July 2020',
    description:
      'Developed applications for clients such as Paris City Hall, MBDA and agro-food companies using various technologies.',
    technologies: ['Java', 'Spring', '.NET Core', 'Node.js', 'React', 'Polymer', 'SAPUI5'],
    details: [
      'Developed applications for clients such as Paris City Hall, MBDA and agro-food companies',
      'Backend development with Java/Spring and .NET Core, plus integration of Node.js micro-services on internal tools',
      'Frontend development with React, Polymer, SAPUI5 depending on projects',
      'Facilitated workshops, wrote technical documentation, and delivered maintainable solutions in multi-team environments',
    ],
  },
  {
    id: 4,
    title: 'Earlier experiences',
    company: 'Internships',
    period: '2015 - 2018',
    description:
      'Internships in web development, backend, and embedded projects across various technologies.',
    technologies: ['React', 'JavaScript', 'Java', 'C', 'Embedded Systems'],
    details: [
      'Internships in web development (React, JavaScript)',
      'Backend development (Java, C)',
      'Embedded projects',
    ],
  },
];

export function Experience() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(prev => (prev === projectId ? null : projectId));
  };

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.prompt}>ls</span> ~/experience/
          </h2>
          <div className={styles.sectionDivider}>
            {Array(50).fill('─').join('')}
          </div>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.experienceItem}>
              <div
                className={styles.experienceHeader}
                onClick={() => toggleProject(exp.id)}
              >
                <div className={styles.headerLeft}>
                  <span className={styles.folderIcon}>
                    {expandedProject === exp.id ? '📂' : '📁'}
                  </span>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.companyName}>{exp.company}</h3>
                    <div className={styles.jobTitle}>{exp.title}</div>
                    <div className={styles.period}>{exp.period}</div>
                  </div>
                </div>
                <div className={styles.toggleIcon}>
                  {expandedProject === exp.id ? '▼' : '▶'}
                </div>
              </div>

              {expandedProject === exp.id && (
                <div className={styles.experienceDetails}>
                  <div className={styles.description}>
                    <p>{exp.description}</p>
                  </div>

                  <div className={styles.techStack}>
                    <h4>Technologies:</h4>
                    <div className={styles.techTags}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.achievements}>
                    <h4>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {exp.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className={styles.achievementItem}
                        >
                          <span className={styles.bullet}>▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.terminalFooter}>
                    <span className={styles.prompt}>$</span>
                    <span className={styles.command}>
                      {' '}
                      cat experience_{index + 1}.log | grep success
                    </span>
                    <span className={styles.cursor}>_</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
