import { useEffect, useMemo, useState, Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import { usePaginatedQuery, useRouter, useRouterQuery, useQuery } from "blitz"
import getSheets from "app/sheets/queries/getSheets"
import { Button } from "@mantine/core"
import { Header } from "app/core/components/Header"
import getSheet from "app/sheets/queries/getSheet"
import { ReaderTable } from "app/core/components/Table/ReaderTable"

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value)
    }
  }
  return value
}

const WrappedQuery = () => {
  const routerQuery = useRouterQuery()
  const [query, { isSuccess }] = useQuery(
    getSheet,
    { boatId: parseInt(routerQuery.boatId) },
    { cacheTime: 100 }
  )
  const sheet = useMemo(() => JSON.parse(query.form, reviver), [])

  return <ReaderTable sheet={sheet} />
}

export const Reader = () => {
  const routerQuery = useRouterQuery()
  const router = useRouter()
  return (
    <div>
      <Header displayBackButton>
        <Button onClick={() => router.push(`/MainForm?boatId=${routerQuery.boatId}`)}>
          Editer
        </Button>
      </Header>
      <main>
        <Suspense fallback={<p>Chargement</p>}>
          <WrappedQuery />
        </Suspense>
      </main>
    </div>
  )
}

Reader.getLayout = (page) => <Layout title="Consuler">{page}</Layout>

export default Reader
