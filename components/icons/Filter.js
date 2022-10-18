import * as React from "react";

const Filter = ({ ...props }) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="19" cy="19" r="19" fill="#1D1F22" />
    <path
      d="M10.9995 11H26.9996C27.5519 11 27.9996 11.4476 27.9996 11.9999L27.9998 13.5857C27.9999 13.851 27.8945 14.1054 27.7069 14.293L21.2924 20.7071C21.1049 20.8946 20.9995 21.149 20.9995 21.4142V27.7192C20.9995 28.3698 20.3881 28.8472 19.757 28.6894L17.757 28.1894C17.3118 28.0781 16.9995 27.6781 16.9995 27.2192V21.4142C16.9995 21.149 16.8942 20.8946 16.7066 20.7071L10.2924 14.2929C10.1049 14.1054 9.99951 13.851 9.99951 13.5858V12C9.99951 11.4477 10.4472 11 10.9995 11Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Filter;