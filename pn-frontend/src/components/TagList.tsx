import { Tag } from "../types";

function TagList({ tags } : { tags: Tag[] | Error }) {

  return (
    <div id='tags'>
      List of tags here
    </div>
  )
}

export default TagList
