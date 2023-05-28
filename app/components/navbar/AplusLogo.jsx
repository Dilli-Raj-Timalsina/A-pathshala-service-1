import Image from 'next/image';
import React from 'react';

const AplusLogo = () => {
  return (
    <div className="flex text-3xl font-bold items-center justify-center">
      <Image
        src={'/logo.png'}
        width={100}
        height={100}
        className="w-10 h-10"
      ></Image>
      Pathshala
    </div>
  );
};

export default AplusLogo;
