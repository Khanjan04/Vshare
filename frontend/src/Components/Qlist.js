import React,{useState} from 'react';
import {projectFirestore,timestamp} from '../firebase/config';
import useFirestore from '../hooks/useFirestore';
const Qlist = () =>{

		const{docs} = useFirestore('questions');
		const[question, setQuestion] = useState(null);
		const[entered, setEntered] = useState(null);
		
		const handleQuestion=(e)=>{
			setQuestion(e.target.value);
		}
		
		const handleChange =(e)=>{
			e.preventDefault();
			const createdAt = timestamp();
			let q = question;
			projectFirestore.collection('questions').add({question:question,createdAt:createdAt}).then(function(docRef) {
    			console.log("Document written with ID: ", docRef.id);
    			setQuestion(null);
    			
			})
			.catch(function(error) {
    			console.error("Error adding document: ", error);
			});		
			
			projectFirestore.collection("questions").get().then((querySnapshot) => {
    			querySnapshot.forEach((doc) => {
      			//console.log("Hello there",doc.data().a);
    			});
			});
		}
		
		return (
		<div>
			<div>
				<form onSubmit={handleChange}>
					<label>
						Enter Question :
						<input type = 'text' onChange = {handleQuestion}/>
					</label>
					<label className='plus-button'>
						+
						<input type="submit" value='Submit' />						
					</label>
				</form>
			</div>
		
			<div>
				<ol className = 'rounded-list'>
					{docs && docs.map(doc=>(
						<div>
						<li>{doc.question}</li>
							<ol className ='rectangle-list'>
								{doc.answer && doc.answer.map(ans=>(							
									<li>{ans}</li>
								))}
							</ol>						
						<div className='plus-buttonu'><span></span></div></div>
					))}			
				</ol>				 
			</div>
		</div>
		);
}
export default Qlist;
