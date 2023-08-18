import React, { useState } from 'react';
import "../App.css"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField, MenuItem, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

function EditMovie({ data, open, handleClose, handleEditP }) {
  const [id, setId] = useState(data.id);
  const [title, setTitle] = useState(data.title);
  const [image, setImage] = useState(data.image);
  const [description, setDescription] = useState(data.description);
  const [genre, setGenre] = useState(data.genre);
  const [year, setYear] = useState(data.year);
  const [director, setDirector] = useState(data.director);
  const [language, setLanguage] = useState(data.language);
  const [length, setLength] = useState(data["length"]);
  const [rate, setRate] = useState(data.rate);

  console.log(data, "data");

  const handleConfirm = () => {
    const update = {
      id: id,
      title: title,
      image: image,
      description: description,
      genre: genre,
      year: year,
      director: director,
      language: language,
      length: length,
      rate: rate
    };

    axios
      .put(`http://localhost:3001/api/movies/update/${id}`, update)
      .then((response) => {
        handleEditP(id, update);
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating movie:", error);
        alert("Failed to update the movie. Please try again later.");
      });
  };

    return (
            <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{"Edit Product"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              label="title"
              size="small"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              label="description"
              size="small"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              fullWidth
             />
          </Grid>
          <Grid item xs={12}>
          <TextField
            required
            id="language"
            label="language"
            size="small"
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            fullWidth
          />
        </Grid>
           <Grid item xs={12}>
           <TextField
             required
             id="director"
             label="director"
             size="small"
             value={director}
             onChange={(e)=>setDirector(e.target.value)}
             fullWidth
           />
         </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="imageUrl"
              label="Image URL"
              size="small"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="length"
              label="length"
              type="number"
              size="small"
              value={length}
              onChange={(e)=>setLength(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="year"
              label="year"
              type="year"
              size="small"
              value={year}
              onChange={(e)=>setYear(e.target.value)}
              fullWidth
            />
               <Grid item xs={12}>
            <TextField
              required
              id="rate"
              label="rate"
              type="number"
              size="small"
              value={rate}
              onChange={(e)=>setRate(e.target.value)}
              fullWidth
            />
          </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={genre}
                onChange={(e)=>setGenre(e.target.value)}
              >
                <MenuItem value={"Horror"}>Horror</MenuItem>
                <MenuItem value={"Romantic"}>Romantic</MenuItem>
                <MenuItem value={"Comedy"}>Comedy</MenuItem>
                <MenuItem value={"Drama"}>Drama</MenuItem>
                <MenuItem value={"Action"}>Action</MenuItem>
                <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleConfirm} autoFocus variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
    );
}

export default EditMovie
