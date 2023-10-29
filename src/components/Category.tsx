import React from 'react'
import { Whisper } from 'next/font/google';
import CategoryCard from "@/components/CategoryCard";

const whisper = Whisper({subsets: ["latin"], weight: ["400"]});
const data = [
  {
    img:"/category1.jpg",
    type: "Nail & Wax",
    quantity: "(4 Items)",
  },
  {
    img:"/category2.jpg",
    type: "Makeup",
    quantity: "(8 Items)",
  },
  {
    img:"/category3.jpg",
    type: "Skincare",
    quantity: "(6 Items)",
  },
];
const Category = () => {
  return (
    <div className=' py-16 mt-32 justify-center'>
      <div className="container text-center text-black">
        <h3 className={`${whisper.className} text-[40px]`}>Favorite Category</h3>
        <h2 className='text-[40px] font-medium'> Top Category</h2>

<div className="flex justify-center gap-4 md:gap-16 pt-8">
 {data.map((item) => (
  <CategoryCard key={item.type} img={item.img} type={item.type} quantity={item.quantity}></CategoryCard>
 ))}
</div>
      </div>
    </div>
  )
}

export default Category