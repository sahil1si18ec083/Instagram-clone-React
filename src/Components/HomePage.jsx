import React from 'react'
import SideNavLayout from './Layouts/SideNavLayout'
import FeedPosts from './FeedPosts/FeedPosts'
import SuggestedUsers from './SuggestedUsers/SuggestedUsers'

const HomePage = () => {
  return (
    <div className='home-screen-layout'>
      <SideNavLayout/>
      <div>
        <FeedPosts/>
      </div>
      <div>
        <SuggestedUsers/>
      </div>
    </div>
  )
}

export default HomePage
