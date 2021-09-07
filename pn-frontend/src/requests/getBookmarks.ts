import { BACKEND_URL } from "../config";
import { Bookmark } from "../types";

function getBookmarks() : Promise<Bookmark[]> {
  return fetch(new URL('/api/bookmarks', BACKEND_URL).href)
    .then(response => response.json())
    .then(data => data as Bookmark[])
}

export default getBookmarks
