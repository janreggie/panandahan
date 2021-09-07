import { BookmarkSimple } from "./Bookmark";

export interface Tag extends TagSimple {
  bookmarks: BookmarkSimple[]
}

export interface TagSimple {
  id: number,
  name: string,
  count: number
}
