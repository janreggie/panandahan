import { Alert, Badge } from "react-bootstrap";
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
      {tags.map(
        tag => 
          <Badge key={tag.id} bg='primary' className='m-2'>{tag.name}</Badge>
      )}
    </div>
  )
}

export default TagList
