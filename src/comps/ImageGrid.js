/*
import React from 'react';
import useFirestore from '../hooks/useFirestore';
const ImageGrid =() => {
	const {docs} = useFirestore('images');
	
	return(
		<div>
			<div className ='img-grid'>
				{docs && docs.map(doc=>(
					<div className = 'img-wrap' key = {doc.id}>
						<img src = {doc.url} alt = 'no pic'/>
					</div>
				))}
			</div>
			
			
			{docs && docs.map(doc =>(
				<h1>{doc.text}</h1>
			))}
			
		</div>
	)
}
export default ImageGrid;
*/



import React from 'react';
import useFirestore from '../hooks/useFirestore';
import './Cards.css';
import CardItem from './CardItem';

const ImageGrid =() => {
	const {docs} = useFirestore('images');
	
	return(		
			<div className='cards' >
				<h1>Check out these EPIC Events!</h1>
					<div className='cards__container'>
						<div className='cards__wrapper'>
							 
							 <div className = 'img-grid'>
							 
									{docs && docs.map(doc=>(	
										<div className='cards__items' key={doc.id}>
																		
						   							<CardItem
										   			   	  src={doc.url}
														  text={doc.text}
														  label={doc.club}				      			  
													/>
										</div>
									))}
							</div>		
							
						</div>
					</div>									
			</div>			
		
	)
}

export default ImageGrid;




/*
{docs is true}
	while(docs is true and i%3){
		<ul>
		*/
		
