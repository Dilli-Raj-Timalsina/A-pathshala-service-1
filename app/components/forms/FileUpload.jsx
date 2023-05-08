import React from 'react';

function FileUpload(props) {
  const { label, onChange, value } = props;

  return (
    <div className="mb-4">
      <label htmlFor="thumbnail" className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      {value ? (
        <img
          src={value}
          alt="Course thumbnail"
          className="mb-2"
          style={{ maxWidth: '100%' }}
        />
      ) : null}
      <div className="flex items-center">
        <label
          htmlFor="thumbnail-upload"
          className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
          <span className="ml-2 text-sm text-gray-600">
            Upload a file or drag and drop
          </span>
          <input
            id="thumbnail-upload"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={onChange}
          />
        </label>
        {value ? (
          <button
            type="button"
            className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
            onClick={() => onChange({ target: { value: '' } })}
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default FileUpload;
