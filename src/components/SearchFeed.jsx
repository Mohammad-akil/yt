import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const fetchFromApi = async (searchQuery) => {
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet%2Cid&maxResults=50&order=date`, options)
      .then(response => response.json())
      .then(response => setVideos(response?.items))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchFromApi(searchTerm);
  }, [searchTerm]);

  return (


    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2,textAlign:'center' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
         Search result for : <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>

  );
}

export default SearchFeed