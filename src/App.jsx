import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='container mx-auto md:flex'>
        <Blogs
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
