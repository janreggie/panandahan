import { useEffect, useState } from 'react';
import './App.css';
import { BookmarkList, CategoryList, TagList } from './components';
import { getBookmarks, getCategories, getTags } from './requests'
import { Bookmark, Category, Tag } from './types';

function App() {
  const [ bookmarks, setBookmarks ] = useState<Bookmark[]|Error>([])
  const [ categories, setCategories ] = useState<Category[]|Error>([])
  const [ tags, setTags ] = useState<Tag[]|Error>([])

  useEffect(() => {
    getBookmarks()
      .then(result => setBookmarks(result))
      .catch(err => setBookmarks(err as Error))
    getCategories()
      .then(result => setCategories(result))
      .catch(err => setCategories(err as Error))
    getTags()
      .then(result => setTags(result))
      .catch(err => setTags(err as Error))
  }, [])

  return (
    <div className='App'>
      <h1>Bookmarks</h1>
      <BookmarkList bookmarks={bookmarks} />
      <h1>Categories</h1>
      <CategoryList categories={categories} />
      <h1>Tags</h1>
      <TagList tags={tags} />
    </div>
  );
}

export default App;
