import { Client, Databases, Query } from "appwrite";
import React, { useState } from 'react'
import BlogDisplay from "../BlogDisplay/BlogDisplay";

function Home() {
  const [blogs, setBlogs] = useState([])

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("662335cc12f41d0034f2")

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    '66233b13b996516b9454',
    '66233b2083514e21bafd',
    []
  );

  promise.then(function (response) {
    console.log(response);
    setBlogs(response.documents)
  }, function (error) {
    console.log(error);
  });

  function extractFirst100Chars(htmlString) {
    // Create a temporary div element
    const tempDiv = document.createElement('div');

    // Set the HTML content of the div
    tempDiv.innerHTML = htmlString;

    // Get the text content from the div
    let textContent = tempDiv.textContent || tempDiv.innerText || '';

    // Trim the text content to 100 characters
    textContent = textContent.trim().slice(0, 100);

    // Add "..." if the original text content was longer than 100 characters
    if (textContent.length < tempDiv.textContent.length) {
      textContent += '...';
    }

    // Return the extracted text content
    return textContent;
  }


  return (
    <div className='h-auto'>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
        <div className="">
          {blogs.length === 0 && 'Loading...'}
          {blogs.map((blog, index) => (
            <BlogDisplay key={index} title={blog.title} author={blog.author} metaDesc={extractFirst100Chars(blog.content)} slug={blog.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home