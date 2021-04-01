import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        profileSrc="https://github.com/stepan3"
        title="Stepan"
      />
      <Story
        image="https://resizing.flixster.com/Y3ZMI8OjihCnbz-nkAspwG9OhDg=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/23213/23213_v9_bb.jpg"
        profileSrc="https://www.imdb.com/name/nm0000123/"
        title="George Clooney"
      />
      <Story
        image="https://media.gq.com/photos/5e6128d2398289000862596e/1:1/w_805,h_805,c_limit/tom-hardy-lead-840-social.jpg"
        profileSrc="https://www.imdb.com/name/nm0362766/?ref_=fn_al_nm_1"
        title="Tom Hardy"
      />
    </div>
  )
}

export default StoryReel
