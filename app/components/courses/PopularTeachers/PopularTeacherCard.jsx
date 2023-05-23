import Link from 'next/link';
import Image from 'next/image';
import { Source_Sans_Pro } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const ssp = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '600',
});
const headingFont = ssp.className;

const PopularTeacherCard = ({ teacher }) => {
  // console.log(teacher.image);
  return (
    <Link className=" group" href={`/teachers/${teacher.id}`}>
      <div
        className={`bg-white shadow-sm border-2 rounded-lg overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300`}
      >
        <div className="flex justify-around  items-center">
          <img
            src={teacher.image}
            alt={`Photo of ${teacher.name}`}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-around items-center">
          <h2 className={`text-lg ${ssp.className} mb-2`}>{teacher.name}</h2>
          <div className="flex justify-center items-center gap-1">
            <Image
              src={'/star.svg'}
              alt={teacher.name}
              width={20}
              height={20}
            />
            <p className="text-yellow-500 top-2 font-bold">
              {teacher.rating.toFixed(1)}
            </p>
          </div>
        </div>
        <div className="py-4 px-6">
          <p
            className={headingFont + ' text-gray-600 text-sm line-clamp-4 mb-4'}
          >
            {teacher.bio}
          </p>
          <div className="flex justify-between items-center">
            <button
              //
              className="bg-yellow-400 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularTeacherCard;
