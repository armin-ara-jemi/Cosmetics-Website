import React from 'react'
import Image from 'next/image';

interface propsType{
  img:string;
  title:string;
  comment:number;
  date:string;
}

const BlogCard = ({img, title, comment,date}:propsType) => {
  return (
    <div>
      <Image className="rounded-lg hover:scale-105 transition-transform"
      src={img}
      width={250}
      height={250}
      alt="post"
      ></Image>
      <div className='text-accent font-medium'>
        <span>{date}</span>
        <span>  {comment}Comments</span>
      </div>
      <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  );
};

export default BlogCard