import { SVGProps } from 'react';

export const BasketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="#ffffff"
      fill="#ffffff"
      {...props}
    >
      <path
        d="M16.16,5.14h4.36c-.1.44-.2.86-.3,1.28a42.6,42.6,0,0,0-1,6.24,23.43,23.43,0,0,0,.34,6.79,11.89,11.89,0,0,0,1,2.85c.05.09.09.19.14.3H4l.4-1a13.89,13.89,0,0,0,1-3.75,25.08,25.08,0,0,0,.08-5A36,36,0,0,0,4.06,5.28s0-.07,0-.13H8.45V4.82a17.14,17.14,0,0,1,.07-2A2.7,2.7,0,0,1,11.14.54c.79,0,1.57,0,2.36,0a2.77,2.77,0,0,1,2.66,2.63C16.18,3.82,16.16,4.46,16.16,5.14ZM5.3,6.1c.1.44.2.86.29,1.28a34.21,34.21,0,0,1,.84,9.08,18,18,0,0,1-.49,3.42c-.16.59-.34,1.18-.51,1.77H19.26c0-.06,0-.1,0-.14a17.33,17.33,0,0,1-1-5.38A34,34,0,0,1,19,7.83c.12-.58.25-1.15.38-1.73Zm10-1c0-.67,0-1.32,0-2a1.86,1.86,0,0,0-1.85-1.74c-.78,0-1.55,0-2.33,0A1.76,1.76,0,0,0,9.5,2.73a6.05,6.05,0,0,0-.11,1.21c0,.39,0,.79,0,1.2Z"
      />
    </svg>
  );
};