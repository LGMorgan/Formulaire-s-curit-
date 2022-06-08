import { usePaginatedQuery, useRouter, useMutation } from "blitz"
import { useState, useEffect } from "react"
import getSheets from "app/sheets/queries/getSheets"
import * as localforage from "localforage"
import { showNotification } from "@mantine/notifications"

import styles from "app/style/list.module.css"
import { Table } from "./Table"
import createSheet from "app/sheets/mutations/createSheet"
import updateSheet from "app/sheets/mutations/updateSheet"

const BoatType = {
  PROTO: "PROTO",
  SERIE: "SERIE",
}

export const List = () => {
  const router = useRouter()
  const [{ sheets, hasMore }] = usePaginatedQuery(getSheets, {
    orderBy: { boatId: "desc" },
    select: {
      id: true,
      boatId: true,
      skipperName: true,
      boatType: true,
      completed: true,
      form: false,
    },
  })
  const [storedData, setStoredData] = useState([])
  const [createSheetMutation] = useMutation(createSheet)
  const [updateSheetMutation] = useMutation(updateSheet)

  useEffect(() => {
    console.log({ window, navigator })
    let n = navigator
    if (!n.onLine) {
      showNotification({
        message: `You are${n.onLine ? "" : "n't"} online`,
        color: "red",
      })
    }

    localforage
      .keys()
      .then((val) => {
        console.log("keys:", val)
        setStoredData(val)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log({ sheets })
    let sheetKeys = sheets.map((sheet, index) => sheet.boatId)
    console.log(sheetKeys)
    storedData.forEach((key) => {
      try {
        console.log({ key })
        localforage
          .getItem(key)
          .then(async (sheet) => {
            console.log({ sheet })
            let status
            if (sheetKeys.includes(parseInt(key))) {
              console.log("update")
              status = await updateSheetMutation(sheet)
            } else {
              console.log("Create")
              status = await createSheetMutation(sheet)
            }
            console.log({ status })
            return status
          })
          .then((val) => {
            localforage
              .removeItem(val.boatId)
              .then((suc) => console.log({ suc }, "removed"))
              .catch((err) => console.log(err))
          })
      } catch (error) {
        console.log({ error })
      }
    })
  }, [storedData])

  const columns = [
    {
      Header: () => (
        <div
          style={{
            textAlign: "left",
          }}
        >
          Numéro bateau
        </div>
      ),
      accessor: "boatId",
    },
    {
      Header: "Skipper(s)",
      accessor: "skipperName",
    },
    {
      Header: "Proto / Série",
      accessor: "boatType",
    },
    {
      id: "completed",
      Header: () => (
        <div
          style={{
            textAlign: "right",
          }}
        >
          Formulaire complété
        </div>
      ),
      accessor: (v) => (v.completed ? "Oui" : "Non"),
    },
  ]

  if (sheets.length === 0) {
    return (
      <main>
        <p style={{ textAlign: "center", paddingTop: "30%" }}>
          Aucun formulaire dans la base de données
        </p>
      </main>
    )
  }

  return (
    <>
      {storedData}
      <Table
        tableColumns={columns}
        tableData={sheets}
        onRowClickFn={(id) => router.push(`/Reader?boatId=${id}`)}
      />
    </>
  )
}
