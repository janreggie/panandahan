import { CategorySimple } from "./Category";
import { TagSimple } from "./Tag";

export interface Bookmark extends BookmarkSimple {
  categories: CategorySimple[],
  tags: TagSimple[],
}

export interface BookmarkSimple {
  id: number,
  title: string,
  caption?: string,
  link: string,
}
