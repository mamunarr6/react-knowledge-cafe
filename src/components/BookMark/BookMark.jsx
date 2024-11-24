import PropTypes from "prop-types";


const BookMark = ({ bookmark }) => {
    return (
        <div className="bg-white py-2 px-4 rounded mb-4">
            <h2>{bookmark.title}</h2>
        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.object
}

export default BookMark;