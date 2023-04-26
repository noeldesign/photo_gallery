import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to="/Masonry">View Masonry Grid</Link>
    </div>
  )
}

export default HomePage