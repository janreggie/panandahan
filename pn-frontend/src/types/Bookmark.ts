import { Category } from "./Category";
import { Tag } from "./Tag";

export interface Bookmark {
  id: number,
  link: string,
  caption?: string,
  title: string,
  categories: Category[],
  tags: Tag[],
}
