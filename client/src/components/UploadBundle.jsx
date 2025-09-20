import React, { useState } from 'react';
import { Upload, Save } from 'lucide-react';


const UploadBundle = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.json')) {
      setFile(droppedFile);
      setStatus('File ready to upload');
    } else {
      setStatus('Please select a valid JSON file');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.json')) {
      setFile(selectedFile);
      setStatus('File ready to upload');
    } else {
      setStatus('Please select a valid JSON file');
      e.target.value = '';
    }
  };

  const handleUpload = async () => {
    if (file) {
      setIsUploading(true);
      setStatus('Uploading...');
      // Simulate upload
      setTimeout(() => {
        setStatus('Upload successful!');
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Upload FHIR Bundle</h2>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer hover:bg-gray-50 ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <Upload size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-gray-700 mb-2">Drag & drop your FHIR Bundle JSON here</p>
        <p className="text-sm text-gray-500 mb-4">or click anywhere to browse</p>
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
          disabled={isUploading}
        />
      </div>
      {file && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800">Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)</p>
        </div>
      )}
      {status && (
        <p className={`mt-2 text-sm ${
          status.includes('success') ? 'text-green-600' : 
          status.includes('failed') ? 'text-red-600' : 'text-blue-600'
        }`}>
          {status}
        </p>
      )}
      <button
        onClick={handleUpload}
        disabled={!file || isUploading}
        className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full md:w-auto"
      >
        <Save size={20} />
        <span>{isUploading ? 'Uploading...' : 'Save Bundle'}</span>
      </button>
    </div>
  );
};

export default UploadBundle;