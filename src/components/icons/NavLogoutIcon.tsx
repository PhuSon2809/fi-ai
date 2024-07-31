import React, { memo } from 'react'

const NavLogoutIcon = memo(
  ({ color, className }: { color?: 'black' | 'white' | 'linear' | string; className?: string }) => {
    const gradientId1 = React.useId()

    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.63608 5.63597C8.58208 2.69097 13.0591 2.21497 16.5001 4.20397C16.7212 4.34076 16.8803 4.55828 16.9437 4.81042C17.0072 5.06256 16.9699 5.32949 16.8399 5.55461C16.7098 5.77974 16.4972 5.94536 16.2471 6.01637C15.997 6.08738 15.729 6.05818 15.5001 5.93497C14.4359 5.32169 13.229 4.99923 12.0007 4.99998C10.7725 5.00072 9.566 5.32464 8.50253 5.93921C7.43905 6.55378 6.55601 7.43735 5.94209 8.5012C5.32816 9.56504 5.00497 10.7717 5.00497 12C5.00497 13.2283 5.32816 14.4349 5.94209 15.4988C6.55601 16.5626 7.43905 17.4462 8.50253 18.0607C9.566 18.6753 10.7725 18.9992 12.0007 19C13.229 19.0007 14.4359 18.6783 15.5001 18.065C15.729 17.9418 15.997 17.9126 16.2471 17.9836C16.4972 18.0546 16.7098 18.2202 16.8399 18.4453C16.9699 18.6705 17.0072 18.9374 16.9437 19.1895C16.8803 19.4417 16.7212 19.6592 16.5001 19.796C13.0591 21.786 8.58208 21.31 5.63608 18.364C4.80034 17.5282 4.13739 16.5361 3.68509 15.4442C3.2328 14.3522 3 13.1819 3 12C3 10.8181 3.2328 9.64774 3.68509 8.5558C4.13739 7.46386 4.80034 6.4717 5.63608 5.63597ZM18.2931 8.29297C18.4806 8.1055 18.7349 8.00019 19.0001 8.00019C19.2652 8.00019 19.5196 8.1055 19.7071 8.29297L21.5981 10.184C21.7771 10.363 21.9511 10.536 22.0861 10.696C22.2341 10.871 22.3941 11.092 22.4881 11.382C22.6186 11.7836 22.6186 12.2163 22.4881 12.618C22.401 12.8714 22.2643 13.1049 22.0861 13.305C21.93 13.4815 21.7672 13.652 21.5981 13.816L19.7081 15.707C19.5206 15.8946 19.2662 16.0001 19.0009 16.0002C18.7357 16.0003 18.4812 15.895 18.2936 15.7075C18.1059 15.52 18.0005 15.2656 18.0004 15.0003C18.0003 14.7351 18.1056 14.4806 18.2931 14.293L19.5861 13H12.0001C11.7349 13 11.4805 12.8946 11.293 12.7071C11.1054 12.5195 11.0001 12.2652 11.0001 12C11.0001 11.7348 11.1054 11.4804 11.293 11.2929C11.4805 11.1053 11.7349 11 12.0001 11H19.5861L18.2931 9.70697C18.1056 9.51945 18.0003 9.26514 18.0003 8.99997C18.0003 8.73481 18.1056 8.4805 18.2931 8.29297Z'
          fill={`url(#${gradientId1})`}
        />
        <defs>
          <linearGradient id={gradientId1} x1='23' y1='7.74704' x2='1' y2='7.74704' gradientUnits='userSpaceOnUse'>
            <stop
              stopColor={
                color === 'black' ? '#0D0D0D' : color === 'white' ? 'white' : color === 'linear' ? '#5495FC' : color
              }
            />
            <stop offset='1' stopColor={color === 'black' ? '#0D0D0D' : color === 'linear' ? '#31D366' : color} />
          </linearGradient>
        </defs>
      </svg>
    )
  }
)

export default NavLogoutIcon
