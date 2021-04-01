import React, { useEffect, useState } from 'react';
import OutputLists from './OutputLists';


function Home(){

    const[blog, setBlog] = useState(null);
    const [name, setName] = useState('rafi');
    const [isPending, setPending] = useState(true);
    const[message, setMessage] = useState('yeah its working xD');


    useEffect(function(){
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
        .then((res)=>{
            if(!res.ok){
                throw Error ("not found 😥");
            }
           return res.json();
        })
        .then((data)=>{
            setBlog(data);
            setPending(false);
        })
        .catch((error)=>{
            console.log(error.message);
        })
        }, 1000);
    });

    // useEffect(()=> {
    //     console.log('its working now xd');
    // });

    return (
        <div>
        {isPending && <h2>Loading...</h2> }
        { blog && <OutputLists allLists={ blog } />}
        { blog && <OutputLists allLists={ blog.filter((log)=> log.author === 'mario' ) } />}
        <h1>{ name }</h1>
        <button onClick={ ()=> setName('bappy') }>Change Name</button>
        </div>
    );
}
export default Home;