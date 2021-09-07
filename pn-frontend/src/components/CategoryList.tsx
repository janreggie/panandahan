import { Alert, Badge } from "react-bootstrap";
import { Category } from "../types";

function CategoryList({ categories } : { categories : Category[] | Error }) {

  if (categories instanceof Error) {
    return <div id='categories'>
      <Alert variant='danger' dismissible>
        <Alert.Heading>Error when getting categories</Alert.Heading>
        <p>{categories.message}</p>
      </Alert>
    </div>
  }

  return (
    <div id='categories'>
      {categories.map(cat => <DisplayCategory key={cat.id} category={cat} />)}
    </div>
  )
}

function DisplayCategory({ category } : { category : Category }) {
  return (
    <div>
      <h2>{category.name} ({category.count})</h2>
      <ul>
        {category.bookmarks.map(bm => <li key={bm.id}>{bm.title}</li>)}
      </ul>
    </div>
  )
}

export default CategoryList
