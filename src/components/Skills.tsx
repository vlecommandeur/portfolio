import styles from './Skills.module.css'

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "CSS/Sass", level: 88 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Kubernetes", level: 60 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Terminal", level: 88 }
    ]
  }
]

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

        <div className={styles.terminalBlock}>
          <pre className={styles.terminalOutput}>
{`$ ./skills.sh --check
┌─────────────────────────────────────────────────────────────┐
│             SKILL PROFICIENCY MATRIX                        │
└─────────────────────────────────────────────────────────────┘`}
          </pre>
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

        <div className={styles.terminalBlock}>
          <pre className={styles.terminalOutput}>
{`$ echo "Learning is a continuous process..."
> Currently exploring: Rust, WebAssembly, Advanced AI/ML
> Next on the list: GraphQL, Next.js, Advanced React Patterns`}
          </pre>
        </div>
      </div>
    </section>
  )
}