import React from 'react'
import data from '../data/Data'
import {Link} from 'react-router-dom'


function Blog() {
  return (
    <div className='p-10'>
         <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white "> My Blog</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've been through elot of challanges espacially being a self thought learner
               and so in this blog i will be sharing some important concepts of some programming language and a walkthrough of 
               some solutions of a my previous applications i built
              
            </p>
           
          </div>
          <div className="lg:flex gap-10">

            {data.map((items)=>(
            
            <div key={items.id} className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <image src={items.image} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
               {items.title}
              </h3>
              <p className="py-2">
                {items.text}
              </p>
                <Link to={`/blog/${items.blogs}`} > Read more </Link>
            </div>
           
            ))}

          
        
          </div>
        </section>

    </div>
  )
}

export default Blog