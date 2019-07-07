import React from 'react';

const Input=(props)=>{
	return(
		<input 
			placeholder={props.placeholder}
			className={props.className} 
			onChange={props.onChange}
			style={props.style}
			type={props.type}
			value={props.value}
			id={props.id}
		/>
	)
	
}

export default Input;