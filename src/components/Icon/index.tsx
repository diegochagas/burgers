interface IconProps {
  type: 'search' | 'arrow' | 'close' | 'minus' | 'plus' | 'menu'; 
  className?: string;
  color?: string;
  size?: number;
}

export function Icon({ type, className, color = 'black', size = 24 } : IconProps){
  switch (type) {
    case 'search':
      return (      
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.27506 14C3.59317 14 0.608398 11.0152 0.608398 7.33332C0.608398 3.65142 3.59317 0.666656 7.27506 0.666656C10.957 0.666656 13.9417 3.65142 13.9417 7.33332C13.9417 8.87392 13.4192 10.2925 12.5416 11.4214L17.031 15.9107L15.8525 17.0892L11.3631 12.5999C10.2342 13.4774 8.81566 14 7.27506 14ZM12.2751 7.33332C12.2751 10.0947 10.0365 12.3333 7.27506 12.3333C4.51364 12.3333 2.27506 10.0947 2.27506 7.33332C2.27506 4.5719 4.51364 2.33332 7.27506 2.33332C10.0365 2.33332 12.2751 4.5719 12.2751 7.33332Z"
            fill="#8A94A4"
          />
        </svg>
      )
    case 'arrow':
      return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.41414 16C5.02361 16.3905 4.39045 16.3905 3.99992 16C3.6094 15.6095 3.6094 14.9763 3.99993 14.5858L11.2928 7.29289C11.6833 6.90237 12.3165 6.90237 12.707 7.29289L19.9999 14.5858C20.3904 14.9763 20.3904 15.6095 19.9999 16C19.6094 16.3905 18.9762 16.3905 18.5857 16L12.707 10.1213C12.3165 9.7308 11.6833 9.7308 11.2928 10.1213L5.41414 16Z"
            fill="#4F372F"
          />
        </svg>
      )
    case 'close':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1644_694)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.7338 8.27531C21.3788 7.92036 20.8055 7.92036 20.4505 8.27531L16 12.7167L11.5495 8.26621C11.1945 7.91126 10.6212 7.91126 10.2662 8.26621C9.91126 8.62116 9.91126 9.19454 10.2662 9.54949L14.7167 14L10.2662 18.4505C9.91126 18.8055 9.91126 19.3788 10.2662 19.7338C10.6212 20.0887 11.1945 20.0887 11.5495 19.7338L16 15.2833L20.4505 19.7338C20.8055 20.0887 21.3788 20.0887 21.7338 19.7338C22.0887 19.3788 22.0887 18.8055 21.7338 18.4505L17.2833 14L21.7338 9.54949C22.0796 9.20364 22.0796 8.62116 21.7338 8.27531Z"
              fill="#4F372F"
              />
          </g>
        </svg>
      )
    case 'minus': 
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 33 33" fill={color}>
          <rect x="7.5" y="15.4551" width="18" height="3" rx="1.5"/>
        </svg>
      )
    case 'plus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 33 32" fill={color}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 23.5C15 24.3284 15.6716 25 16.5 25C17.3284 25 18 24.3284 18 23.5V17.5H24C24.8284 17.5 25.5 16.8284 25.5 16C25.5 15.1716 24.8284 14.5 24 14.5H18V8.5C18 7.67157 17.3284 7 16.5 7C15.6716 7 15 7.67157 15 8.5V14.5H9C8.17157 14.5 7.5 15.1716 7.5 16C7.5 16.8284 8.17157 17.5 9 17.5H15V23.5Z"
            fill={color}
          />
        </svg>
      )
    case 'menu':
      return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill={color}>
          <rect width="16" height="2" rx="1" />
          <rect y="7" width="16" height="2" rx="1" />
          <rect y="14" width="16" height="2" rx="1" />
        </svg>
      )
    default:
      return <span />
  }
}