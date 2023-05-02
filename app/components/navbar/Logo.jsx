import Link from 'next/link';
import Icon from './Icon';
function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/">
        <Icon />
      </Link>
    </div>
  );
}
export default Logo;
