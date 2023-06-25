
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { useParams,useLocation } from 'react-router-dom';


const Blog=()=>{
    const {title} = useParams();
    
const location=useLocation();
    // console.log(location);

    
    
    return (
     <div>
     <h1>  { title } page</h1>
     <p>{location.state.body.slice(0,500)}</p>
     <p>{location.state.body.slice(501,1000)}</p>
    </div>
    )
}

export default Blog;
