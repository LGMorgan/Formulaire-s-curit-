import styles from "app/style/footer.module.css"

import { Children, isValidElement, cloneElement, useState } from "react"

import { Button } from "@mantine/core"

export const Footer = ({ children }) => {
  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (isValidElement(child)) {
      let clone = cloneElement(child)
      return clone
    }
    return child
  })
  return <footer className={styles.footer}>{childrenWithProps}</footer>
}
