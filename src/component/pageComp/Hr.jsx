import React from 'react'

function Hr({style1, artstyle, breaknewsStyle, className, w}) {
  return (
    <div>
        <div className={`h-[2px] bg-black ${style1} ${artstyle} ${breaknewsStyle} ${className} ${w}`} />
    </div>
  )
}

export default Hr

//h-[2px] bg-gray-500 mx-3.5 mb-2 xl:mx-30
