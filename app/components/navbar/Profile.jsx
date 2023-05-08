import React, { useContext } from 'react';
import Image from 'next/image';
import { userContext } from '@/app/layout';
const Profile = ({ data }) => {
  const { user } = useContext(userContext);
  console.log(data);
  return (
    <div className="flex flex-grow justify-end">
      <Image
        src={`${user?.url ? user.url : '/icon.svg'}`}
        width={39}
        height={39}
        alt="Profile Picture"
        className="rounded-full"
      ></Image>
    </div>
  );
};

export default Profile;
