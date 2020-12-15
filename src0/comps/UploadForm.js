import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
	const [text, setText] = useState(null);
	const[club,setClub] =useState(null);
	const[submit,setSubmit] = useState(false);
  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };


	const handleTextChange =(e) =>{
		let mytext = e.target.value;
		if(mytext){
			setText(mytext);
		}
		
	}
	const handleClubChange =(e) =>{
		let mytext = e.target.value;
		if(mytext){
			setClub(mytext);
		}
		
	}
	
	const handleSubmit = (e) =>{
		
			setSubmit(true);
		
		
	}
  return (
  	<div>
		<form >
		<div>
			<label>
			Event Name:
		  	<input type = 'text'  onChange = {handleTextChange}/>
		  </label>
		  </div>
		  <div>
		  <label>
			Club Name:
		  	<input type = 'text'  onChange = {handleClubChange}/>
		  </label>
		  </div>
		  <div>
		  <label className='plus-button'>
		  	
		  	
		    <input type="file" onChange={handleChange} />
		    <span>+</span>
		  </label>
		  </div>
		  
		 
		  
		 
		  
		  
		</form>
		<div className="output">
		    { error && <div className="error">{ error }</div>}
		    {/* file && <div>{ file.name }</div> */}
		    {file && text && <ProgressBar file={file} setFile={setFile}  text ={text} club={club}/> }
		</div>
	</div>
      
  );
}

export default UploadForm;
