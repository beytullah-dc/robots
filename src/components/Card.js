import React from 'react';

const Card = ({name,id,email}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
		<h2>{name}</h2>
		<p>{email}</p>
		<img src={`https://robohash.org/${id}?200x200`} alt=''/>
		<div>
		</div>
		</div>
		);
}

export default Card;