import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import './Feed.css'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {/* {postData.map(entry => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  )
}

export default Feed
