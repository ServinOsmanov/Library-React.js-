import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js';
import BookList from './BookList';
import { Modal, Button} from 'react-bootstrap'


function PopUp(props) {
	let PopUpIndex;
	let result = Data.map((data, index) => {
		if(props.match.params.author === data.Author) {
			PopUpIndex = index
			return(
				<li>
					<Link to={`/Author/${data.Author}`}>{data.Author}</Link>
				</li>
			)
		}
	})

	let result1 = Data[PopUpIndex].books.map((data, index) => {
		return(
			<li>
				<Link to={`/TitlePage/${Data[PopUpIndex].books[index].Title}`}>{Data[PopUpIndex].books[index].Title}</Link>
			</li>
		)
	}) 

  return(
  	<div>
  	<BookList/>
    	<Modal.Dialog>
      		<Modal.Header>
      			<Button bsStyle="link" className='btn'><Link to={'/'}>x</Link></Button>
        		<Modal.Title>{result}</Modal.Title>
      		</Modal.Header>

    		<Modal.Body>
        		{result1}
      		</Modal.Body>
    	</Modal.Dialog>
    </div>
  )
}

export default PopUp