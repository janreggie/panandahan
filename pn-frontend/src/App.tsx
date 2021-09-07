import { useEffect } from 'react';
import './App.css';
import { getBookmarks, getCategories, getTags } from './requests'

function App() {
  useEffect(() => {
    getBookmarks()
      .then(result => console.log(result))
      .catch(err => console.error(err))
    getCategories()
      .then(result => console.log(result))
      .catch(err => console.error(err))
    getTags()
      .then(result => console.log(result))
      .catch(err => console.error(err))
  })

  return (
    <div className='App'>
      Display bookmarks here.
    </div>
  );
}

export default App;
