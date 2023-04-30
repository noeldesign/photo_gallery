import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <ul>
            <li>
                <Link to="/Events">Events Album</Link>
            </li>
        </ul>
    </div>
  )
}

export default HomePage