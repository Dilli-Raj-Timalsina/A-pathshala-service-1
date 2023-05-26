import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          E-Learning Platform
        </Link>
        <nav className="space-x-4">
          <Link href="/courses" className="text-gray-600 hover:text-gray-800">
            Courses
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-gray-800">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
