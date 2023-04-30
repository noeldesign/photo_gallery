import React from 'react'
// import MasonryGrid from '../components/MasonryGrid';
import { useLoaderData } from 'react-router-dom'

const EventsPage = () => {
    const eventPhotos = useLoaderData();
    console.log(eventPhotos);
  return (
    <>
        {/* <MasonryGrid /> */}
        <h1>events page</h1>
    </>
  )
}

export default EventsPage