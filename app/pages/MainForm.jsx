import { usePaginatedQuery, useRouterQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SectionsData } from "app/core/components/MainForm/SectionsData"
import { Suspense, useEffect, useState } from "react"
import getSections from "app/sections/queries/getSections"
import { useGetSheet } from "app/core/hooks/useGetSheet"

const QueryWrapper = ({ sections, boatId }) => {
  const sheet = useGetSheet(boatId)

  if (sheet) {
    return <SectionsData sections={sections} sheet={sheet} edit boatId={boatId} />
  } else {
    return <SectionsData sections={sections} sheet={[]} edit={false} boatId={boatId} />
  }
}

const SectionsWrapper = ({ boatId }) => {
  const [{ sections, hasMore }] = usePaginatedQuery(getSections, {
    // TODO : Set an Index property so that use can rearrage sections
    orderBy: { id: "asc" },
  })
  const [isEditing, setIsEditing] = useState(true)

  if (sections) {
    return (
      <Suspense fallback={<p>Chargement Section Wrapper ...</p>}>
        <QueryWrapper sections={sections} boatId={boatId} />
      </Suspense>
    )
  } else {
    return <p>Pas de sections</p>
  }
}

const MainForm = () => {
  const routerQuery = useRouterQuery()

  return (
    <main>
      <Suspense fallback={<p>Chargement MainForm...</p>}>
        <SectionsWrapper boatId={routerQuery.boatId} />
      </Suspense>
    </main>
  )
}

MainForm.getLayout = (page) => <Layout title="Formulaire">{page}</Layout>

export default MainForm
