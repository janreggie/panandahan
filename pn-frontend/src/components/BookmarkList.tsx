import { Bookmark } from "../types";

function BookmarkList({ bookmarks } : { bookmarks : Bookmark[] | Error }) {
  return (
    <div id='bookmarks'>
      List of bookmarks here
    </div>
  )
}

export default BookmarkList
