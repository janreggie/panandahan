import { BACKEND_URL } from "../config"
import { Tag } from "../types"

function getTags() : Promise<Tag[]> {
  return fetch(new URL('/api/tags', BACKEND_URL).href)
    .then(response => response.json())
    .then(data => data as Tag[])
}

export default getTags
