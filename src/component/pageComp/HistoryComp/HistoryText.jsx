import React from 'react'
function HistoryText({content, className}) {
  return (
    <div className={`${className}`}>
      {
        content.map( (section, index) => (
            <div key={index}>
                {
                    section.articles.map((data, index)=>(
                       <div key={index} className='w-full'>
                        <h2 className='text-2xl font-semibold hover:underline pb-3'>{data.title}</h2>
                        <p className='pb-5 leading-5 text-sm'>{data.description}</p>
                        <button className='px-4 py-1 border-2 font-semibold'>{data.button}</button>
                       </div> 
                    ))
                }
            </div>
        ))
      }
    </div>
  )
}

export default HistoryText
