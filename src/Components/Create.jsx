import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState(' ');
    const [about, setAbout] = useState(' ');
    const[author, setAuthor] = useState('Mezbah'); 

    function handleSubmit(e){
        e.preventDefault();
        const allData = { title, about, author };
        // console.log(allData);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(allData)
        })
        .then(()=>{
            console.log('new data added');
        })
        ;
    }
    
    return (
        <div className="create-com">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <label>Blog Title:</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
                </div>

                <div className="about">
                    <label>About the Blog:</label>
                    <input value={about} onChange={(e) => {
                        setAbout(e.target.value);
                    }}
                        type="text" required></input>
                </div>

                <div className="author">
                    <label>Author:</label>
                    <select 
                    value={ author }
                    onChange={ (e)=>{
                        setAuthor(e.target.value);
                    } }                    
                    required>
                        <option value="Mezbah">Mezbah</option>
                        <option value="Meftah">Meftah</option>
                    </select>
                </div>

                <div className="btn-submit">
                    <button>
                        SUBMIT
                   </button>
                    {/* <p>{title}</p>
                    <p> {about}</p>
                    <p>{ author }</p> */}

                </div>

            </form>
        </div>

    )
}
export default Create;
