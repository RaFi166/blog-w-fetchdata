import React, { useState,useEffect } from 'react';
const OutputLists = (props) => {

    const allList = props.allLists;
    return ( 
        <div className='home'>
        { allList.map( (blog)=>(
            <div className='blog' key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p>written by { blog.author} </p>
            </div>
            
        ) ) }
        </div>

    
     );
}
 
export default OutputLists;