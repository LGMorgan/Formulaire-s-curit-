import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getSheets from "app/sheets/queries/getSheets"
const ITEMS_PER_PAGE = 100
export const SheetsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ sheets, hasMore }] = usePaginatedQuery(getSheets, {
    orderBy: {
      id: "asc",
    },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () =>
    router.push({
      query: {
        page: page - 1,
      },
    })

  const goToNextPage = () =>
    router.push({
      query: {
        page: page + 1,
      },
    })

  return (
    <div>
      <ul>
        {sheets.map((sheet) => (
          <li key={sheet.id}>
            <Link
              href={Routes.ShowSheetPage({
                sheetId: sheet.id,
              })}
            >
              <a>{sheet.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const SheetsPage = () => {
  return (
    <>
      <Head>
        <title>Sheets</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewSheetPage()}>
            <a>Create Sheet</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <SheetsList />
        </Suspense>
      </div>
    </>
  )
}

SheetsPage.authenticate = true

SheetsPage.getLayout = (page) => <Layout>{page}</Layout>

export default SheetsPage
