import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    const { cover, title, author_img, author, reading_time, posted_date, hashtags } = blog;
    // console.log(blog);
    return (
        <div className='mt-6 mb-14'>
            <div>
                <img src={cover} alt="" />
            </div>
            <div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-14' src={author_img} alt="" />
                        </div>
                        <div className='ml-10'>
                            <h4 className='text-2xl font-semibold'>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <p>{reading_time} min read </p>
                        <button onClick={() => handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <div>
                    <h2 className='text-6xl font-semibold my-6'>{title}</h2>
                </div>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx} className='mr-5'>
                            <a href="">#{hash}</a>
                        </span>)
                    }
                </p>
                <button className='text-blue-500 underline' onClick={() => handleMarkAsRead(reading_time)} >Mark as Read</button>
            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;