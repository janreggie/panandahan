import { Category } from "../types";

function CategoryList({ categories } : { categories : Category[] | Error }) {

  return (
    <div id='categories'>
      List of categories here
    </div>
  )
}

export default CategoryList
