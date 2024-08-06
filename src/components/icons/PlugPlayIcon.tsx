import { memo } from 'react'

const PlugPlayIcon = memo(({ color = 'white', className }: { color?: string; className?: string }) => {
  return (
    <svg
      width='37'
      height='38'
      viewBox='0 0 37 38'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.3009 3.05615L19.1783 22.2199H24.9421C25.3301 22.2199 25.6239 22.5748 25.5529 22.9557L23.1993 35.5739L35.3218 16.4102H29.5581C29.1704 16.4102 28.8763 16.0558 28.9472 15.6743L31.3009 3.05615ZM17.3744 32.3267H5.45242C4.63395 32.3267 4.63345 33.5693 5.45242 33.5693H17.3743C18.1934 33.5693 18.1929 32.3267 17.3744 32.3267ZM14.2912 23.6592H2.36876C1.55066 23.6592 1.55116 24.9017 2.36876 24.9017H14.2912C15.1088 24.9017 15.1093 23.6592 14.2912 23.6592ZM17.7263 14.9919H5.80332C4.98646 14.9919 4.98609 16.2345 5.80332 16.2345H17.7263C18.5444 16.2345 18.544 14.9919 17.7263 14.9919ZM11.7782 7.56689C11.4356 7.56689 11.1569 7.28818 11.1569 6.94561C11.1569 6.60242 11.4355 6.32433 11.7782 6.32433H23.7011C24.5194 6.32433 24.5189 7.56689 23.7011 7.56689H11.7782Z'
        fill={color}
      />
    </svg>
  )
})

export default PlugPlayIcon