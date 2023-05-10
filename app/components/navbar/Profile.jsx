import React, { useContext } from 'react';
import Image from 'next/image';
import { userContext } from '@/app/layout';
const Profile = ({ data }) => {
  const { user } = useContext(userContext);
  console.log(data);
  return (
    <div className="flex flex-grow justify-end">
      {!user?.img ? (
        <span className="bg-blue-400 text-white flex justify-center items-center h-10 w-10  rounded-full text-center">
          {user.name[0]}
        </span>
      ) : (
        <img
          src={'/icon.svg'}
          width={39}
          height={39}
          className=" rounded-full mr-2"
          alt="Profile"
        />
      )}
    </div>
  );
};

export default Profile;
