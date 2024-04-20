import { useState } from 'react'
import { Client, Databases, ID } from "appwrite";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { About, Blogs, Contact, Home, Layout } from './components';

function App() {
  // const client = new Client();

  // client
  //   .setEndpoint('https://cloud.appwrite.io/v1')
  //   .setProject('662335cc12f41d0034f2');

  // const databases = new Databases(client);

  // let blogsArray = [
  //   {
  //     "title": "Learn JavaScript",
  //     "content": "<p>Welcome to the world of JavaScript! This blog will guide you through the basics and advanced concepts of JavaScript programming.</p>",
  //     "slug": "learn-javascript",
  //     "views": 1000,
  //     "author": "John Doe",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Mastering React",
  //     "content": "<p>Explore the power of React.js and learn how to build interactive user interfaces with ease.</p>",
  //     "slug": "mastering-react",
  //     "views": 1500,
  //     "author": "Jane Smith",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Python for Data Science",
  //     "content": "<p>Dive into the world of data science with Python and discover its applications in analyzing and visualizing data.</p>",
  //     "slug": "python-data-science",
  //     "views": 1200,
  //     "author": "Michael Brown",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Web Development Fundamentals",
  //     "content": "<p>Learn the essential skills and technologies needed to become a proficient web developer.</p>",
  //     "slug": "web-development-fundamentals",
  //     "views": 900,
  //     "author": "Emily Johnson",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Getting Started with Node.js",
  //     "content": "<p>Get started with Node.js and build scalable, server-side applications using JavaScript.</p>",
  //     "slug": "getting-started-nodejs",
  //     "views": 800,
  //     "author": "Mark Wilson",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Machine Learning Basics",
  //     "content": "<p>Discover the basics of machine learning and its applications in various fields.</p>",
  //     "slug": "machine-learning-basics",
  //     "views": 1100,
  //     "author": "Anna Lee",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Introduction to Blockchain",
  //     "content": "<p>Learn about blockchain technology and its impact on industries such as finance, healthcare, and supply chain.</p>",
  //     "slug": "introduction-blockchain",
  //     "views": 1300,
  //     "author": "David Miller",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Responsive Web Design",
  //     "content": "<p>Explore the principles of responsive web design and create websites that work seamlessly across devices.</p>",
  //     "slug": "responsive-web-design",
  //     "views": 1000,
  //     "author": "Jessica Thompson",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Deep Learning Applications",
  //     "content": "<p>Discover real-world applications of deep learning in areas such as image recognition, natural language processing, and autonomous vehicles.</p>",
  //     "slug": "deep-learning-applications",
  //     "views": 1400,
  //     "author": "Daniel White",
  //     "isPublished": true
  //   },
  //   {
  //     "title": "Cybersecurity Essentials",
  //     "content": "<p>Explore the essential concepts of cybersecurity and learn how to protect systems and data from cyber threats.</p>",
  //     "slug": "cybersecurity-essentials",
  //     "views": 950,
  //     "author": "Sophia Martinez",
  //     "isPublished": true
  //   }
  // ]

  // for (let index = 0; index < blogsArray.length; index++) {
  //   const element = blogsArray[index];

  //   const promise = databases.createDocument(
  //     '66233b13b996516b9454',
  //     '66233b2083514e21bafd',
  //     ID.unique(),
  //     element, 
  //   );

  //   promise.then(function (response) {
  //     console.log(response);
  //   }, function (error) {
  //     console.log(error);
  //   });
  // }

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />}  />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />
        <Route path='/blogs' element={<Blogs />}  />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
