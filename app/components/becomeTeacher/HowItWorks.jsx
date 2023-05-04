import Image from 'next/image';
// import howItWorksImage from '../../public/images/how-it-works-image.png';

const Step = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">
          Step {number}: {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">How It Works</h1>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image src={'/how.png'} width={50} height={50} alt="How it works" />
          </div>
          <div className="w-full md:w-1/2 md:ml-8">
            <Step
              number="1"
              title="Create Your Course"
              description="Use our easy-to-use course creation tools to build your course and add your content."
              icon={<i className="fas fa-pencil-alt"></i>}
            />
            <Step
              number="2"
              title="Set Your Pricing"
              description="Choose the price for your course and decide how you want to handle payments."
              icon={<i className="fas fa-dollar-sign"></i>}
            />
            <Step
              number="3"
              title="Add Sections "
              description="Track your students' progress and communicate with them through our platform."
              icon={<i className="fas fa-users"></i>}
            />
            <Step
              number="4"
              title="Manage Your Students"
              description="Track your students' progress and communicate with them through our platform."
              icon={<i className="fas fa-users"></i>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
