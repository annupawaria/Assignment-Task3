import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');
  const [preview, setPreview] = useState(null);

  // Handle file selection and detect file type
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      const type = selectedFile.type.split('/')[0]; // Get file type (image, audio, video, etc.)
      setFileType(type);

      // Preview the file using FileReader
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Render the file preview based on the file type
  const renderPreview = () => {
    switch (fileType) {
      case 'image':
        return <img src={preview} alt="Preview" width="300" />;
      case 'audio':
        return <audio controls src={preview}></audio>;
      case 'video':
        return <video controls width="300" src={preview}></video>;
      case 'application': // For PDFs
        return <embed src={preview} width="300" height="400" type="application/pdf" />;
      default:
        return <p>File type not supported for preview.</p>;
    }
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <h3>File Preview:</h3>
          {renderPreview()}
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;
