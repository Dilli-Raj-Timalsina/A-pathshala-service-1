'use client';
// import { useState } from 'react';

// const AddSection = () => {
//   const [sections, setSections] = useState([
//     { name: '', title: '', videos: [], materials: [] },
//   ]);
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

//   const handleAddSection = () => {
//     setSections([
//       ...sections,
//       { name: '', title: '', videos: [], materials: [] },
//     ]);
//     setCurrentSectionIndex(sections.length);
//   };

//   const handleRemoveSection = (index) => {
//     setSections([...sections.slice(0, index), ...sections.slice(index + 1)]);
//     setCurrentSectionIndex(
//       currentSectionIndex > index
//         ? currentSectionIndex - 1
//         : currentSectionIndex
//     );
//   };

//   const handleSectionChange = (index, field, value) => {
//     const newSections = [...sections];
//     newSections[index][field] = value;
//     setSections(newSections);
//   };

//   const handleAddVideo = (index, e) => {
//     const video = e.target.files[0];
//     const newSections = [...sections];
//     newSections[index].videos.push({ file: video, name: video.name });
//     setSections(newSections);
//   };

//   const handleAddMaterial = (index, e) => {
//     const material = e.target.files[0];
//     const newSections = [...sections];
//     newSections[index].materials.push({ file: material, name: material.name });
//     setSections(newSections);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleAddSection();
//     // Send data to backend server
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className={`${index !== currentSectionIndex ? 'hidden' : ''}`}
//         >
//           <div className="mb-6">
//             <label
//               htmlFor={`section-name-${index}`}
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Section Name
//             </label>
//             <input
//               type="text"
//               id={`section-name-${index}`}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={section.name}
//               onChange={(e) =>
//                 handleSectionChange(index, 'name', e.target.value)
//               }
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor={`section-title-${index}`}
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Section Title
//             </label>
//             <input
//               type="text"
//               id={`section-title-${index}`}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               value={section.title}
//               onChange={(e) =>
//                 handleSectionChange(index, 'title', e.target.value)
//               }
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 font-bold mb-2">Videos</label>
//             {section.videos.map((video, videoIndex) => (
//               <div key={videoIndex} className="mb-2 flex items-center">
//                 <span className="mr-2">{video.name}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() =>
//                     handleSectionChange(index, 'videos', [
//                       ...section.videos.slice(0, videoIndex),
//                       ...section.videos.slice(videoIndex + 1),
//                     ])
//                   }
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mb-2">
//               <input
//                 type="file"
//                 accept="video/*"
//                 onChange={(e) => handleAddVideo(index, e)}
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 font-bold mb-2">
//               Study Materials
//             </label>
//             {section.materials.map((material, materialIndex) => (
//               <div key={materialIndex} className="mb-2 flex items-center">
//                 <span className="mr-2">{material.name}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() =>
//                     handleSectionChange(index, 'materials', [
//                       ...section.materials.slice(0, materialIndex),
//                       ...section.materials.slice(materialIndex + 1),
//                     ])
//                   }
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mb-2">
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.ppt"
//                 onChange={(e) => handleAddMaterial(index, e)}
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <button
//               type="button"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={() => setCurrentSectionIndex(currentSectionIndex + 1)}
//             >
//               {index === sections.length - 1 ? 'Add Section' : 'Next Section'}
//             </button>
//             {index !== 0 && (
//               <button
//                 type="button"
//                 className="ml-2 text-red-500"
//                 onClick={() => handleRemoveSection(index)}
//               >
//                 Remove Section
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Submit All Sections
//       </button>
//     </form>
//   );
// };

