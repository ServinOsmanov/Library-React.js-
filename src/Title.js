import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js';

function Title(props) {
	let result = Data.map((data, index) => {
		let result1 = data.books.map((data1,index) => {
			if(props.match.params.title === data.books[index].Title) {
				return(
					<div>
						<div className='cover'>
							<p className='author'>
								<Link to={`/Author/${data.Author}`}>{data.Author}</Link>
							</p>
							<p className='title'>{data.books[index].Title}</p>
						</div>

						<ul className="pageBookUl">
							<li>Author: {data.Author}</li>
							<li>Title: {data.books[index].Title}</li>
							<li>Genre:
								<Link to={`/Genre/${data.books[index].Genre}`}> {data.books[index].Genre}</Link>
							</li>
							<li>Summary: {data.books[index].Summary}</li>
						</ul>
					</div>
				)
			}
		})
		return result1;
	})
	return (
		<div>
			
			<p className='linkToMainPage'>
				<Link to={'/'}>Back to the main page</Link>
			</p>
			{result}
		</div>
	)
}

export default Title;

