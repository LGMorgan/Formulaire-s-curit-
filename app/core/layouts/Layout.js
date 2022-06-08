import { Head, BlitzLayout, useMutation, useRouter } from "blitz"
import logout from "app/auth/mutations/logout"

const Layout = ({ title, children }) => {
  const [logoutMutation] = useMutation(logout)
  return (
    <>
      <Head>
        <title>{title || "classemini"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}
Layout.authenticate = { redirectTo: "/" }
export default Layout
