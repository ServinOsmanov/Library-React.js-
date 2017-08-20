import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js';

function Author(props) {
	let  AuthorIndex;
	let result = Data.map((data, index) => {
		if(props.match.params.name === data.Author) {
			AuthorIndex = index;
			return(
				<div>
					<h1>{data.Author}</h1>
					<p dangerouslySetInnerHTML={{__html: data.Biography}}></p>
				</div>
			)	
		}
	})

	let AmountOfLi = Data[AuthorIndex].books.map((data, index) => {
		return(
			<li>
				<Link to={`/TitlePage/${Data[AuthorIndex].books[index].Title}`}>{Data[AuthorIndex].books[index].Title}</Link>
			</li>
		)
	})

	return(
		<div className='blockquote'>
			<p className='linkToMainPage'>
				<Link to={'/'}>Back to the main page</Link>
			</p>

			<ul className='ulClass'>
				{AmountOfLi}	
			</ul>
			{result}
		</div>
	)
}

export default Author;
