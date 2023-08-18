import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Allmovies.css"
import OneMovie from '../OneMovie/OneMovies';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Stack,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import EditMovie from '../EditMovie';
import AddMovie from '../Addmovie';




function Allmovies() {
const [data,setData]=useState([])
const [open, setOpen] = React.useState(false);
const [openAdd, setOpenAdd] = React.useState(false);
const [searchTerm, setSearchTerm] = useState("");


useEffect(() => {
  const apiUrl = "http://localhost:3001/api/movies";
  axios
    .get(apiUrl)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

 const handleEdit = (movie) => {
    console.log(movie);
    setOpen(true);
    setData(data)

  };
  
const handleClose = () => {
      setOpen(false);
};
console.log(data,"from all");

const deleteMovie=(id)=>{
  if(window.confirm("are you sure that u want to delete it")){
  axios.delete(`http://localhost:3001/api/movies/delete/${id}`)
  .then((res)=>{
    setData(data.filter((p) => p.id !== id));
  })
  .catch((err)=>{
      console.log(err)
  })
}
}

  const handleEditP = (id, row) => {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...row };
    }
  };

  return (
    <div style={{ padding: 30 }}>
      {/* <Stack direction="row">


        <TextField
          size="small"
          label="Search by Title"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack> */}

      <Grid container spacing={5} mt={3} alignContent="center">
        {data.map((e) =>{ 
          console.log(e,"hehehehehe");
          return (
            <Grid item xs={12} sm={6} md={4} key={e.id}>
                <div>
                   <EditMovie
                        data={e}
                         open={open}
                         handleClose={handleClose}
                         handleEditP={handleEditP}
                          />
                          </div>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={e.title}
                  height="300px"
                  image={e.image}
                />
                 
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description}
                  </Typography>
                  <Stack direction="row">

                    <IconButton
                      aria-label="Add to Card"
                      color="error"
                      onClick={() => deleteMovie(e.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Edit"
                      color="success"
                      onClick={() => handleEdit(e)}
                    >
                      <EditIcon />
                   
                    </IconButton>
                  
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          )
          })}
          
      </Grid>
  
    </div>
  );
};

export default Allmovies;
