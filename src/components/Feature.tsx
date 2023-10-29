import React from 'react'
import FeatureCard from './FeatureCard';

const data = [
  {
    img:"/icon.png",
    title:"Naturally Derived",
    desc:"Natural and organic beauty product",
  },
  {
    img:"/icon1.png",
    title:"Free Shipping",
    desc:"Free shipping of all order over $99",
  },
  {
    img:"/icon2.png",
    title:"Secure Payment",
    desc:"Fully protected when paying online",
  },

];

const Feature = () => {
  return (
    <div className='container pt-16'>
      <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
        {data.map((item) => <FeatureCard key={item.title} img={item.img} desc={item.desc}>
        </FeatureCard>  
        )}
      </div>
    </div>
  )
}

export default Feature