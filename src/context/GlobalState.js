import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial-state
const initialState = {
	watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
	watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
		localStorage.setItem('watched', JSON.stringify(state.watched));
	}, [state])


	//actions

	const AddMovieToWatchlist = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
	}

	const RemoveMovieFromWatchlist = (id) => {
		dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id })
	}

	const AddMovieToWatched = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })
	}

	const MoveToWatchlist = (movie) => {
		dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })
	}

	const RemoveMovieFromWatched = (id) => {
		dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id })
	}

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				AddMovieToWatchlist,
				RemoveMovieFromWatchlist,
				AddMovieToWatched,
				MoveToWatchlist,
				RemoveMovieFromWatched

			}}>
			{props.children}
		</GlobalContext.Provider>
	)

}