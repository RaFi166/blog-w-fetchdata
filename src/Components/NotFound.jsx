import React, { Link } from 'react-router-dom';
const NotFound = ( ) => {
    return (
        <div className="notfound-com">
            <h2>Sorry Not Found ☹️</h2>
            <Link to='/'>Go Homepage...</Link>
        </div>
    )
}

export default NotFound;