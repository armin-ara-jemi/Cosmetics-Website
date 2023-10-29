import React from 'react'
import BlogCard from './BlogCard';

const data = [
  {
    img:"/post1.jpg",
    title: "Loren ipsum dolor set",
    date: "Oct 25, 2023",
    comment:8,
  },
  {
    img:"/post2.jpg",
    title: "Loren ipsum dolor set",
    date: "Oct 22, 2023",
    comment:4,
  },
  {
    img:"/post3.jpg",
    title: "Loren ipsum dolor set",
    date: "Oct 23, 2023",
    comment:6,
  },
];

const BlogSection = () => {
  return (
    <div className='container pt-32'>
      <h2 className='font-bold text-2xl'> Latest News</h2>
        <p className='text-gray-500'> Present pots in a best way to highlight interesting moments of your blogs</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
       {data.map((item) => <BlogCard key={item.date} img={item.img} title={item.title} date={item.date} comment={item.comment}/>
        )}
      </div>
    </div>
  )
}

export default BlogSection