import { Link, useParams } from "react-router-dom"
import { animationBySlug } from "../content"
import { usePageTitle } from "../ui/title"

export function AnimationDetail() {
  const { slug = "" } = useParams()
  const piece = animationBySlug(slug)
  usePageTitle(piece?.title ?? "Not found")

  if (!piece) {
    return (
      <>
        <h1 className="page-title">Not found</h1>
        <Link className="section-link" to="/animation">
          Back to Animation
        </Link>
      </>
    )
  }

  return (
    <>
      <h1 className="page-title">{piece.dummy ? "[Dummy] " : ""}{piece.title}</h1>
      <ul className="page-list">
        {piece.credits.map((credit) => (
          <li key={`${credit.role}-${credit.name}`}>
            <span>
              {credit.role}: {credit.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="youtube-slot">
        {piece.youtubeId ? "YouTube embed is ready for a later pass." : "No YouTube id yet."}
      </div>
    </>
  )
}
