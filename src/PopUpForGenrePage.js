import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js'
import { Modal, Button} from 'react-bootstrap'

function PopUpForGenrePage(props) {
	let PopUpIndex;
	let result = Data.map((data, index) => {
		if(props.match.params.author === data.Author) {
			PopUpIndex = index
			return(
				<li><Link to={`/Author/${data.Author}`}>{data.Author}</Link></li>
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
    	<Modal.Dialog>
      		<Modal.Header>
      			<Button bsStyle="link" className='btn'><Link to={`/Genre/${props.match.params.genre}`}>x</Link></Button>
        		<Modal.Title>{result}</Modal.Title>
      		</Modal.Header>

     		<Modal.Body>
        		{result1}
      		</Modal.Body>
    	</Modal.Dialog>
    )
}


export default PopUpForGenrePage;