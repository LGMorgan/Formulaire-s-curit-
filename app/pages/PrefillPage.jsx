import { NumberInput, Button } from "@mantine/core"

import { Header } from "app/core/components/Header"

import Layout from "app/core/layouts/Layout"
import { BlitzPage, Link, useRouter, useMutation } from "blitz"
import logout from "app/auth/mutations/logout"
import { useEffect, useState } from "react"

import { IconArrowBigRightLine } from "@tabler/icons"

import styles from "app/style/prefillPage.module.css"

const PrefillPage = () => {
  const [boatId, setBoatId] = useState()
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)

  return (
    <>
      <Header>
        <Button onClick={() => router.back()}>Retour</Button>
      </Header>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log("dez", boatId)
            router.push(`/MainForm?boatId=${boatId}`)
          }}
        >
          <NumberInput
            hideControls
            placeholder="Numéro de bateau"
            value={boatId}
            onChange={(value) => {
              setBoatId(value)
            }}
          />
        </form>

        <Button
          disabled={!boatId}
          onClick={() => router.push(`/MainForm?boatId=${boatId}`)}
          rightIcon={<IconArrowBigRightLine />}
        >
          <a>Démarrer</a>
        </Button>
      </div>
    </>
  )
}

PrefillPage.getLayout = (page) => <Layout title="Tableau de bord">{page}</Layout>

export default PrefillPage
