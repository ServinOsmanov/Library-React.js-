import dispatcher from '../dispatcher/AppDispatcher';

export default {
	LoadBookListPage() {
		dispatcher.dispatch({type: 'LOAD_LIST_OF_BOOKS'});
	},

	LoadBook(props) {
		dispatcher.dispatch({type: 'LOAD_BOOK', value: props});
	},

	LoadAuthor(props) {
		dispatcher.dispatch({type: 'LOAD_AUTHOR', value: props});
	},

	LoadGenre(props) {
		dispatcher.dispatch({type: 'LOAD_GENRE', value: props});
	},

	LoadPopUpGenre(props) {
		dispatcher.dispatch({type: 'LOAD_POPUP_GENRE', value: props});
	},

	LoadPopUp(props) {
		dispatcher.dispatch({type: 'LOAD_POPUP', value: props});
	}
}