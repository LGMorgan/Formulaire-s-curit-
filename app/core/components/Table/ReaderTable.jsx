import { useMemo, useState } from "react"
import { useRouter } from "blitz"

import styles from "app/style/table.module.css"

import { Table } from "."
import { ANSWER_TYPE } from "app/core/enums"

function mapToObject(m) {
  let o = {}
  for (let [k, v] of m) {
    if (v instanceof Object && !(v instanceof Date)) {
      let id = v.get("id") ? v.get("id") : k
      o[id] = mapToArray(v)
    } else {
      o[k] = v
    }
  }
  return o
}

function mapToArray(m) {
  let a = []
  for (let [k, v] of m) {
    if (v instanceof Object && !(v instanceof Date)) {
      let o = mapToObject(v)
      a.push(o)
    } else {
      a.push(v)
    }
  }
  return a
}

export const ReaderTable = ({ sheet, onRowClickFn }) => {
  const router = useRouter()

  const data = useMemo(() => {
    const a = []
    for (const value of sheet.values()) {
      const obj = mapToObject(value)
      a.push(obj)
    }
    return a
  }, [sheet])

  const [search, setSearch] = useState("")

  return (
    <div>
      <div className={styles.searchDiv}>
        <input
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher"
        />
      </div>

      {data.map((section, index) => {
        console.log({ dataSection: section })
        return (
          <div key={index}>
            <Table
              externalSearch={search}
              hideInternalSearch
              tableColumns={[
                {
                  Header: "",
                  accessor: "text",
                },
                {
                  id: "answer",
                  Header: "",
                  accessor: (v) => {
                    console.log({ v })
                    if (v.answerType === ANSWER_TYPE.OK) {
                      return v.answerType ? "Oui" : "Non"
                    } else {
                      return v.answer
                    }
                  },
                },
              ]}
              tableData={section.question}
              sectionTitle={section.name}
            />
          </div>
        )
      })}
    </div>
  )
}
