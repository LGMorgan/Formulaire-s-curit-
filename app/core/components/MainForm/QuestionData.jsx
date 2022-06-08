import { Footer } from "app/core/components/Footer"
import { useEffect, useState } from "react"
import { QuestionDisplayer } from "./QuestionDisplayer"
import { Button } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { IconMenu2, IconDeviceFloppy, IconDoorExit } from "@tabler/icons"

import styles from "app/style/questions.module.css"

export const QuestionData = ({
  questions = [],
  page,
  lastPage,
  changePage,
  save,
  saveState,
  openDrawer,
  sectionTitle = "Section sans titre",
}) => {
  const phoneScreen = useMediaQuery(`(max-width: 650px)`)
  const [questionsState, setQuestionsState] = useState(new Map())

  useEffect(() => {
    console.log({ questions })
    setQuestionsState(questions)
  }, [questions])

  const onChange = (value) => {
    console.log({ value })

    let map = new Map(questionsState)
    let obj = map.get(value.id)
    obj.set("answer", value.answer)

    map.set(value.id, obj)

    setQuestionsState(map)
    saveState(map)
  }
  console.log({ questionsState })
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.sectionTitle}>{sectionTitle}</p>
        <div className={styles.contentList}>
          <ul>
            {[...questionsState].map((q, i) => {
              return (
                <li key={q[1].get("id")}>
                  <QuestionDisplayer
                    index={i}
                    question={q[1]}
                    onChange={(value) => onChange(value)}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <Footer>
        <div className={styles.arrowCorner}>
          <Button disabled={page === 0} onClick={() => changePage(-1, questionsState)}>
            <span>{"<"}</span>
          </Button>

          <Button disabled={page == lastPage} onClick={() => changePage(1, questionsState)}>
            {">"}
          </Button>
        </div>

        <Button onClick={() => save(questionsState)}>
          {phoneScreen ? (
            <>
              <IconDeviceFloppy size={18} /> & <IconDoorExit size={18} />
            </>
          ) : (
            "Enregistrer et quitter"
          )}
        </Button>
        <Button onClick={() => openDrawer()}>
          {phoneScreen ? <IconMenu2 size={18} /> : "Vue d'ensemble"}
        </Button>
      </Footer>
    </div>
  )
}
