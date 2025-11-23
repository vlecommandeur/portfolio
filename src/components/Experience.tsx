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
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp Inc.',
    period: '2022 - Present',
    description:
      'Leading development of enterprise applications and mentoring junior developers',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    details: [
      '• Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      '• Sed do eiusmod tempor incididunt ut labore et dolore magna',
      '• Ut enim ad minim veniam, quis nostrud exercitation',
      '• Duis aute irure dolor in reprehenderit in voluptate velit esse',
      '• Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description:
      'Built scalable web applications from scratch and implemented CI/CD pipelines',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker'],
    details: [
      '• Developed and maintained 10+ production applications',
      '• Reduced page load times by 60% through optimization',
      '• Led migration from monolith to microservices architecture',
      '• Implemented automated testing reducing bugs by 40%',
    ],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description:
      'Developed responsive websites and web applications for various clients',
    technologies: ['JavaScript', 'React', 'CSS', 'PHP', 'MySQL'],
    details: [
      '• Built 20+ client websites with modern web standards',
      '• Collaborated with design team to implement pixel-perfect UIs',
      '• Participated in agile development processes',
      '• Maintained and updated existing client projects',
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
