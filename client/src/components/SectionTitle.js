import React from 'react'

function SectionTitle({

    title,
})
 {
  return (
    <div className='flex'>
        <h1 className='text-3xl text-secondary font-semibold'>{title}</h1>
        <div className='w-40 h-[1px] bg-tertiary'>

        </div>
    </div>
  )
}

export default SectionTitle