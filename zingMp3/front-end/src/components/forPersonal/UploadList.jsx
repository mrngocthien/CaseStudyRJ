import React, { useEffect, useState } from 'react'
import { storage } from '../../config/firebase'
import ReactAudioPlayer from 'react-audio-player';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'
import { toast } from 'react-toastify';

const UploadList = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [musicList, setMusicList] = useState([]);

  const musicListRef = ref(storage, 'uploadMusic/')

  const handleFileUpload = (event) => { 
    setFileUpload(event.target.files[0]);
  }

  const uploadFile = () => { 
    if (fileUpload == null) return;
    const fileRef = ref(storage, `uploadMusic/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref). then((url) => {
        setMusicList((prev) => [...prev, url])
      })
      toast.success('Tải lên thành công !', {theme: 'colored'})
    })
  }

  useEffect(() => {
    //get url data firebase storage 
    listAll(musicListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setMusicList((prev) => [...prev, url])
        })
      })
    })
  }, [])
  console.log({musicList})
  return (
    <div>
      <div className='flex gap-4 justify-between items-center w-1/2 m-auto'>
        <input 
          type="file" name='file' accept='audio/mp3'
          className='file:rounded-xl file:bg-dark-green file:px-4 file:py-1 file:text-white file:border-none file:hover:bg-dark-orange file:cursor-pointer'
          onChange={(e) => handleFileUpload(e)}
        />
        <button 
          className='rounded-xl px-4 py-1 bg-red-800  hover:bg-dark-orange'
          onClick={uploadFile}
        >
          Tải lên
        </button>
      </div>
      <div className='py-5'>
        <table className='flex flex-col items-center gap-2'>
          <thead>
            <tr>
              <th className='text-lg font-thin'>DANH SÁCH TẢI LÊN</th>
            </tr>
          </thead>
          <tbody className='flex flex-col gap-2'>
            {musicList?.map((url, index) => (
              <tr key={index}>
                <td>
                <ReactAudioPlayer
                  src={url}
                  controls
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UploadList