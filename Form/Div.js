import React from 'react';

const Div=(props)=>{
	return(
		<div className={props.ClassName}>{props.children}</div>
	)
}

export default Div;