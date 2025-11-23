import styles from './About.module.css';

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
  Full-stack JavaScript developer with 6 years of experience building and maintaining
  web applications using React, TypeScript and Node.js. Comfortable across the full
  lifecycle: UI development, backend services, API design, testing, CI/CD and deployment.
`}
            </pre>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>∞</div>
              <div className={styles.statLabel}>Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
