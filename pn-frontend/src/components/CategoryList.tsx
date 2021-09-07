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
      {categories.map(
        category => 
          <Badge key={category.id} bg='primary' className='m-2'>{category.name}</Badge>
      )}
    </div>
  )
}

export default CategoryList
