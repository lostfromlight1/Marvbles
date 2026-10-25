import { Link } from "react-router-dom"
import { animations } from "../content"
import { usePageTitle } from "../ui/title"

export function Animation() {
  usePageTitle("Animation")

  return (
    <>
      <h1 className="page-title">Animation</h1>
      <p className="lede">Reels stay silent until a YouTube id is added.</p>
      {animations.length === 0 ? (
        <p className="empty">Nothing here yet.</p>
      ) : (
        <ul className="page-list">
          {animations.map((piece) => (
            <li key={piece.slug}>
              <Link to={`/animation/${piece.slug}`}>
                {piece.dummy ? "[Dummy] " : ""}
                {piece.title}
              </Link>
              <span className="meta">{piece.credits.map((credit) => credit.name).join(", ")}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
