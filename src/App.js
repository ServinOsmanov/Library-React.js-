import React from 'react';
import { Route } from 'react-router-dom';

import BookList from './pages/BookList';
import TitlePage from './pages/TitlePage';
import AuthorPage from './pages/AuthorPage';
import GenrePage from './pages/Genre';
import PopUp from './pages/PopUp'
import PopUpForGenrePage from './pages/PopUpForGenrePage';


const App = () => {
	return(
    	<div>
    		<Route exact path={'/'} component={BookList}/>  
            <Route path={'/TitlePage/:title'} component={TitlePage}/>
    	    <Route path={'/Author/:name'} component={AuthorPage}/>
            <Route path={'/Genre/:genre'} component={GenrePage}/>
            <Route exact path={'/Genre/:genre/:author'} component={PopUpForGenrePage}/> 
            <Route exact path={'/:author'} component={PopUp}/>
        </div>
  	)
}

export default App;
