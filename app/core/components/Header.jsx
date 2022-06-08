import styles from "app/style/header.module.css"
import logout from "app/auth/mutations/logout"
import { useMutation, useRouter } from "blitz"
import { Button, Burger, Drawer } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Children, isValidElement, cloneElement, useState } from "react"

export const Header = ({ children, displayBackButton = false }) => {
  const [logoutMutation] = useMutation(logout)
  const router = useRouter()
  const width = children.length > 1 ? "750px" : "600px"
  console.log(width)
  const tabletScreen = useMediaQuery(`(min-width: ${width}) and (max-width: 900px)`)
  const phoneScreen = useMediaQuery(`(max-width: ${width})`)
  const [opened, setOpened] = useState(false)

  console.log({ tabletScreen, phoneScreen })

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (isValidElement(child)) {
      let clone = cloneElement(child, { compact: tabletScreen })
      return clone
    }
    return child
  })

  if (displayBackButton && !phoneScreen) {
    childrenWithProps.push(
      cloneElement(<Button onClick={() => router.back()}>Retour</Button>, {
        compact: tabletScreen,
      })
    )
  }

  console.log(children.length)

  if (phoneScreen) {
    return (
      <header className={styles.header}>
        <p>Formulaire</p>
        <div className={styles.childrenDiv}>
          <Button compact onClick={() => router.back()}>
            Retour
          </Button>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={"title"} />
          <Drawer
            position="right"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Vue d'ensemble"
            padding="xl"
            overlayOpacity={0.55}
            overlayBlur={3}
          >
            <div className={styles.drawer}>
              {childrenWithProps}
              <div />
              <Button
                onClick={async () => {
                  await logoutMutation()
                }}
                compact={tabletScreen}
              >
                Déconnexion
              </Button>
            </div>
          </Drawer>
        </div>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <p>Formulaire</p>
      <div className={styles.childrenDiv}>
        {childrenWithProps}

        {" | "}
        <Button
          onClick={async () => {
            await logoutMutation()
          }}
          compact={tabletScreen}
        >
          Déconnexion
        </Button>
      </div>
    </header>
  )
}
