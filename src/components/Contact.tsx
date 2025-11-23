import styles from './Contact.module.css';

export function Contact() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'valentin-lecommandeur-cv.pdf';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vlecommandeur',
      icon: '🐙',
      description: 'Check out my open-source contributions',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lecommandeurvalentin/',
      icon: '💼',
      description: 'Connect with me professionally',
    },
  ];

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.prompt}>ping</span> ~/contact/
          </h2>
          <div className={styles.sectionDivider}>
            {Array(50).fill('─').join('')}
          </div>
        </div>

        <div className={styles.contactGrid}>
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.contactIcon}>{link.icon}</span>
                <h3 className={styles.contactName}>{link.name}</h3>
              </div>
              <p className={styles.contactDescription}>{link.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.linkArrow}>→</span>
                <span className={styles.linkText}>Visit</span>
              </div>
            </a>
          ))}

          <button onClick={handleDownloadCV} className={styles.downloadCard}>
            <div className={styles.cardHeader}>
              <span className={styles.contactIcon}>📄</span>
              <h3 className={styles.contactName}>Download CV</h3>
            </div>
            <p className={styles.contactDescription}>
              Get the full CV in PDF format
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.linkArrow}>↓</span>
              <span className={styles.linkText}>Download</span>
            </div>
          </button>
        </div>

        <div className={styles.terminalFooter}>
          <pre className={styles.terminalOutput}>
            {`$ echo "Thank you for visiting!"
> Looking forward to connecting with you
> Have a great day! 👋

$ exit
Connection closed.`}
          </pre>
        </div>
      </div>
    </section>
  );
}
