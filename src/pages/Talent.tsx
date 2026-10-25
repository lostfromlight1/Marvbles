import { Link, useParams } from "react-router-dom"
import { releases, talentBySlug } from "../content"
import { usePageTitle } from "../ui/title"

export function Talent() {
  const { slug = "" } = useParams()
  const talent = talentBySlug(slug)
  usePageTitle(talent?.name ?? "Not found")

  if (!talent) {
    return (
      <>
        <h1 className="page-title">Not found</h1>
        <p className="lede">That singer is not in the roster.</p>
        <Link className="section-link" to="/vsinger">
          Back to Vsinger
        </Link>
      </>
    )
  }

  const songs = releases.filter((release) => release.talentSlugs.includes(talent.slug))

  return (
    <>
      <p className="meta">{talent.unit}</p>
      <h1 className="page-title">{talent.dummy ? "[Dummy] " : ""}{talent.name}</h1>
      <p className="lede">{talent.bio || "Bio not added yet."}</p>
      <h2 className="content-title">Songs</h2>
      {songs.length === 0 ? (
        <p className="empty">Nothing here yet.</p>
      ) : (
        <ul className="page-list">
          {songs.map((release) => (
            <li key={release.slug}>
              <Link to={`/vsinger/release/${release.slug}`}>
                {release.dummy ? "[Dummy] " : ""}
                {release.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
