const Testimonial = ({ text, name, image }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-testimonial-gradient w-1/2 rounded-lg p-8 mb-8">
        <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
          <img src={image} alt={name} width={48} height={48} />
        </div>
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="text-gray-500">Student</div>
        </div>
        <div className="text-lg font-medium mb-4">{text}</div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default Testimonial;
