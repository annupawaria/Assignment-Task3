import React from 'react'
import FileUploadComponent from './components/FileUploadComponent'
import FirebaseAuth from './components/FirebaseAuth'
import ImageUploadAndManipulate from './components/ImageUploadAndManipulate'

const App = () => {
  return (
    <div>


      <FileUploadComponent/>
      <FirebaseAuth/>
      <ImageUploadAndManipulate/>
    </div>
  )
}

export default App