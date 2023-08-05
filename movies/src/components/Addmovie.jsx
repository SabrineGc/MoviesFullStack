import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "../App.css"

function AddMovie() {
    const [show,setShow]=useState(false)
    const [id,setId]=useState("")
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")
    const [genre,setGenre]=useState("")
    const [year,setYear]=useState("")
    const [director,setDirector]=useState("")
    const [language,setLanguage]=useState("")
    const [length,setLength]=useState("")
    const [rate,setRate]=useState("")
    const navigate = useNavigate();

    const handleShow=()=>{
        setShow(!show)
    }
    const movie={
        id:id,title:title,image:image,description:description,genre:genre,year:year,director:director,language:language,length:length,rate:rate
    }
    const handleAdd=()=>{
        console.log("u can post")
        axios.post("http://localhost:3001/api/movies/add",movie)
        .then((res)=>{
            alert("Thank you for adding a movie");
            navigate('/home')
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div> 
            
<button onClick={handleShow}>Add new Movie</button>
{show ? <div className="form" >
<div className="contain" >
<div>
    <label>Movie id</label>
    <input placeholder='id' onChange={(e)=>setId(e.target.value)} />
    </div>
<div></div>
<div>
    <label>Title</label>
    <input placeholder='title' onChange={(e)=>setTitle(e.target.value)} />
    </div>
<div>
    <label>Picture</label>
<input placeholder='image' onChange={(e)=>setImage(e.target.value)} />
</div>
<div>
    <label>Description</label>
<input placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
</div>
<div className="form-group">
                    <label for="gender">Movie Gender</label>
                    <select className="form-control" name="gender" onChange={(e)=>setGenre(e.target.value)}>
                        <option>Horror</option>
                        <option>Romantic</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Action</option>
                        <option>Fantasy</option>
                        <option>Historical</option>
                    </select>
</div>
<div>
 <label>Release Year</label>
<input placeholder='year' onChange={(e)=>setYear(e.target.value)} />
</div>
<div>
 <label>Director</label>
<input placeholder='director' onChange={(e)=>setDirector(e.target.value)} />
</div>
<div>
 <label>Language</label>
<input placeholder='language' onChange={(e)=>setLanguage(e.target.value)} />
</div>
<div>
 <label>Length of the movie</label>
<input placeholder='length' onChange={(e)=>setLength(e.target.value)} />
</div>
<div>
 <label>IMDB Rate</label>
<input type="number" placeholder='rate' onChange={(e)=>setRate(e.target.value)} />
</div>
<button onClick={handleAdd}>Submit</button>
</div>
</div>
:<div></div> 
}
        </div>
    );
}

export default AddMovie;
