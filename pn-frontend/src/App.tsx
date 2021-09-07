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
  })

  return (
    <div className='App'>
      <BookmarkList bookmarks={bookmarks} />
      <CategoryList categories={categories} />
      <TagList tags={tags} />
    </div>
  );
}

export default App;
