import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.prompt}>cat</span> ~/about.md
          </h2>
          <div className={styles.sectionDivider}>
            {Array(50).fill('─').join('')}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.terminalBlock}>
            <pre className={styles.terminalOutput}>
{`$ whoami
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.

$ echo $PASSION
  Full-stack development | Clean architecture | Performance optimization
  Open-source enthusiast | Continuous learning | Problem-solving

$ echo $PHILOSOPHY
  "Write code that humans can understand, not just computers."
`}
            </pre>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Technologies</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Lines of Code</div>
            </div>
          </div>

          <div className={styles.terminalBlock}>
            <pre className={styles.terminalOutput}>
{`$ ./current_focus.sh
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  → Building scalable web applications with modern frameworks
  → Exploring the intersection of AI and software development
  → Contributing to open-source communities
  → Mentoring junior developers`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}