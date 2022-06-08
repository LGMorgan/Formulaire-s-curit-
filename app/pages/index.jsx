import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, useRouter } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { Button } from "@mantine/core"
import logo from "public/logo.png"
import styles from "app/style/entry.module.css"

import { LoginForm } from "app/auth/components/LoginForm"

const UserInfo = () => {
  const router = useRouter()
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <Button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next) : "/"
          router.push(next)
        }}
      />
    )
  }
}

const Home = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="blitzjs" width={200} objectFit={"contain"} />
      <div className={styles.content} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.redirectAuthenticatedTo = "/Dashboard"

export default Home
