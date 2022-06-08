import { BlitzPage, useRouter, Routes, Link } from "blitz"
import Layout from "app/core/layouts/Layout"

import { Button } from "@mantine/core"

import { List } from "app/core/components/List"
import { Header } from "app/core/components/Header"
import { Suspense, useEffect, useState } from "react"

const Dashboard = () => {
  console.log({ Routes })
  const router = useRouter()

  return (
    <div>
      <Header>
        <Button onClick={() => router.push("/PrefillPage")}>Nouveau formulaire</Button>
        <Button disabled onClick={async () => {}}>
          Admin : modifier le formulaire
        </Button>
      </Header>
      <main>
        <Suspense fallback={<main>Chargement des listes</main>}>
          <List />
        </Suspense>
      </main>
    </div>
  )
}

Dashboard.getLayout = (page) => <Layout title="Tableau de bord">{page}</Layout>

export default Dashboard

/*

        <Link href={Routes.QuestionsPage()}>
          <a>ques</a>
        </Link>
        */
