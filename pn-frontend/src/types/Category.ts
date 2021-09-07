import { BookmarkSimple } from "./Bookmark";

export interface Category extends CategorySimple {
  bookmarks: BookmarkSimple[]
}

export interface CategorySimple {
  id: number,
  name: string,
  count: number
}
