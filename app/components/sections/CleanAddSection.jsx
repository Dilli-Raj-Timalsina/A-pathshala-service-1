'use client';
import { useState, useContext } from 'react';
import { courseContext } from '@/app/become-teacher/create-course/page';
import axios from 'axios';
import { cookieContext } from '@/app/layout';
const CleanAddSection = ({ section, onChange, onRemove }) => {
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { courseId } = useContext(courseContext);
  const { cookie } = useContext(cookieContext);

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
  };

  const handleMaterialFileChange = (e) => {
    setMaterials([...e.target.files]);
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    let formData = new FormData();
    formData.append('bucketName', courseId);
    formData.append('folderName', name);
    formData.append('folderTitle', title);
    videos.forEach((video) => {
      formData.append('binary', video);
    });
    materials.forEach((material) => {
      formData.append('binary', material);
    });
    try {
      const res = await axios.post(
        'https://a-pathshala-service-2.onrender.com/api/v1/course/uploadFolder',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: cookie,
          },

          onUploadProgress: (ProgressEvent) => {
            setProgress(
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
            );
          },
        }
      );
      console.log(res);

      if (res.status === 200) {
        setProgress(0);
        setIsSubmitting(false);
        setIsSubmitted(true);
        alert('Section Added Successfully');
      }
    } catch (error) {
      setProgress(0);
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
        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="file"
            multiple
            accept=".mp4,.avi,.wmv,.mov,.flv,.mkv"
            onChange={(e) => handleVideoFileChange(e)}
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-2">Materials</label>
        <div className="flex items-center mb-2">
          <input
            className="mr-2"
            type="file"
            multiple
            accept=".pdf,.ppt,.pptx,.doc,.docx"
            onChange={(e) => handleMaterialFileChange(e)}
          />
        </div>
      </div>
      {isSubmitting ? (
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"
            ></div>
          </div>
          <div className="text-center mt-2 text-xs font-semibold text-gray-600">
            {`${progress}%`}
          </div>
        </div>
      ) : (
        <div className="flex mt-6 justify-around">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save Section
          </button>
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

export default CleanAddSection;
