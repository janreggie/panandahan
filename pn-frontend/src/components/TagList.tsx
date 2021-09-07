import { Alert } from "react-bootstrap";
import { Tag } from "../types";

function TagList({ tags } : { tags: Tag[] | Error }) {

  if (tags instanceof Error) {
    return <div id='tags'>
      <Alert variant='danger' dismissible>
        <Alert.Heading>Error when getting tags</Alert.Heading>
        <p>{tags.message}</p>
      </Alert>
    </div>
  }

  return (
    <div id='tags'>
      {tags.map(tag => <DisplayTag key={tag.id} tag={tag} />)}
    </div>
  )
}

function DisplayTag({ tag } : { tag : Tag }) {
  return (
    <div>
      <h2>{tag.name} ({tag.count})</h2>
      <ul>
        {tag.bookmarks.map(bm => <li key={bm.id}>{bm.title}</li>)}
      </ul>
    </div>
  )
}

export default TagList
