import React from 'react'

function ForVideo() {
  return (
    <div>
       <div className="video-container">
      <video controls width="100%">
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  )
}

export default ForVideo
