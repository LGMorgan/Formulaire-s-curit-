import { useEffect, useState } from "react"
import styles from "app/style/sectionOverview.module.css"
import { Button } from "@mantine/core"

export const SectionsOverview = ({ sections, page, goToPage }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    const a = []
    sections.forEach((section) => {
      let questions = section.get("question")
      let questionSize = questions.size
      let answers = 0

      questions.forEach((q) => {
        if (!!q.get("answer")) answers++
      })

      a.push({
        name: section.get("name"),
        answers,
        questionSize,
        index: section.get("index"),
      })
      setState(a)
    })
  }, [sections, page])

  return (
    <div className={styles.div}>
      {sections &&
        state.map((section, index) => {
          return (
            <button
              className={styles.sectionButton}
              key={index}
              onClick={() => goToPage(section.index)}
            >
              <span>{section.name}</span>
              <span>
                {section.answers} / {section.questionSize}
              </span>
            </button>
          )
        })}
    </div>
  )
}
