import styles from './Education.module.css'

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    period: "2014 - 2018",
    details: [
      "GPA: 3.8/4.0",
      "Dean's List: 6 semesters",
      "Research: Machine Learning and Natural Language Processing",
      "Thesis: Neural Networks in Autonomous Systems"
    ]
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Academy",
    period: "2018",
    details: [
      "Intensive 12-week program",
      "Focus on modern JavaScript frameworks",
      "Team projects using agile methodology",
      "Graduated with distinction"
    ]
  }
]

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
> Online Courses: 20+ completed
> Certifications: AWS Solutions Architect, Google Cloud Professional
> Conferences: React Conf, Node.js Summit, AWS re:Invent`}
          </pre>
        </div>
      </div>
    </section>
  )
}