// export default AddSection;
import { useState, useContext } from 'react';
import { courseContext } from '@/app/become-teacher/create-course/page';
import BounceSpinners from '../spinners/BounceSpinners';
import axios from 'axios';
const AddSection = ({ section, onChange, onRemove }) => {
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { courseId } = useContext(courseContext);

  const [name, setName] = useState(section.name);
  const [title, setTitle] = useState(section.title);
  const [videos, setVideos] = useState(section.videos);
  const [materials, setMaterials] = useState(section.materials);
  const handleNameChange = (e) => {
    setName(e.target.value);
    onChange({ ...section, name: e.target.value });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onChange({ ...section, title: e.target.value });
  };

  const handleVideoFileChange = (event) => {
    setVideos([...event.target.files]);
    console.log(event.target.files);
    // console.log([...videos]);
  };
  // const handleVideoFileChange = (e, index) => {
  //   const newVideos = [...videos];
  //   newVideos[index].file = e.target.files[0];
  //   // setVid(e.target.files[0]);
  //   onChange({ ...section, videos: newVideos });
  // };

  // const handleVideoNameChange = (e, index) => {
  //   const newVideos = [...videos];
  //   newVideos[index].name = e.target.value;
  //   setVideos(newVideos);
  //   onChange({ ...section, videos: newVideos });
  // };

  const handleAddVideo = () => {
    setVideos([...videos, { file: null }]);
    onChange({ ...section, videos: [...videos, { file: null }] });
    // console.log(videos);
  };

  const handleRemoveVideo = (index) => {
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
    onChange({ ...section, videos: newVideos });
  };

  const handleMaterialFileChange = (e, index) => {
    const newMaterials = [...materials];
    newMaterials[index].file = e.target.files[0];
    setMaterials(newMaterials);
    onChange({ ...section, materials: newMaterials });
  };

  // const handleMaterialNameChange = (e, index) => {
  //   const newMaterials = [...materials];
  //   newMaterials[index].name = e.target.value;
  //   setMaterials(newMaterials);
  //   onChange({ ...section, materials: newMaterials });
  // };

  const handleAddMaterial = () => {
    setMaterials([...materials, { file: null }]);
    onChange({
      ...section,
      materials: [...materials, { file: null }],
    });
  };

  const handleRemoveMaterial = (index) => {
    const newMaterials = [...materials];
    newMaterials.splice(index, 1);
    setMaterials(newMaterials);
    onChange({ ...section, materials: newMaterials });
  };
  const handleSave = async () => {
    console.log(videos);
    // setIsSubmitting(true);
    let formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    // formData.append('binary', vid);
    videos.forEach((file) => {
      formData.append('binary', file);
    });
    console.log(formData);
    try {
      const res = await axios.post(
        'https://a-pathshala-service-2.onrender.com/api/v1/course/uploadFolder',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (ProgressEvent) => {
            setProgress(
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
            );
          },
        }
      );
      if (res.ok) {
        setProgress(0);
        setIsSubmitted(true);
        setIsSubmitting(false);
        // alert('Course created successfully!');
      }
    } catch (error) {
      setProgress(0);

      setIsSubmitted(false);
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <h3 className=" font-extrabold text-2xl py-2">Section</h3>
      <div className="mb-2">
        <label
          className="block font-bold mb-2"
          htmlFor={`name-${section.name}`}
        >
          Name(eg: Chapter X)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`name-${section.name}`}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-2">
        <label
          className="block font-bold mb-2"
          htmlFor={`title-${section.title}`}
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`title-${section.title}`}
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-2">Videos</label>
        {videos.map((video, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              className="mr-2"
              type="file"
              multiple
              onChange={(e) => handleVideoFileChange(e, index)}
            />
            {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={video.name}
              onChange={(e) => handleVideoNameChange(e, index)}
            /> */}
            {/* <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
              onClick={() => handleRemoveVideo(index)}
            >
              -
            </button> */}
          </div>
        ))}
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleAddVideo}
        >
          Add Video
        </button>
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-2">Materials</label>
        {materials.map((material, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              className="mr-2"
              type="file"
              onChange={(e) => handleMaterialFileChange(e, index)}
            />
            {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={material.name}
              onChange={(e) => handleMaterialNameChange(e, index)}
            /> */}
            {/* <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
              onClick={() => handleRemoveMaterial(index)}
            >
              -
            </button> */}
          </div>
        ))}
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleAddMaterial}
        >
          Add Material
        </button>
      </div>
      {isSubmitting ? (
        <span>
          <BounceSpinners size={'xl'} />
        </span>
      ) : (
        <div className="flex mt-6 justify-around">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save Section
          </button>
          {progress > 0 && (
            <div className="relative z-50 pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
          )}
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onRemove}
          >
            Remove Section
          </button>
        </div>
      )}
    </div>
  );
};

export default AddSection;
