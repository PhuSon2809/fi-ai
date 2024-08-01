import React, { memo } from 'react'

const NavDemoIcon = memo(
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
          d='M6.77009 10.931C6.62122 10.8864 6.44154 10.8639 6.23089 10.8639H5.77563V13.1337H6.29848C6.41324 13.1337 6.50284 13.1309 6.56793 13.1244C6.63698 13.1176 6.70492 13.1023 6.77024 13.0788C6.83671 13.0566 6.89826 13.0218 6.9515 12.9762C7.18211 12.7846 7.29749 12.4549 7.29749 11.9863C7.29749 11.6562 7.24672 11.4089 7.14548 11.2448C7.04393 11.0807 6.91864 10.976 6.77009 10.931ZM17.754 10.9472C17.6045 10.8551 17.433 10.8092 17.2393 10.8092C17.1015 10.8092 16.9741 10.8346 16.8572 10.8854C16.741 10.9359 16.6377 11.012 16.555 11.108C16.4706 11.2052 16.404 11.3297 16.3552 11.481C16.3065 11.6324 16.2821 11.8021 16.2821 11.9909C16.2821 12.1807 16.3063 12.3529 16.3552 12.5065C16.404 12.6599 16.4728 12.7874 16.562 12.8882C16.6459 12.9859 16.7507 13.0636 16.8687 13.1155C16.9842 13.1658 17.1107 13.1909 17.2486 13.1909C17.4196 13.1924 17.5879 13.1473 17.7353 13.0606C17.8834 12.9741 18.001 12.8404 18.0885 12.659C18.1759 12.4782 18.2198 12.2553 18.2198 11.9909C18.2198 11.7461 18.1794 11.5336 18.0989 11.3542C18.0184 11.1748 17.9033 11.0393 17.754 10.947V10.9472Z'
          fill={`url(#${gradientId1})`}
        />
        <path
          d='M19.7213 6.17322L13.0849 2.2627C12.787 2.08711 12.3942 1.99939 12.0015 1.99939C11.6086 1.99939 11.2159 2.08711 10.918 2.2627L4.28167 6.17322C3.68588 6.52441 3.19824 7.37769 3.19824 8.06938V15.9294C3.19824 16.6211 3.68588 17.4744 4.28167 17.8256L10.918 21.7361C11.2159 21.9117 11.6086 21.9994 12.0015 21.9994C12.3942 21.9994 12.787 21.9117 13.0849 21.7361L19.7213 17.8256C20.3171 17.4744 20.8047 16.6211 20.8047 15.9294V8.06938C20.8047 7.37769 20.3171 6.52441 19.7213 6.17322ZM7.94256 12.5398C7.91015 12.6967 7.85452 12.8479 7.77749 12.9883C7.70248 13.1222 7.60593 13.2427 7.4917 13.3452C7.40221 13.4247 7.30112 13.4901 7.19192 13.5392C7.08345 13.5879 6.96713 13.6222 6.84231 13.642C6.71749 13.6616 6.57695 13.6715 6.4207 13.6715H5.52151C5.39591 13.6715 5.30143 13.653 5.23808 13.6154C5.20798 13.5988 5.18148 13.5763 5.16011 13.5494C5.13874 13.5224 5.12292 13.4915 5.11357 13.4584C5.09424 13.3906 5.08465 13.3027 5.08465 13.1947V10.7423C5.08465 10.5964 5.11782 10.4909 5.18447 10.4252C5.25112 10.3598 5.35865 10.3269 5.50752 10.3269H6.40671C6.64046 10.3269 6.84105 10.3483 7.00831 10.3909C7.17687 10.4341 7.33293 10.5162 7.46388 10.6308C7.81837 10.9285 7.99585 11.3819 7.99585 11.9903C7.99585 12.191 7.97824 12.3743 7.94256 12.5398ZM11.1454 13.5972C11.0903 13.6467 11.0086 13.6715 10.9001 13.6715H9.02535C8.87507 13.6715 8.76692 13.639 8.70105 13.5736C8.63534 13.5079 8.60248 13.4022 8.60248 13.2562V10.7423C8.60248 10.6451 8.6171 10.5657 8.6465 10.5039C8.67605 10.4426 8.72211 10.3977 8.78484 10.3694C8.84756 10.3412 8.92773 10.3269 9.02535 10.3269H10.8468C10.9569 10.3269 11.0386 10.3511 11.0921 10.3992C11.1455 10.4469 11.1722 10.5096 11.1722 10.5873C11.1722 10.6663 11.1455 10.7298 11.0921 10.7778C11.0386 10.8256 10.9569 10.8496 10.8468 10.8496H9.29244V11.6707H10.7239C10.8291 11.6707 10.9077 11.6939 10.9595 11.7405C11.0114 11.7869 11.0374 11.848 11.0374 11.9241C11.0374 12.0002 11.0117 12.062 10.9606 12.1101C10.9096 12.1578 10.8305 12.1817 10.7239 12.1817H9.29244V13.1331H10.9004C11.0089 13.1331 11.0905 13.158 11.1455 13.2073C11.2004 13.2568 11.2279 13.3224 11.2279 13.4044C11.2279 13.4838 11.2002 13.5481 11.1454 13.5972ZM6.97216 7.24061C6.93648 7.2614 6.89707 7.27496 6.85615 7.28052C6.81524 7.28607 6.77363 7.28351 6.73371 7.27299C6.69379 7.26246 6.65633 7.24418 6.62347 7.21918C6.59061 7.19417 6.563 7.16294 6.54221 7.12727C6.52142 7.0916 6.50787 7.05218 6.50231 7.01127C6.49676 6.97036 6.49931 6.92875 6.50984 6.88883C6.52036 6.8489 6.53865 6.81144 6.56365 6.77859C6.58865 6.74573 6.61988 6.71812 6.65555 6.69733L11.2788 4.00228C11.6776 3.76963 12.2824 3.76397 12.6856 3.98939L17.3469 6.69701C17.3826 6.71774 17.4139 6.7453 17.439 6.77811C17.464 6.81093 17.4824 6.84836 17.493 6.88827C17.5036 6.92818 17.5062 6.96979 17.5007 7.01071C17.4953 7.05164 17.4818 7.09109 17.4611 7.1268C17.4403 7.16251 17.4128 7.1938 17.3799 7.21886C17.3471 7.24392 17.3097 7.26228 17.2698 7.27288C17.2299 7.28347 17.1883 7.28611 17.1474 7.28063C17.1064 7.27514 17.067 7.26165 17.0313 7.24093L12.3744 4.53551C12.1728 4.42311 11.7995 4.42625 11.5954 4.54541L6.97216 7.24061ZM15.031 13.3453C15.031 13.473 15.0021 13.5689 14.944 13.6329C14.8858 13.6967 14.8081 13.7286 14.7105 13.7286C14.6192 13.7286 14.544 13.6967 14.4851 13.6327C14.4263 13.5689 14.3967 13.473 14.3967 13.3453V11.0365L13.8509 13.1674C13.8153 13.3057 13.7863 13.4073 13.7637 13.472C13.7412 13.5365 13.6997 13.5954 13.6395 13.6486C13.579 13.7022 13.4954 13.7286 13.3885 13.7286C13.308 13.7286 13.2397 13.7113 13.1841 13.6772C13.1304 13.6451 13.0857 13.6001 13.0539 13.5462C13.022 13.4906 12.9974 13.4311 12.9807 13.3692C12.9629 13.3045 12.9448 13.2373 12.9261 13.1674L12.3803 11.0365V13.3453C12.3803 13.473 12.3512 13.5689 12.2931 13.6329C12.2351 13.6967 12.1579 13.7286 12.062 13.7286C11.9689 13.7286 11.8932 13.697 11.8344 13.6336C11.7754 13.5708 11.746 13.4744 11.746 13.3453V10.6992C11.746 10.553 11.7847 10.4544 11.8622 10.4036C11.9395 10.3526 12.0442 10.3269 12.1758 10.3269H12.3896C12.518 10.3269 12.6114 10.3387 12.6696 10.3615C12.7277 10.3843 12.7707 10.4252 12.7985 10.4844C12.8265 10.5437 12.8582 10.6404 12.8937 10.7742L13.3886 12.6062L13.8836 10.7742C13.9192 10.6405 13.9511 10.5437 13.9789 10.4844C14.0067 10.4252 14.0496 10.3843 14.1078 10.3614C14.166 10.3387 14.259 10.3269 14.3876 10.3269H14.6014C14.7331 10.3269 14.8377 10.3526 14.9152 10.4036C14.9925 10.4544 15.0312 10.553 15.0312 10.6992L15.031 13.3453ZM18.8114 12.6999C18.7402 12.9112 18.6333 13.0944 18.4907 13.2494C18.3483 13.4044 18.1732 13.523 17.9657 13.6055C17.7582 13.6876 17.5203 13.7286 17.2524 13.7286C16.9858 13.7286 16.7474 13.6863 16.5367 13.602C16.3261 13.5176 16.1503 13.3983 16.0093 13.2449C15.8683 13.0913 15.7619 12.9066 15.6899 12.6906C15.6177 12.4745 15.5819 12.241 15.5819 11.9903C15.5819 11.7331 15.6194 11.4976 15.6946 11.283C15.7696 11.0684 15.8785 10.8861 16.0209 10.7353C16.1635 10.5852 16.3369 10.4697 16.5414 10.39C16.7459 10.3098 16.9783 10.2702 17.2385 10.2702C17.5917 10.2702 17.8948 10.3403 18.1482 10.4811C18.3969 10.6173 18.5977 10.8268 18.7231 11.0812C18.8532 11.3404 18.9183 11.6449 18.9183 11.9948C18.9183 12.2533 18.8826 12.4881 18.8114 12.6999Z'
          fill={`url(#${gradientId1})`}
        />
        <defs>
          <linearGradient id={gradientId1} x1='23' y1='7.74704' x2='1' y2='7.74704' gradientUnits='userSpaceOnUse'>
            <stop
              stopColor={
                color === 'black' ? '#333333' : color === 'white' ? 'white' : color === 'linear' ? '#5495FC' : color
              }
            />
            <stop offset='1' stopColor={color === 'black' ? '#0D0D0D' : color === 'linear' ? '#31D366' : color} />
          </linearGradient>
        </defs>
      </svg>
    )
  }
)

export default NavDemoIcon