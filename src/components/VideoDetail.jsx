import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './'



const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos,setvideos] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const fetchVideoDetail = async () => {
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
      .then(response => response.json())
      .then(response => setvideoDetail(response.items[0]))
      .catch(err => console.error(err));
  }

  const fetchRelatedVideos = async () => {
    fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`, options)
      .then(response => response.json())
      .then(response => setvideos(response.items))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchVideoDetail(id);
    fetchRelatedVideos(id);
  }, [id])

  console.log(videos)

  

  if (!videoDetail?.snippet) return 'Loading...';

  

  const {snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount}} = videoDetail;



  return (
    <Box minHeight='95vh' >
      <Stack sx={{paddingBottom : '20px'}} direction={{ sx: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`} className='react-player' />
            <Typography color='white' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' sx={{

            }} py={1} px={2} >

              <Link style={{textDecoration : 'none'}} to={`/channel/${channelId}`}>
                <Typography color='white' variant={{ sm: 'subtitle1', md: 'h6' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '4px', mt: '2px' }} />
                </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' color='white' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' color='white' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>

            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,sx:5}} justifyContent='center' alignItems='center' >
          <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail