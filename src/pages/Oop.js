import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/Data'
import { useParams } from "react-router";

const Oop = () => {
    const {blogs} = useParams();
    const singleBlog = data.find((items) => items.id === blogs);
    const {image, title,text} = singleBlog;
  return (
    <div>
        <Link to={'/blog'} >back</Link>
        <h2>
            <img src={image} alt='nothing yet' 
            style={{
                height:'80px',
                width:'80px',
                borderRadius:'40px',
                resize:'inline',
            }}
            />
            <div>{title}</div>
            <div>{text}</div>
        </h2>
    </div>
  )
}

export default Oop