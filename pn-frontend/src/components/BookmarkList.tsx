import { Alert, Badge, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Bookmark } from "../types";

function BookmarkList({ bookmarks } : { bookmarks : Bookmark[] | Error }) {

  if (bookmarks instanceof Error) {
    return <div id='bookmarks'>
      <Alert variant='danger' dismissible>
        <Alert.Heading>Error when getting bookmarks</Alert.Heading>
        <p>{bookmarks.message}</p>
      </Alert>
    </div>
  }

  console.log(bookmarks)

  return (
    <div id='bookmarks' className='row row-cols-1 row-cols-md-3 g-4'>
      {bookmarks.map(bookmark => <BookmarkCard key={bookmark.id} bookmark={bookmark} /> )}
    </div>
  )
}

function BookmarkCard({ bookmark } : { bookmark : Bookmark}) {
  return (
    <div className='col'>
    <Card>
      <Card.Body>
        <Card.Title><a href={bookmark.link} style={{color: 'inherit'}}>{bookmark.title}</a></Card.Title>
        <Card.Subtitle className='text-muted'>{bookmark.caption}</Card.Subtitle>
      </Card.Body>
      <ListGroup>
        <ListGroupItem>
          {bookmark.categories.map(
            cat => <Badge key={cat.id} bg='primary' className='m-2'>{cat.name} ({cat.count})</Badge>
          )}
        </ListGroupItem>
        <ListGroupItem>
          {bookmark.tags.map(
            tag => <Badge key={tag.id} bg='secondary' className='m-2'>{tag.name} ({tag.count})</Badge>
          )}
        </ListGroupItem>
      </ListGroup>
    </Card></div>
  )
}

export default BookmarkList
