import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getSheet from "app/sheets/queries/getSheet"
import deleteSheet from "app/sheets/mutations/deleteSheet"
export const Sheet = () => {
  const router = useRouter()
  const sheetId = useParam("sheetId", "number")
  const [deleteSheetMutation] = useMutation(deleteSheet)
  const [sheet] = useQuery(getSheet, {
    id: sheetId,
  })
  return (
    <>
      <Head>
        <title>Sheet {sheet.id}</title>
      </Head>

      <div>
        <h1>Sheet {sheet.id}</h1>
        <pre>{JSON.stringify(sheet, null, 2)}</pre>

        <Link
          href={Routes.EditSheetPage({
            sheetId: sheet.id,
          })}
        >
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteSheetMutation({
                id: sheet.id,
              })
              router.push(Routes.SheetsPage())
            }
          }}
          style={{
            marginLeft: "0.5rem",
          }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowSheetPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.SheetsPage()}>
          <a>Sheets</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Sheet />
      </Suspense>
    </div>
  )
}

ShowSheetPage.authenticate = true

ShowSheetPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowSheetPage
