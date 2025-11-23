import styles from './Education.module.css';

const educationData = [
  {
    degree: "Master's degree in Computer Science",
    school: 'Université de La Rochelle',
    period: '2016 - 2018',
    details: [
      'Exchange year (M1): University of South Wales — Cardiff, UK',
      'Exchange year (M2): USTH — Hanoi, Vietnam',
    ],
  },
  {
    degree: 'Bachelor in Computer Science',
    school: 'Université de La Rochelle',
    period: '2015 - 2016',
    details: [
      'Foundation studies in computer science principles',
      'Programming fundamentals and software engineering',
    ],
  },
  {
    degree: 'DUT in Computer Science',
    school: 'IUT La Rochelle',
    period: '2013 - 2015',
    details: [
      'Two-year technical degree in computer science',
      'Hands-on development and system administration training',
    ],
  },
];

export function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.prompt}>man</span> ~/education/
          </h2>
          <div className={styles.sectionDivider}>
            {Array(50).fill('─').join('')}
          </div>
        </div>

        <div className={styles.educationList}>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <div className={styles.schoolIcon}>🎓</div>
                <div className={styles.educationInfo}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.school}>{edu.school}</div>
                  <div className={styles.period}>{edu.period}</div>
                </div>
              </div>

              <div className={styles.educationDetails}>
                <div className={styles.terminalBlock}>
                  <pre className={styles.terminalOutput}>
                    {`$ cat education_${index + 1}.txt
${edu.details.map(detail => `> ${detail}`).join('\n')}`}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.terminalBlock}>
          <pre className={styles.terminalOutput}>
            {`$ echo "Continuous Learning Journey..."
> Online Courses: 20+ completed`}
          </pre>
        </div>
      </div>
    </section>
  );
}
