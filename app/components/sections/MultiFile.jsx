'use client';
import React, { useState } from 'react';
import axios from 'axios';
//// ONLY FOR TESTING PURPOSE
const VideoUploadForm = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadPaused, setUploadPaused] = useState(false);
  const [fileData, setFileData] = useState(null);

  const handleFileSelect = (event) => {
    setFileData(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', fileData);

    try {
      axios.post(
        'https://httpbin.org/post',
        formData,

        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: cookie,
          },
          onUploadProgress: (progressEvent) => {
            setUploadProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        }
      );

      console.log('Upload complete:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  const handlePauseUpload = () => {
    setUploadPaused(true);
  };

  const handleResumeUpload = async () => {
    setUploadPaused(false);

    // Read the file and send only the remaining bytes
    const reader = new FileReader();
    reader.onloadend = async () => {
      const remainingBytes = reader.result.slice(uploadProgress);
      const remainingFileData = new Blob([remainingBytes], {
        type: fileData.type,
      });
      const remainingFormData = new FormData();
      remainingFormData.append('file', remainingFileData);

      await axios.post('https://httpbin.org/post', remainingFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: cookie,
        },
        onUploadProgress: (progressEvent) => {
          setUploadProgress(
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              uploadProgress
          );
        },
      });
    };
    reader.readAsBinaryString(fileData.slice(uploadProgress));
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
      {uploadPaused ? (
        <button onClick={handleResumeUpload}>Resume</button>
      ) : (
        <button onClick={handlePauseUpload}>Pause</button>
      )}
      <progress value={uploadProgress} max="100" />
    </div>
  );
};

export default VideoUploadForm;
