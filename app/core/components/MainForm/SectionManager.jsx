import { useState, useEffect } from "react"
import { QuestionData } from "./QuestionData"

import { SectionsOverview } from "./SectionsOverview"
import { useMutation, useRouter } from "blitz"
import { Drawer, Button } from "@mantine/core"

import createSheet from "app/sheets/mutations/createSheet"
import updateSheet from "app/sheets/mutations/updateSheet"
import * as localforage from "localforage"
import { showNotification } from "@mantine/notifications"

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()),
    }
  } else {
    return value
  }
}

export const SectionManager = ({ sections, editing }) => {
  const [formState, updateForm] = useState(sections)
  const [createSheetMutation] = useMutation(createSheet)
  const [updateSheetMutation] = useMutation(updateSheet)
  const [opened, setOpened] = useState(false)

  const [page, setPage] = useState(0) // Section ID
  const router = useRouter()

  const drawerChangePage = (index) => {
    setOpened(false)
    setPage(index)
  }
  useEffect(() => {
    updateForm(sections)
  }, [sections])

  const saveState = (questionsState) => {
    let state = formState
    state.get(page).set("question", questionsState)
    updateForm(state)
  }

  const changePage = (target, questionsState) => {
    saveState(questionsState)
    setPage(page + target)
  }

  console.log("SectionManager rendered", { formState })

  const save = async (questionsState) => {
    let state = formState
    state.get(page).set("question", questionsState)
    let q = 0
    let a = 0
    state.forEach((section) => {
      section.get("question").forEach((ques) => {
        q++
        if (
          (ques.get("answerType") === "CHECK" && ques.get("answer") === true) ||
          (ques.get("answerType") !== "CHECK" &&
            ques.get("answer") != undefined &&
            ques.get("answer").length != 0)
        ) {
          a++
        }
      })
    })

    console.log(`${a} answers for ${q} questions in `, { state })

    state.forEach((a) => {
      a.get("question").forEach((q) => {
        if (!!q.get("answer")) console.log(q.get("answer"))
      })
    })

    console.log("STATE PRE-JSON", { state })
    const str = JSON.stringify(state, replacer)
    const completed = a === q

    const values = {
      boatId: state.get(0).get("question").get("boatId").get("answer"),
      skipperName: state.get(2).get("question").get("skipperName").get("answer"),
      boatType: state.get(0).get("question").get("boatType").get("answer"),
      form: str,
      completed,
    }
    console.log({ values })

    if (navigator.onLine) {
      try {
        const sheet =
          editing === true ? await updateSheetMutation(values) : await createSheetMutation(values)
        console.log({ sheet })
      } catch (error) {
        console.log({ error })
      }
    } else {
      localforage.setItem(values.boatId, values).then((e) => {
        console.log({ e })
        showNotification({
          title: `Formulaire sauvé localement`,
          message: "Connectez-vous à internet pour l'envoyer sur les serveurs",
        })
      })
    }

    router.replace("/Dashboard")
  }

  return (
    <div>
      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Vue d'ensemble"
        padding="xl"
        size="md"
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <SectionsOverview
          sections={formState}
          goToPage={(index) => drawerChangePage(index)}
          page={page}
        />
      </Drawer>
      {formState.get(page) && (
        <QuestionData
          sectionTitle={formState.get(page) && formState.get(page).get("name")}
          questions={formState.get(page).get("question")}
          page={page}
          saveState={(s) => saveState(s)}
          save={(s) => save(s)}
          lastPage={formState.size - 1}
          changePage={(targetPage, questionsState) => changePage(targetPage, questionsState)}
          openDrawer={() => setOpened(!opened)}
        />
      )}
    </div>
  )
}
