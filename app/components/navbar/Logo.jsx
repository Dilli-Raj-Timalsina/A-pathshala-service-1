import Link from 'next/link';
import Icon from './Icon';
import JustLogo from '../data/Logo';

function Logo() {
  return (
    <div className="z-10">
      <Link href="/">
        <div className="flex md:hidden">
          <JustLogo />
        </div>
        <div className="hidden md:flex">
          <Icon />
        </div>
      </Link>
    </div>
  );
}
export default Logo;
