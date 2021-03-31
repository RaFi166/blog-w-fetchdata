import React from 'react';

const Navbar = () =>{
    return (

        <nav className="navbar">
            <h1>Rafi Blog</h1>
            <div className='contents'>
                <a className='linkshome' href="/">Home</a>
                <a className='links' href="/create">Blog</a>
                

            </div>
        </nav>

    )
}

export default Navbar;