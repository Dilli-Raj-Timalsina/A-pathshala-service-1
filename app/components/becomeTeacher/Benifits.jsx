import Image from 'next/image';
import Link from 'next/link';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="w-full min-h-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-gray-600 leading-relaxed mb-6">{description}</div>
        <Link
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Learn More
        </Link>
      </div>
      <div className="w-full md:w-1/2 md:ml-8 order-1 md:order-2">
        <div className=" w-80 flex items-center justify-center h-full">
          <Image
            src={image}
            alt={title}
            height={400}
            width={200}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Overview of the Benefits
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <BenefitCard
            title="Build Your Brand"
            description="Create a strong online presence and establish yourself as an expert in your field."
            image={'/growth.png'}
          />
          <BenefitCard
            title="Expand Your Reach"
            description="Reach students all over the world and make a positive impact on their lives."
            image={'/reach.png'}
          />
          <BenefitCard
            title="Offer High-Quality Courses"
            description="Provide engaging and informative courses that will help your students succeed."
            image={'/quality.png'}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
