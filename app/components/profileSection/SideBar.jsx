'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const SideBar = () => {
  const currRoute = usePathname();
  const selected =
    ' text-blue-500 bg-slate-50 px-2 rounded-s-full text-sm font-bold ';
  const others = ' hover:rounded-s-full text-black px-2 text-sm font-bold ';

  return (
    <aside className="bg-white border-e text-black h-screen w-1/5 flex flex-col ">
      <div className="flex flex-col gap-3 ps-4 pt-8">
        <Link
          href="/account-profile/purchase"
          className={` ${
            currRoute === '/account-profile/purchase' ? selected : others
          } mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2   font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          A+ Score
        </Link>
        <Link
          href="/account-profile/mycourses"
          className={` ${
            currRoute === '/account-profile/mycourses' ? selected : others
          }mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2  font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="20"
            height="20"
            className="w-6 me-2 h-6"
            viewBox="0 0 1920 1920"
          >
            <path
              d="M1750.176 0v1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823Zm-338.823 1468.235H463.776c-89.223 0-166.023 60.989-179.576 140.047-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918v-112.94Zm-56.47-564.706h-790.59v112.942h790.588V903.529Zm56.47-564.705h-903.53v451.764h903.53V338.824ZM620.765 677.647h677.647V451.765H620.765v225.882Z"
              fillRule="evenodd"
            />
          </svg>
          Dashboard
        </Link>
        <Link
          href="/account-profile/wishlist"
          className={` ${
            currRoute === '/account-profile/wishlist' ? selected : others
          }mt-1 sm:mt-0 flex  sm:ml-3 px-3 py-2  font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 me-2 h-6"
            id="Layer_1"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 29 29"
          >
            <path d="m14.854 6.083-.354.353-.354-.354a6.5 6.5 0 0 0-9.192 9.192l.354.354L14.5 24.82l9.192-9.192.354-.354a6.5 6.5 0 0 0-9.192-9.191z" />
            <path d="m14.854 6.083-.354.353-.354-.354a6.5 6.5 0 0 0-9.192 9.192l.354.354L14.5 24.82l9.192-9.192.354-.354a6.5 6.5 0 0 0-9.192-9.191z" />
          </svg>
          WishList
        </Link>
        <Link
          href="/account-profile/purchase"
          className={` ${
            currRoute === '/account-profile/purchase' ? selected : others
          }mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2  font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          Purchase History
        </Link>
        <Link
          href="/account-profile/settings"
          className={` ${
            currRoute === '/account-profile/settings' ? selected : others
          }mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2  font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 me-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.67 5.5C7.67 5.09 8.01 4.75 8.42 4.75C8.83 4.75 9.17 5.09 9.17 5.5V9.4C9.17 9.81 8.83 10.15 8.42 10.15C8.01 10.15 7.67 9.81 7.67 9.4V5.5ZM9.52282 16.4313C9.31938 16.5216 9.17 16.7132 9.17 16.9358V18.5C9.17 18.91 8.83 19.25 8.42 19.25C8.01 19.25 7.67 18.91 7.67 18.5V16.9358C7.67 16.7132 7.5206 16.5216 7.31723 16.4311C6.36275 16.0064 5.7 15.058 5.7 13.95C5.7 12.45 6.92 11.22 8.42 11.22C9.92 11.22 11.15 12.44 11.15 13.95C11.15 15.0582 10.4791 16.0066 9.52282 16.4313ZM16.33 18.5C16.33 18.91 15.99 19.25 15.58 19.25C15.17 19.25 14.83 18.91 14.83 18.5V14.6C14.83 14.19 15.17 13.85 15.58 13.85C15.99 13.85 16.33 14.19 16.33 14.6V18.5ZM15.58 12.77C14.08 12.77 12.85 11.55 12.85 10.04C12.85 8.93185 13.5209 7.98342 14.4772 7.55873C14.6806 7.46839 14.83 7.27681 14.83 7.05421V5.5C14.83 5.09 15.17 4.75 15.58 4.75C15.99 4.75 16.33 5.09 16.33 5.5V7.06421C16.33 7.28681 16.4794 7.47835 16.6828 7.56885C17.6372 7.9936 18.3 8.94195 18.3 10.05C18.3 11.55 17.08 12.77 15.58 12.77Z"
              fill="#292D32"
            />
          </svg>
          Settings
        </Link>
        <Link
          href="/logout"
          className={` ${
            currRoute === '/account-profile/logout' ? selected : others
          }mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2  font-bold  hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-white"
        `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 me-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H15"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M19 12L15 8M19 12L15 16M19 12H9"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
