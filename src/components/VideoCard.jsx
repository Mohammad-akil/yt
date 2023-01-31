import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Stack } from '@mui/material'
import { Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants'

const VideoCard = ({ video: { snippet, id: { videoId } } }) => {
  
  
  return (
    <Card sx={{ width: { xs: '100%', sm: '320px' }, boxShadow: 'none', borderColor: 'gray', borderRadius: '10px' }}>

      <Link to={videoId ? `/video/${videoId} ` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt='thumbnail'
          sx={{ width: {xs: '100%' ,sm: '320px'}, height: 150 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '90px' }}>

        <Stack direction='row' justifyContent='space-evenly' gap={2} >

          <Box mt={1}>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId} ` : demoChannelUrl}>
              <CardMedia image={snippet?.thumbnails?.default?.url}
                alt='thumbnail'
                sx={{ width: 50, height: 50 ,borderRadius : '50%'}}
              />
            </Link>
          </Box>

          <Box>
            <Link style={{ textDecoration: 'none' }} to={videoId ? `/video/${videoId} ` : demoVideoUrl}>
              <Typography color='white' variant='subtitle2' fontWeight='bold' >
                {
                  snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)
                }
              </Typography>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={snippet?.channelId ? `/channel/${snippet?.channelId} ` : demoChannelUrl}>
              <Typography color='gray' variant='subtitle2' fontWeight='bold' >
                {
                  snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)
                }
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '4px',mt:'4px' }} />
              </Typography>

            </Link>
          </Box>
        </Stack>

      </CardContent>
    </Card>
  )
}

export default VideoCard