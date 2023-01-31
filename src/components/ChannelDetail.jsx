import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { videos, ChannelCard, Videos } from './'
import { Box } from '@mui/material'

const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null);
  const [channelVideos, setchannelVideos] = useState([]);


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const fetchFromApiChannelDetail = async (id) => {
    fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`, options)
      .then(response => response.json())
      .then(response => setchannelDetail(response?.items[0]))
      .catch(err => console.error(err));
  }

  const fetchFromApiChannelVideos = async (id) => {
    fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date&maxResults=50`, options)
      .then(response => response.json())
      .then(response => setchannelVideos(response?.items))
      .catch(err => console.error(err));
  }



  const { id } = useParams();


  useEffect(() => {
    fetchFromApiChannelDetail(id);
    fetchFromApiChannelVideos(id);
  }, [id])


  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          zIndex: 10,
          height: '300px',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(69,9,121,1) 26%, rgba(0,206,255,1) 100%)',
        }}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' justifyContent='center'  p='2'>
        
          <Videos videos={channelVideos}/>
        
      </Box>
    </Box >
  )
}

export default ChannelDetail