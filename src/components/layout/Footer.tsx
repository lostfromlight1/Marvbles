import { Link } from "react-router-dom"
import { site } from "../../content"

const links = [{ label: "Top", to: "/" }, ...site.nav]

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="Footer">
        {links.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p>{site.footerNote}</p>
      <p>© {new Date().getFullYear()} {site.name}</p>
      <a className="top-link" href="#content">
        Top
      </a>
    </footer>
  )
}
