import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    // console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl font-semibold text-center my-2">Blogs: {blogs.length}</h2>
            {blogs.map(blog =>
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>
            )}
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;