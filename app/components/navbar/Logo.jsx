import Link from 'next/link';
import Icon from './Icon';
import JustLogo from '../data/Logo';
function Logo() {
  return (
    <div className="z-10">
      <Link href="/">
        {/* <JustLogo /> */}
        <Icon />
      </Link>
    </div>
  );
}
export default Logo;
