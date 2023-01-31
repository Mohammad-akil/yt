import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'



const ChannelCard = ({ channelDetail, marginTop }) => {

  return (
    <Box sx={{ width: { md: '328px', xs: '356px' }, height: '100%', boxShadow: 'none', borderRadius: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop }}>
      <Link style={{ textDecoration: 'none' }} to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width: '180px' }} />
          <Typography variant='h6' sx={{ mt: '2px' }}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '4px' }} />
          </Typography>
          {
            channelDetail?.statistics?.subscriberCount && <Typography variant='h6' sx={{ mt: '2px' }}>
              {channelDetail?.statistics?.subscriberCount + ' Subscribers'}
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard