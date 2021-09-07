import { BACKEND_URL } from "../config"
import { Category } from "../types"

function getCategories() : Promise<Category[]> {
  return fetch(new URL('/api/categories', BACKEND_URL).href)
    .then(response => response.json())
    .then(data => data as Category[])
}

export default getCategories
