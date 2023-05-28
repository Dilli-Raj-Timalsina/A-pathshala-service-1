import Link from 'next/link';
import Icon from './Icon';
import JustLogo from '../data/Logo';
import AplusLogo from './AplusLogo';

function Logo() {
  return (
    <div className="z-10">
      <Link href="/">
        <div className="flex md:hidden">
          <JustLogo />
        </div>
        <div className="hidden md:flex">
          <AplusLogo />
        </div>
      </Link>
    </div>
  );
}
export default Logo;
