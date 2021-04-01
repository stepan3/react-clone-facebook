import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import './Feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.pinimg.com/originals/05/fc/57/05fc57385b3678a0549d71f25f5c4189.jpg"
        message="This is a message"
        timestamp="1601493943737"
        imgName="imgName"
        username="Stepan"
      />

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
