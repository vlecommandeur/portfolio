import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const asciiArt = `
███╗   ███╗ █████╗ ██╗     ██╗
████╗ ████║██╔══██╗██║     ██║
██╔████╔██║███████║██║     ██║
██║╚██╔╝██║██╔══██║██║     ██║
██║ ╚═╝ ██║██║  ██║███████╗███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝

╔════════════════════════════════╗
║     FULL STACK DEVELOPER       ║
║    PASSIONATE ABOUT CODE       ║
╚════════════════════════════════╝
`

const terminalPrompt = `$ greeting = "Hello, World! I'm a passionate developer..."
$ echo $greeting
> Welcome to my terminal-style CV
> Use the navigation below to explore my sections
> Or just scroll down to discover more
$
█
`

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const fullText = terminalPrompt
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex])
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className={styles.hero} id="home">
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalButtons}>
            <span className={styles.buttonRed}></span>
            <span className={styles.buttonYellow}></span>
            <span className={styles.buttonGreen}></span>
          </div>
          <div className={styles.terminalTitle}>john_doe@terminal:~</div>
        </div>

        <div className={styles.terminalContent}>
          <pre className={styles.asciiArt}>{asciiArt}</pre>

          <div className={styles.terminalOutput}>
            <pre className={styles.typingText}>
              {displayText}
              {isTyping && <span className={styles.cursor}></span>}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}