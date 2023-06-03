import { useState } from 'react';
import FileUpload from 'react-material-file-upload';

const DragDrop = () => {
  const [files, setFiles] = useState([]);
  return (
    <FileUpload value={files} onChange={setFiles} />
  )
}

export default DragDrop