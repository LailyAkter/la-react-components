import React from 'react';

const TextArea=(props)=>{
	return(
		<textarea className={props.className} onChange={props.onChange} style={props.style} placeholder={props.placeholder}></textarea>
	)
	
}

export default TextArea;