import { useState } from 'react'
import styles from './Navigation.module.css'

const navItems = [
  { id: 'home', label: '> home' },
  { id: 'about', label: '> about' },
  { id: 'experience', label: '> experience' },
  { id: 'education', label: '> education' },
  { id: 'skills', label: '> skills' },
  { id: 'contact', label: '> contact' }
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.terminalNav}>
        <div className={styles.navHeader}>
          <span className={styles.prompt}>navigator@cv:</span>
          <span className={styles.path}>~/</span>
          <span className={styles.cursor}>_</span>
        </div>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}