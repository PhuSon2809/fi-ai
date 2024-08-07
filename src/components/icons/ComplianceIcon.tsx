import { memo } from 'react'

const ComplianceIcon = memo(({ color = 'white', className }: { color?: string; className?: string }) => {
  return (
    <svg
      width='41'
      height='40'
      viewBox='0 0 41 40'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.0188 6.69995L17.7 8.64995C17.6861 8.76389 17.7038 8.87946 17.7513 8.98399C17.7987 9.08852 17.874 9.17797 17.9689 9.24253C18.0638 9.30709 18.1746 9.34427 18.2893 9.34999C18.4039 9.35571 18.5179 9.32975 18.6188 9.27495L20.25 8.3937L21.8813 9.29995C21.9734 9.34969 22.0766 9.37548 22.1813 9.37495C22.3109 9.37594 22.4375 9.33662 22.5438 9.26245C22.6419 9.19377 22.7182 9.09835 22.7636 8.98755C22.809 8.87675 22.8217 8.75523 22.8 8.63745L22.4813 6.68745L23.825 5.31245C23.9032 5.23098 23.9579 5.12984 23.9832 5.01979C24.0085 4.90975 24.0035 4.7949 23.9688 4.68745C23.9321 4.57839 23.866 4.48158 23.7777 4.40769C23.6895 4.3338 23.5826 4.2857 23.4688 4.2687L21.6375 3.98745L20.8188 2.23745C20.7691 2.12833 20.689 2.03582 20.5882 1.97095C20.4873 1.90608 20.3699 1.87158 20.25 1.87158C20.1301 1.87158 20.0127 1.90608 19.9119 1.97095C19.8111 2.03582 19.731 2.12833 19.6813 2.23745L18.8625 3.98745L17.0313 4.2687C16.9175 4.2857 16.8106 4.3338 16.7223 4.40769C16.6341 4.48158 16.568 4.57839 16.5313 4.68745C16.4965 4.7949 16.4916 4.90975 16.5169 5.01979C16.5422 5.12984 16.5968 5.23098 16.675 5.31245L18.0188 6.69995ZM23.4688 33.0187L21.6375 32.7375L20.8188 30.9875C20.7691 30.8783 20.689 30.7858 20.5882 30.7209C20.4873 30.6561 20.3699 30.6216 20.25 30.6216C20.1301 30.6216 20.0127 30.6561 19.9119 30.7209C19.8111 30.7858 19.731 30.8783 19.6813 30.9875L18.8625 32.7375L17.0313 33.0187C16.9175 33.0357 16.8106 33.0838 16.7223 33.1577C16.6341 33.2316 16.568 33.3284 16.5313 33.4375C16.4965 33.5449 16.4916 33.6597 16.5169 33.7698C16.5422 33.8798 16.5968 33.981 16.675 34.0625L18.0188 35.4375L17.7 37.3875C17.6861 37.5014 17.7038 37.617 17.7513 37.7215C17.7987 37.826 17.874 37.9155 17.9689 37.98C18.0638 38.0446 18.1746 38.0818 18.2893 38.0875C18.4039 38.0932 18.5179 38.0672 18.6188 38.0125L20.25 37.1437L21.8813 38.0499C21.9734 38.0997 22.0766 38.1255 22.1813 38.125C22.3109 38.1259 22.4375 38.0866 22.5438 38.0125C22.6419 37.9438 22.7182 37.8484 22.7636 37.7376C22.809 37.6268 22.8217 37.5052 22.8 37.3875L22.4813 35.4375L23.825 34.0625C23.9032 33.981 23.9579 33.8798 23.9832 33.7698C24.0085 33.6597 24.0035 33.5449 23.9688 33.4375C23.9321 33.3284 23.866 33.2316 23.7777 33.1577C23.6895 33.0838 23.5826 33.0357 23.4688 33.0187ZM7.80628 23.75C7.93585 23.7509 8.06253 23.7116 8.16878 23.6375C8.26688 23.5688 8.34318 23.4734 8.38861 23.3626C8.43404 23.2518 8.44668 23.1302 8.42503 23.0125L8.10628 21.0625L9.45003 19.6875C9.52822 19.606 9.58287 19.5048 9.60818 19.3948C9.63349 19.2847 9.62851 19.1699 9.59378 19.0625C9.55707 18.9534 9.49096 18.8566 9.40273 18.7827C9.31451 18.7088 9.20759 18.6607 9.09378 18.6437L7.26253 18.3625L6.44378 16.6125C6.39406 16.5033 6.31401 16.4108 6.21316 16.3459C6.11232 16.2811 5.99494 16.2466 5.87503 16.2466C5.75512 16.2466 5.63774 16.2811 5.5369 16.3459C5.43605 16.4108 5.356 16.5033 5.30628 16.6125L4.48753 18.3625L2.65628 18.6437C2.54246 18.6607 2.43555 18.7088 2.34733 18.7827C2.2591 18.8566 2.19299 18.9534 2.15628 19.0625C2.12154 19.1699 2.11657 19.2847 2.14188 19.3948C2.16719 19.5048 2.22184 19.606 2.30003 19.6875L3.64378 21.0625L3.32503 23.0125C3.31111 23.1264 3.32883 23.242 3.37625 23.3465C3.42367 23.451 3.49897 23.5405 3.59387 23.605C3.68878 23.6696 3.79963 23.7068 3.91428 23.7125C4.02892 23.7182 4.14292 23.6922 4.24378 23.6375L5.87503 22.7687L7.50628 23.675C7.59842 23.7247 7.70158 23.7505 7.80628 23.75ZM38.375 19.0625C38.3383 18.9534 38.2722 18.8566 38.184 18.7827C38.0958 18.7088 37.9888 18.6607 37.875 18.6437L36.0438 18.3625L35.225 16.6125C35.1753 16.5033 35.0953 16.4108 34.9944 16.3459C34.8936 16.2811 34.7762 16.2466 34.6563 16.2466C34.5364 16.2466 34.419 16.2811 34.3181 16.3459C34.2173 16.4108 34.1372 16.5033 34.0875 16.6125L33.2688 18.3625L31.4375 18.6437C31.3237 18.6607 31.2168 18.7088 31.1286 18.7827C31.0404 18.8566 30.9742 18.9534 30.9375 19.0625C30.9028 19.1699 30.8978 19.2847 30.9231 19.3948C30.9484 19.5048 31.0031 19.606 31.0813 19.6875L32.425 21.0625L32.1063 23.0125C32.0924 23.1264 32.1101 23.242 32.1575 23.3465C32.2049 23.451 32.2802 23.5405 32.3751 23.605C32.47 23.6696 32.5809 23.7068 32.6955 23.7125C32.8102 23.7182 32.9242 23.6922 33.025 23.6375L34.625 22.7687L36.2563 23.675C36.3484 23.7247 36.4516 23.7505 36.5563 23.75C36.6859 23.7509 36.8125 23.7116 36.9188 23.6375C37.0169 23.5688 37.0932 23.4734 37.1386 23.3626C37.184 23.2518 37.1967 23.1302 37.175 23.0125L36.8563 21.0625L38.2 19.6875C38.2836 19.6093 38.3442 19.5097 38.375 19.3994C38.4059 19.2892 38.4059 19.1727 38.375 19.0625ZM28.0188 11.075L27.7 13.025C27.6861 13.1389 27.7038 13.2545 27.7513 13.359C27.7987 13.4635 27.874 13.553 27.9689 13.6175C28.0638 13.6821 28.1746 13.7193 28.2893 13.725C28.4039 13.7307 28.5179 13.7047 28.6188 13.65L30.25 12.7687L31.8813 13.675C31.9734 13.7247 32.0766 13.7505 32.1813 13.75C32.3109 13.7509 32.4375 13.7116 32.5438 13.6375C32.6419 13.5688 32.7182 13.4734 32.7636 13.3626C32.809 13.2518 32.8217 13.1302 32.8 13.0125L32.4813 11.0625L33.825 9.68745C33.9032 9.60598 33.9579 9.50484 33.9832 9.39479C34.0085 9.28475 34.0035 9.1699 33.9688 9.06245C33.9321 8.95339 33.866 8.85658 33.7777 8.78269C33.6895 8.7088 33.5826 8.6607 33.4688 8.6437L31.6375 8.36245L30.8188 6.61245C30.7691 6.50333 30.689 6.41082 30.5882 6.34595C30.4873 6.28108 30.3699 6.24658 30.25 6.24658C30.1301 6.24658 30.0127 6.28108 29.9119 6.34595C29.8111 6.41082 29.731 6.50333 29.6813 6.61245L28.8625 8.36245L27.0313 8.6437C26.9175 8.6607 26.8106 8.7088 26.7223 8.78269C26.6341 8.85658 26.568 8.95339 26.5313 9.06245C26.4965 9.1699 26.4916 9.28475 26.5169 9.39479C26.5422 9.50484 26.5968 9.60598 26.675 9.68745L28.0188 11.075ZM8.01878 11.075L7.70003 13.025C7.68611 13.1389 7.70383 13.2545 7.75125 13.359C7.79868 13.4635 7.87397 13.553 7.96887 13.6175C8.06378 13.6821 8.17463 13.7193 8.28928 13.725C8.40392 13.7307 8.51792 13.7047 8.61878 13.65L10.25 12.7687L11.8813 13.675C11.9734 13.7247 12.0766 13.7505 12.1813 13.75C12.3109 13.7509 12.4375 13.7116 12.5438 13.6375C12.6419 13.5688 12.7182 13.4734 12.7636 13.3626C12.809 13.2518 12.8217 13.1302 12.8 13.0125L12.4813 11.0625L13.825 9.68745C13.9032 9.60598 13.9579 9.50484 13.9832 9.39479C14.0085 9.28475 14.0035 9.1699 13.9688 9.06245C13.9321 8.95339 13.866 8.85658 13.7777 8.78269C13.6895 8.7088 13.5826 8.6607 13.4688 8.6437L11.6375 8.36245L10.8188 6.61245C10.7691 6.50333 10.689 6.41082 10.5882 6.34595C10.4873 6.28108 10.3699 6.24658 10.25 6.24658C10.1301 6.24658 10.0127 6.28108 9.9119 6.34595C9.81105 6.41082 9.731 6.50333 9.68128 6.61245L8.86253 8.36245L7.03128 8.6437C6.91747 8.6607 6.81055 8.7088 6.72233 8.78269C6.6341 8.85658 6.56799 8.95339 6.53128 9.06245C6.49655 9.1699 6.49157 9.28475 6.51688 9.39479C6.54219 9.50484 6.59684 9.60598 6.67503 9.68745L8.01878 11.075ZM14.0938 28.0187L12.2625 27.7375L11.4438 25.9875C11.3941 25.8783 11.314 25.7858 11.2132 25.7209C11.1123 25.6561 10.9949 25.6216 10.875 25.6216C10.7551 25.6216 10.6377 25.6561 10.5369 25.7209C10.4361 25.7858 10.356 25.8783 10.3063 25.9875L9.48753 27.7375L7.65628 28.0187C7.54247 28.0357 7.43555 28.0838 7.34733 28.1577C7.2591 28.2316 7.19299 28.3284 7.15628 28.4375C7.12155 28.5449 7.11657 28.6597 7.14188 28.7698C7.16719 28.8798 7.22184 28.981 7.30003 29.0625L8.64378 30.4375L8.32503 32.3875C8.31111 32.5014 8.32883 32.617 8.37625 32.7215C8.42368 32.826 8.49897 32.9155 8.59387 32.98C8.68878 33.0446 8.79963 33.0818 8.91428 33.0875C9.02892 33.0932 9.14292 33.0672 9.24378 33.0125L10.875 32.1437L12.5063 33.05C12.5984 33.0997 12.7016 33.1255 12.8063 33.125C12.9359 33.1259 13.0625 33.0866 13.1688 33.0125C13.2669 32.9438 13.3432 32.8484 13.3886 32.7376C13.434 32.6268 13.4467 32.5052 13.425 32.3875L13.1063 30.4375L14.45 29.0625C14.5282 28.981 14.5829 28.8798 14.6082 28.7698C14.6335 28.6597 14.6285 28.5449 14.5938 28.4375C14.5571 28.3284 14.491 28.2316 14.4027 28.1577C14.3145 28.0838 14.2076 28.0357 14.0938 28.0187ZM33.4688 28.6437L31.6375 28.3625L30.8188 26.6125C30.7691 26.5033 30.689 26.4108 30.5882 26.3459C30.4873 26.2811 30.3699 26.2466 30.25 26.2466C30.1301 26.2466 30.0127 26.2811 29.9119 26.3459C29.8111 26.4108 29.731 26.5033 29.6813 26.6125L28.8625 28.3625L27.0313 28.6437C26.9175 28.6607 26.8106 28.7088 26.7223 28.7827C26.6341 28.8566 26.568 28.9534 26.5313 29.0625C26.4965 29.1699 26.4916 29.2847 26.5169 29.3948C26.5422 29.5048 26.5968 29.606 26.675 29.6875L28.0188 31.0625L27.7 33.0125C27.6861 33.1264 27.7038 33.242 27.7513 33.3465C27.7987 33.451 27.874 33.5405 27.9689 33.605C28.0638 33.6696 28.1746 33.7068 28.2893 33.7125C28.4039 33.7182 28.5179 33.6922 28.6188 33.6375L30.25 32.7687L31.8813 33.675C31.9734 33.7247 32.0766 33.7505 32.1813 33.75C32.3109 33.7509 32.4375 33.7116 32.5438 33.6375C32.6419 33.5688 32.7182 33.4734 32.7636 33.3626C32.809 33.2518 32.8217 33.1302 32.8 33.0125L32.4813 31.0625L33.825 29.6875C33.9032 29.606 33.9579 29.5048 33.9832 29.3948C34.0085 29.2847 34.0035 29.1699 33.9688 29.0625C33.9321 28.9534 33.866 28.8566 33.7777 28.7827C33.6895 28.7088 33.5826 28.6607 33.4688 28.6437ZM24 17.5V16.25C24 15.2554 23.6049 14.3016 22.9017 13.5983C22.1984 12.895 21.2446 12.5 20.25 12.5C19.2555 12.5 18.3016 12.895 17.5984 13.5983C16.8951 14.3016 16.5 15.2554 16.5 16.25V17.5C16.0028 17.5 15.5258 17.6975 15.1742 18.0491C14.8226 18.4008 14.625 18.8777 14.625 19.375V24.375C14.625 24.8722 14.8226 25.3491 15.1742 25.7008C15.5258 26.0524 16.0028 26.25 16.5 26.25H24C24.4973 26.25 24.9742 26.0524 25.3259 25.7008C25.6775 25.3491 25.875 24.8722 25.875 24.375V19.375C25.875 18.8777 25.6775 18.4008 25.3259 18.0491C24.9742 17.6975 24.4973 17.5 24 17.5ZM22.5688 21.0687L20.0688 23.5687C20.0107 23.6273 19.9416 23.6738 19.8654 23.7055C19.7892 23.7372 19.7075 23.7536 19.625 23.7536C19.5425 23.7536 19.4608 23.7372 19.3847 23.7055C19.3085 23.6738 19.2394 23.6273 19.1813 23.5687L17.9313 22.3187C17.8136 22.201 17.7475 22.0414 17.7475 21.875C17.7475 21.7085 17.8136 21.5489 17.9313 21.4312C18.049 21.3135 18.2086 21.2474 18.375 21.2474C18.5415 21.2474 18.7011 21.3135 18.8188 21.4312L19.625 22.2437L21.6813 20.1812C21.799 20.0635 21.9586 19.9974 22.125 19.9974C22.2915 19.9974 22.4511 20.0635 22.5688 20.1812C22.6865 20.2989 22.7526 20.4585 22.7526 20.625C22.7526 20.7914 22.6865 20.951 22.5688 21.0687ZM17.75 16.25C17.75 15.5869 18.0134 14.951 18.4823 14.4822C18.9511 14.0133 19.587 13.75 20.25 13.75C20.9131 13.75 21.549 14.0133 22.0178 14.4822C22.4866 14.951 22.75 15.5869 22.75 16.25V17.5H17.75V16.25Z'
        fill={color}
      />
    </svg>
  )
})

export default ComplianceIcon
