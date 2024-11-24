
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';

function BookMarks({ bookmarks, readingTime }) {
    return (
        <div className="md:w-1/3 bg-gray-200 rounded ml-5 p-5">
            <h2 className="text-2xl font-bold text-center mb-4">Reading Time : {readingTime} min</h2>
            <h2 className="text-2xl font-bold text-center mb-4">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
            }
        </div>
    )
}

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;
