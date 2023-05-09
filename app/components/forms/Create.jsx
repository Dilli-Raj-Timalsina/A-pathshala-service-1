// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import InputField from '@/app/components/InputFiled';
// import Checkbox from '@/app/components/forms/CheckBox';
// import FileUpload from '@/app/components/forms/FileUpload';

// function CreateCourse() {
//   const router = useRouter();
//   const [course, setCourse] = useState({
//     title: '',
//     subtitle: '',
//     requirements: [],
//     description: '',
//     price: '',
//     discount: '',
//     language: '',
//     thumbnail: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleCheckboxChange = (event) => {
//     const isChecked = event.target.checked;
//     const value = event.target.value;
//     setCourse((prevCourse) => {
//       if (isChecked) {
//         return {
//           ...prevCourse,
//           requirements: [...prevCourse.requirements, value],
//         };
//       } else {
//         return {
//           ...prevCourse,
//           requirements: prevCourse.requirements.filter((req) => req !== value),
//         };
//       }
//     });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setCourse({ ...course, thumbnail: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(course);
//     const res = await fetch('/api/courses', {
//       method: 'POST',
//       body: JSON.stringify(course),
//     });
//     if (res.ok) {
//       alert('Course created successfully!');
//       setCourse({
//         title: '',
//         subtitle: '',
//         requirements: [],
//         description: '',
//         price: '',
//         discount: '',
//         language: '',
//         thumbnail: '',
//       });
//       router.push('/become-teacher/create-course/sections');
//     } else {
//       alert('Failed to create course.');
//     }
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//         className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Create a new course
//         </h1>
//         <InputField
//           label="Title"
//           name="title"
//           value={course.title}
//           onChange={handleInputChange}
//           required
//         />
//         <InputField
//           label="Subtitle"
//           name="subtitle"
//           value={course.subtitle}
//           onChange={handleInputChange}
//           required
//         />
//         <Checkbox
//           label="Requirements"
//           name="requirements"
//           options={['HTML', 'CSS', 'JavaScript']}
//           selectedOptions={course.requirements}
//           onChange={handleCheckboxChange}
//         />
//         <InputField
//           label="Description"
//           name="description"
//           value={course.description}
//           onChange={handleInputChange}
//           required
//           textarea
//         />
//         <InputField
//           label="Price"
//           name="price"
//           type="number"
//           value={course.price}
//           onChange={handleInputChange}
//           required
//         />
//         <InputField
//           label="Discount"
//           name="discount"
//           type="number"
//           value={course.discount}
//           onChange={handleInputChange}
//         />
//         <InputField
//           label="Language"
//           name="language"
//           value={course.language}
//           onChange={handleInputChange}
//           required
//         />
//         <FileUpload
//           label="Thumbnail"
//           name="thumbnail"
//           value={course.thumbnail}
//           onChange={handleFileChange}
//           onRemove={() => setCourse({ ...course, thumbnail: '' })}
//         />
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Create course
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateCourse;
