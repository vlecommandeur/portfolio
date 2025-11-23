import styles from './Skills.module.css';

const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'React Query', level: 80 },
      { name: 'Tailwind', level: 75 },
      { name: 'Apollo', level: 70 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'Jest', level: 85 },
      { name: 'Cypress', level: 80 },
      { name: 'React Testing Library', level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.prompt}>chmod +x</span> ~/skills.sh
          </h2>
          <div className={styles.sectionDivider}>
            {Array(50).fill('─').join('')}
          </div>
        </div>

        <div className={styles.skillsGrid}>
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>⚡</span>
                {category.category}
              </h3>
              <div className={styles.skillsList}>
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
