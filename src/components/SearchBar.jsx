import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
        navigate(`/search/${searchTerm}`);

        setsearchTerm('')
    }
  }
  return (
    <Paper component='form'
    onSubmit = {(e)=>handleSubmit(e)}
    sx={{
        borderRadius : 20,
        border : '1px solid #e3e3e3',
        pl : 2,
        boxShadow : 'none',
        mr : {sm:5}
    }}>

        <input  type="text"
        placeholder='Search...' 
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        style={{border : 'none',outline : 'none'}}
        />

        <IconButton type='submit'
        sx={{
            p:'10px', color : "red"
        }}>
            <Search/>

        </IconButton>

    </Paper>
  )
}

export default SearchBar