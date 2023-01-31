import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, VideoDetail, SearchFeed, Feed, ChannelDetail } from './components'
import { Box } from '@mui/system'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor : 'black'}}>
      <Navbar />

      <Routes>

        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' exact element={<VideoDetail />} />
        <Route path='/channel/:id' exact element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App