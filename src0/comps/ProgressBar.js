import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ file, setFile,text,club}) => {
  const { progress, url } = useStorage({file,text,club});

  useEffect(() => {
    if (url) {
    	
      setFile(null);
      
      
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar" style = {{ width: progress + '%' }}>
    </div>
  );
} 

export default ProgressBar;
