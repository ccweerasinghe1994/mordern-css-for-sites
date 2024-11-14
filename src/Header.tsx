import { FC } from 'react';
import MyBrand from './MyBrand';

const Header: FC = () => {
  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="m20 4l-2 14.5l-6 2l-6-2L4 4z" />
          <path d="M8.5 8h7L11 12h4l-.5 3.5l-2.5.75l-2.5-.75l-.1-.5" />
        </g>
      </svg>
      <MyBrand>cgnexus</MyBrand>
      <search role="search">
        <input
          type="search"
          placeholder="Search"
          autoFocus
        />
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="primary"
            d="M15.5 14l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28A6.471 6.471 0 0 1 9.5 16 6.5 6.5 0 1 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79zm-6 0c2.49 0 4.5-2.01 4.5-4.5S11.99 5 9.5 5 5 7.01 5 9.5 7.01 14 9.5 14z"
          ></path>
        </svg>
      </search>
    </nav>
  );
};

export default Header;
