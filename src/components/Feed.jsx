import React, { useEffect,useState } from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import {Sidebar , Videos} from './'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  const fetchFromApi = async (url) => {
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${url}&part=snippet%2Cid&maxResults=50`, options)
    .then(response => response.json())
	  .then(response => setVideos(response.items))
	  .catch(err => console.error(err))
  };

  useEffect(() => {
     fetchFromApi(selectedCategory); 
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
       
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;