import React from 'react'

function ForVideo() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="video-container w-full md:w-10/12 lg:w-8/12 xl:w-8/12">
        <video className="w-full h-96" controls>
          <source src="/.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>
    </div>
  )
}

export default ForVideo
