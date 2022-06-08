import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getSheet from "app/sheets/queries/getSheet"
import updateSheet from "app/sheets/mutations/updateSheet"
import { SheetForm, FORM_ERROR } from "app/sheets/components/SheetForm"
export const EditSheet = () => {
  const router = useRouter()
  const sheetId = useParam("sheetId", "number")
  const [sheet, { setQueryData }] = useQuery(
    getSheet,
    {
      id: sheetId,
    },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateSheetMutation] = useMutation(updateSheet)
  return (
    <>
      <Head>
        <title>Edit Sheet {sheet.id}</title>
      </Head>

      <div>
        <h1>Edit Sheet {sheet.id}</h1>
        <pre>{JSON.stringify(sheet, null, 2)}</pre>

        <SheetForm
          submitText="Update Sheet" // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateSheet}
          initialValues={sheet}
          onSubmit={async (values) => {
            try {
              const updated = await updateSheetMutation({
                id: sheet.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(
                Routes.ShowSheetPage({
                  sheetId: updated.id,
                })
              )
            } catch (error) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditSheetPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSheet />
      </Suspense>

      <p>
        <Link href={Routes.SheetsPage()}>
          <a>Sheets</a>
        </Link>
      </p>
    </div>
  )
}

EditSheetPage.authenticate = true

EditSheetPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditSheetPage
