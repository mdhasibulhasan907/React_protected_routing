/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

import { blogsData } from '../data'

import { Link } from 'react-router-dom';
const Blogs = () => {
   
  const [blogs,setBlogs]=useState(blogsData);
  const [BodyData,setBodydata]=useState("");
 

  



  const truncateString=(str,num)=>{
    if(str.length>num){
      return str.slice(0,num);

    }
    else{
      return str;

    }
  }
  
  return (
    <div>
        <h3>Blogs</h3>
        <section>
          {
            blogs.map((blog) => {
              const {id,title,body}=blog;
              return  <article key={id}>
                <h3>{title}</h3>
                <p>{truncateString(body,300)}</p>
               <Link to={title} state={{id,title,body}}>learn more</Link>
              </article>
             })
          }
        </section>
     
    </div>
  )
}

export default Blogs;