import { useTheme } from '@mui/material';

export const RightCollapse = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="50" viewBox="0 0 15 70" color="inherit">
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="284.13"
        y1="-335.205"
        x2="321.789"
        y2="-364.628"
        gradientTransform="rotate(180 152.55 -157.995)"
      >
        <stop offset="0" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".035" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".265" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".499" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".741" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset="1" style={{ stopColor: 'currentColor' }}></stop>
      </linearGradient>
      <path fill="url(#a)" d="M0 0v70c0-8.284 15-2.938 15-15V15C15 2.875 0 8.284 0 0z"></path>
      <path fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m5.031 30 5 5-5 5"></path>
    </svg>
  );
};

export const LeftCollapse = () => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="50" viewBox="0 0 15 70" color="inherit">
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="284.131"
        y1="-335.205"
        x2="321.79"
        y2="-364.628"
        gradientTransform="matrix(1 0 0 -1 -290.1 -315.99)"
      >
        <stop offset="0" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".035" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".265" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".499" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset=".741" style={{ stopColor: 'currentColor' }}></stop>
        <stop offset="1" style={{ stopColor: 'currentColor' }}></stop>
      </linearGradient>
      <path fill="url(#a)" d="M0 15v40c0 12.062 15 6.716 15 15V0C15 8.284 0 2.875 0 15z"></path>
      <path fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9.969 40-5-5 5-5"></path>
    </svg>
  );
};
