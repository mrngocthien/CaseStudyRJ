import React, { useState } from 'react'

const UploadList = () => {
  const [fileSelected, setFileSelected] = useState();
  const handleFileSelected = (event) => { 
    setFileSelected(event.target.files[0]);
    console.log(event.target.files[0])
  }
  return (
    <div>
      <input 
        type="file" 
        name='file'
        className='file:rounded-xl file:bg-dark-green file:px-4 file:py-1 file:text-white file:border-none file:hover:bg-dark-orange file:cursor-pointer'
        onChange={(e) => handleFileSelected(e)}
      />
    </div>
  )
}

export default UploadList