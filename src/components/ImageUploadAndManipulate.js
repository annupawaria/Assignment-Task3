import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadAndManipulate = () => {
  const [image, setImage] = useState(null);
  const [transformedImageUrl, setTransformedImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'your-upload-preset'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/your-cloud-name/image/upload', // Replace with your Cloudinary details
        formData
      );
      const imageUrl = response.data.secure_url;

      // Apply transformation (resize in this case)
      const transformedUrl = `${imageUrl.replace(
        '/upload/',
        '/upload/w_300,h_300,c_fill/'
      )}`; // 300x300 resize with cropping
      setTransformedImageUrl(transformedUrl);
    } catch (err) {
      console.error('Error uploading the image:', err);
    }
  };

  return (
    <div>
      <h2>Upload and Manipulate an Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload and Transform Image</button>

      {transformedImageUrl && (
        <div>
          <h3>Transformed Image:</h3>
          <img src={transformedImageUrl} alt="Transformed" width="300" />
        </div>
      )}
    </div>
  );
};

export default ImageUploadAndManipulate;
