import React from 'react';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import Title from './Title'
import Author from './Author'
import Genre from './Genre'
import PopUp from './PopUp'
import PopUpForGenrePage from './PopUpForGenrePage'


const App = () => {
	return(
    	<main>
    		<Route exact path={'/'} component={BookList}/>  
    		<Route exact path={'/:author'} component={PopUp}/>
    		<Route exact path={'/Genre/:genre/:author'} component={PopUpForGenrePage}/>  
    		<Route path={'/TitlePage/:title'} component={Title}/> 
    		<Route path={'/Author/:name'} component={Author}/> 
    		<Route path={'/Genre/:genre'} component={Genre}/>
    	</main>
  	)
}

export default App;