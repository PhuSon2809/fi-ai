import { memo } from 'react'

const ArrowBottom = memo(({ color = '#FF5454', className }: { color?: string; className?: string }) => {
  return (
    <svg
      width='16'
      height='31'
      viewBox='0 0 16 31'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.29289 30.7071C7.68342 31.0976 8.31658 31.0976 8.70711 30.7071L15.0711 24.3431C15.4616 23.9526 15.4616 23.3195 15.0711 22.9289C14.6805 22.5384 14.0474 22.5384 13.6569 22.9289L8 28.5858L2.34314 22.9289C1.95262 22.5384 1.31946 22.5384 0.928931 22.9289C0.538407 23.3195 0.538407 23.9526 0.928931 24.3431L7.29289 30.7071ZM7 -4.37114e-08L7 30L9 30L9 4.37114e-08L7 -4.37114e-08Z'
        fill={color}
      />
    </svg>
  )
})

export default ArrowBottom
