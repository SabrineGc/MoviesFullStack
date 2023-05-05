import React, {useState} from 'react';
import "../App.css"

function EditMovie({e,update,deleteMovie}) {
    const [detail,setDetail]=useState(false)
    const [id,setId]=useState(e.id)
    const [title,setTitle]=useState(e.title)
    const [image,setImage]=useState(e.image)
    const [description,setDescription]=useState(e.description)
    const [genre,setGenre]=useState(e.genre)
    const [year,setYear]=useState(e.year)
    const [director,setDirector]=useState(e.director)
    const [language,setLanguage]=useState(e.language)
    const [length,setLength]=useState(e["length"])
    const [rate,setRate]=useState(e.rate)
    const handleClick=()=>{
      setDetail(!detail)
    }
    const movie={
        id:id,title:title,image:image,description:description,genre:genre,year:year,director:director,language:language,length:length,rate:rate
    }

    const handleUpdate = (id) => {
        update(id, movie);
        setDetail(false);
      };
    const handleDelete=(id)=>{
        deleteMovie(e.id)
    }

    return (
        <div>
            <button onClick={handleClick}>Update</button>
             {detail ? <div className="form" >
              <>
              <div>
    <label>Title</label>
    <input placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
    </div>
<div>
    <label>Picture</label>
<input placeholder='image' value={image} onChange={(e)=>setImage(e.target.value)} />
</div>
<div>
    <label>Description</label>
<input placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
</div>
<div value={image} className="form-group">
                    <label for="genre">Movie Gender</label>
                    <select className="form-control" name="genre" onChange={(e)=>setGenre(e.target.value)}>
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
<input placeholder='year' value={year} onChange={(e)=>setYear(e.target.value)} />
</div>
<div>
 <label>Director</label>
<input placeholder='director' value={director} onChange={(e)=>setDirector(e.target.value)} />
</div>
<div>
 <label>Language</label>
<input placeholder='language' value={language} onChange={(e)=>setLanguage(e.target.value)} />
</div>
<div>
 <label>Length of the movie</label>
<input placeholder='length' value={length} onChange={(e)=>setLength(e.target.value)} />
</div>
<div>
 <label>IMDB Rate</label>
<input type="number" placeholder='rate' value={rate} onChange={(e)=>setRate(e.target.value)} />
</div>
               <button onClick={()=>{handleUpdate(e.id);window.location.reload(true)}  }>Submit</button>
            </>
            </div>
            :<div></div>}
            <button onClick={() => {handleDelete(id);window.location.reload(true)}}>DELETE</button>
        </div>
    );
}

export default EditMovie;

