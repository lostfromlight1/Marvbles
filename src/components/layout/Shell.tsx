import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Shell() {
  return (
    <div className="shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
