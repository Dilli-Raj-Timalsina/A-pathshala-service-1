import React from 'react';
import NavLink from './NavLink';
const NavItems = () => {
  return (
    <div className="flex justify-evenly">
      <NavLink href={'/teachers'} label={'Teachers'} />
      <NavLink href={'/courses'} label={'Courses'} />
      <NavLink href={'/blogs'} label={'Blog'} />
      <NavLink href={'/contact'} label={'Contact'} />
    </div>
  );
};

export default NavItems;
