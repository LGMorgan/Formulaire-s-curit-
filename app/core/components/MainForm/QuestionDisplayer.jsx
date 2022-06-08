import { Button, RadioGroup, Radio, NumberInput, TextInput, Checkbox } from "@mantine/core"
import { ANSWER_TYPE } from "app/core/enums"
import { useState } from "react"

function Check({ value = false, onChange }) {
  const [val, setVal] = useState(value)
  return (
    <div>
      <Checkbox
        checked={!!value}
        size="md"
        onChange={() => {
          onChange(!value)
        }}
      />
    </div>
  )
}

function Closed({ question, onChange }) {
  if (question.get("expectedAnswers").size === 0) {
    question.set(
      "expectedAnswers",
      new Map([
        [
          0,
          new Map([
            ["fr", "Oui"],
            ["en", "Yes"],
          ]),
        ],
        [
          1,
          new Map([
            ["fr", "Non"],
            ["en", "No"],
          ]),
        ],
      ])
    )
  }

  return (
    <div>
      <RadioGroup
        value={question.get("answer")}
        spacing={"xl"}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        onChange={(value) => {
          onChange({
            id: question.get("anchor") != undefined ? question.get("anchor") : question.get("id"),
            answer: value,
          })
        }}
      >
        {[...question.get("expectedAnswers")].map((e, i) => {
          let label = (
            <p>
              {e[1].get("fr")} {!!e[1].get("en") ? <span> / {e[1].get("en")}</span> : ""}
            </p>
          )
          return <Radio key={i} value={e[1].get("fr")} label={label} />
        })}
      </RadioGroup>
    </div>
  )
}

export const QuestionDisplayer = ({ question, onChange }) => {
  return (
    <div>
      <p>{question.get("text")}</p>
      {(question.get("answerType") === undefined ||
        question.get("answerType") === ANSWER_TYPE.OK) && (
        <Checkbox
          checked={!!question.get("answer") ? true : false}
          size="md"
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          onChange={(value) =>
            onChange({
              id: question.get("anchor") != undefined ? question.get("anchor") : question.get("id"),
              answer: value.target.checked,
            })
          }
        />
      )}
      {question.get("answerType") === ANSWER_TYPE.TEXT && (
        <TextInput
          placeholder={question.get("placeholder")}
          value={question.get("answer")}
          onChange={(value) =>
            onChange({
              id: question.get("anchor") != undefined ? question.get("anchor") : question.get("id"),
              answer: value.target.value,
            })
          }
        />
      )}
      {question.get("answerType") === ANSWER_TYPE.NUMBER && (
        <NumberInput
          disabled={question.get("disabled")}
          onChange={(value) => {
            console.log({ value })
            onChange({
              id: question.get("anchor") != undefined ? question.get("anchor") : question.get("id"),
              answer: value,
            })
          }}
          value={question.get("answer")}
          hideControls
        />
      )}
      {question.get("answerType") === ANSWER_TYPE.CLOSED && (
        <Closed
          question={question}
          onChange={(value) => {
            console.log({ value })
            onChange(value)
          }}
        />
      )}
    </div>
  )
}
