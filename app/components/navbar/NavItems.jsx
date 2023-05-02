import React from 'react';
import NavLink from './NavLink';
const NavItems = () => {
  return (
    <div className="flex gap-2 justify-evenly">
      <NavLink href={'/'} label={'Home'} />
      <NavLink href={'/course'} label={'Courses'} />
      <NavLink href={'/blog'} label={'Blog'} />
      <NavLink href={'/contact'} label={'Contact'} />
    </div>
  );
};

export default NavItems;
