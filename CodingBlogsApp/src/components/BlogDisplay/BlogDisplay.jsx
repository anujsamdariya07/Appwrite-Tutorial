import React from 'react';
import { Link } from 'react-router-dom';

const BlogDisplay = ({ title, author, metaDesc, slug }) => {
    return (
        <div className="bg-gray-900 shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">Author: {author}</p>
            <p className="text-gray-700">{metaDesc}</p>
            <Link to={`/blogs/${slug}`} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 cursor-pointer">Read More</Link>
        </div>
    );
}

export default BlogDisplay;
