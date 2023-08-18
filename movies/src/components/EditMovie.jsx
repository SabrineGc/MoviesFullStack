import React, { useState,useEffect } from 'react';
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
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [language, setLanguage] = useState("");
  const [length, setLength] = useState("");

  console.log(data.title, "data");
  console.log(title,"title");
  useEffect(() => {
    console.log(data);
    setTitle(data?.title);
    setImage(data?.image);
    setDescription(data?.description);
    setGenre(data?.genre);
    setYear(data?.year);
    setDirector(data?.director);
    setLanguage(data?.language);
    setLength(data?.length);
  }, [data]);

  const handleConfirm = () => {
    const update = {
      title: title,
      image: image,
      description: description,
      genre: genre,
      year: year,
      director: director,
      language: language,
      length: length
    };

    axios
      .patch(`http://localhost:3001/api/movies/update/${data.id}`, update)
      .then((response) => {
        console.log(response.data);
        handleEditP(id, update)
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
