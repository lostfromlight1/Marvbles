import { Link } from "react-router-dom"
import { site } from "../../content"

const links = [{ label: "Top", to: "/" }, ...site.nav]

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{site.footerNote}</p>
      <p>© {new Date().getFullYear()} {site.name}</p>
      <a className="top-link" href="#content">
        Top
      </a>
    </footer>
  )
}
