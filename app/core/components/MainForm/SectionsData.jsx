import { Suspense, useEffect, useState } from "react"

import { SectionManager } from "./SectionManager"

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value)
    }
  }
  return value
}

function objectToMap(o) {
  let m = new Map()
  for (let k of Object.keys(o)) {
    if (o[k] instanceof Object && !(o[k] instanceof Date)) {
      let id =
        o[k].anchor != undefined
          ? o[k].anchor
          : o[k].id != undefined
          ? o[k].id
          : isNaN(k)
          ? k
          : parseInt(k)
      console.log(isNaN(k), k, id, o[k])
      m.set(id, objectToMap(o[k]))
    } else {
      m.set(k, o[k])
    }
  }
  return m
}

export const SectionsData = ({ sections, sheet, edit = true, boatId }) => {
  console.log({ fromSectionData: { sections, sheet, edit, boatId } })

  const [map, setMap] = useState(new Map())

  useEffect(() => {
    let json = edit ? JSON.parse(sheet.form, reviver) : new Map()
    let sectionsMap = new Map()

    sections.forEach((section) => {
      let m = objectToMap(section)
      console.log({ m })
      sectionsMap.set(section.index, m)
    })

    console.log({ sectionsMap })

    for (const [key, value] of sectionsMap.entries()) {
      console.log(key + " = " + value)
    }

    sectionsMap.get(0).get("question").get("boatId").set("answer", parseInt(boatId))

    TODO: "Deeply nested merging & move from page to page with arrows when text not in focus"

    let mergedMap = new Map([...sectionsMap, ...json])
    //setMap(sectionsMap)
    setMap(mergedMap)
  }, [])

  console.log({ map, sheet })
  return (
    <div>
      <Suspense fallback={<p>Chargement...</p>}>
        <SectionManager editing={edit} sections={map} />
        Section Data
      </Suspense>
    </div>
  )
}

//
