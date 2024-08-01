import { memo } from 'react'
import './style.scss'

const ServeTime = memo(() => {
  return (
    <div className='size-[110px] bg-rg-white backdrop-blur-2xl rounded-[9.64px] shadow-s-14 flex items-center justify-center'>
      <div className='size-[90px] bg-white rounded-full shadow-s-9 relative flex items-center justify-center'>
        <div role='status'>
          <svg
            aria-hidden='true'
            className='w-[68px] h-[68px] animate-spin-slow'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='50' cy='50' r='45' stroke='#C3D2E4' strokeWidth='8' fill='none' />
            <path
              d='M50 5
             A 45 45 0 0 1 50 95'
              stroke='url(#gradientFill)'
              strokeWidth='3'
              fill='none'
              strokeLinecap='round'
              strokeDasharray='300'
              strokeDashoffset='200'
            />
            <defs>
              <linearGradient id='gradientFill' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' style={{ stopColor: '#FF5FF4', stopOpacity: 1 }} />
                <stop offset='15%' style={{ stopColor: '#E669F4', stopOpacity: 1 }} />
                <stop offset='45%' style={{ stopColor: '#A684F4', stopOpacity: 1 }} />
                <stop offset='80%' style={{ stopColor: '#41ADF4', stopOpacity: 1 }} />
                <stop offset='97%' style={{ stopColor: '#11C1F4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h6 className='text-[14.47px] font-customSemiBold'>5m40s</h6>
          <p className='text-[6.63px] font-customSemiBold text-transparent bg-clip-text bg-ln-serve-time'>Serve Time</p>
        </div>
      </div>
    </div>
  )
})

export default ServeTime
