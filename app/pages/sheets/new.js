import { Link, useRouter, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createSheet from "app/sheets/mutations/createSheet"
import { SheetForm, FORM_ERROR } from "app/sheets/components/SheetForm"

const NewSheetPage = () => {
  const router = useRouter()
  const [createSheetMutation] = useMutation(createSheet)
  return (
    <div>
      <h1>Create New Sheet</h1>

      <SheetForm
        submitText="Create Sheet" // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateSheet}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const sheet = await createSheetMutation(values)
            router.push(
              Routes.ShowSheetPage({
                sheetId: sheet.id,
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

      <p>
        <Link href={Routes.SheetsPage()}>
          <a>Sheets</a>
        </Link>
      </p>
    </div>
  )
}

NewSheetPage.authenticate = true

NewSheetPage.getLayout = (page) => <Layout title={"Create New Sheet"}>{page}</Layout>

export default NewSheetPage
