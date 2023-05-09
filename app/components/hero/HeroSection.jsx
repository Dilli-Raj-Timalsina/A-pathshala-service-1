'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen  relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#F2F2F2"></stop>
              <stop offset="100%" stop-color="#FFFFFF"></stop>
            </linearGradient>
          </defs>
          <circle cx="25" cy="25" r="20" fill="url(#grad)" />
          <circle cx="50" cy="50" r="30" fill="url(#grad)" />
          <circle cx="75" cy="75" r="40" fill="url(#grad)" />
        </svg>
      </div>
      <div className="relative z-10 max-h-screen py-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2 mb-6 md:mb-0"
        >
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6">
            Empowering Teachers and Students in{' '}
            <span className="text-6xl text-sky-400"> Nepal </span>
          </h1>
          <p className="text-gray-800 text-lg mb-8">
            At A+ Pathshala, we believe in empowering individual teachers and
            students in Nepal by providing them with the tools and resources
            necessary to build and grow their brand. Our ed-tech platform offers
            personalized support and guidance to help teachers establish a
            strong online presence and succeed in the competitive world of
            online education. With our platform, students in Nepal can access
            high-quality courses from top teachers worldwide.
          </p>
          <Link
            href={'/signup'}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Join Our Community
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2"
        >
          <img src="/teacher.png" alt="Hero Image" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

// const Hero = () => {
//   return (
//     <div className="p-3 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
//       <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
//         <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
//           Empower your teaching with our edtech platform
//         </h1>
//         <div className="text-gray-200 text-xl lg:text-2xl mb-8">
//           Transform your teaching with our state-of-the-art platform. Reach
//           students worldwide with cutting-edge tools and resources that enable
//           you to create exceptional learning experiences.
//         </div>
//         <div className="flex justify-center gap-5 items-center">
//           <Link
//             href="#"
//             className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
//           >
//             <Link href={'#popular_teachers'}>Explore</Link>
//           </Link>
//           <Link
//             href="/signup"
//             className=" hover:bg-gray-200 bg-cta-blue-gradient text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
//           >
//             Join for Free
//           </Link>
//         </div>
//       </div>
//       <div className="lg:w-1/2">
//         <Image
//           src="/hero.jpg"
//           alt="Hero image"
//           width={800}
//           height={600}
//           className="rounded-lg shadow-xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
