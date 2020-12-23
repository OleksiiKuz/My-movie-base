import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({ movie, type }) => {

	const { RemoveMovieFromWatchlist, AddMovieToWatched, RemoveMovieFromWatched, MoveToWatchlist } = useContext(GlobalContext);
	return (
		<div className='inner-card-controls'>
			{type === 'watchlist' && (
				<div>
					<button className='ctrl-btn'
						onClick={() => AddMovieToWatched(movie)}>
						<i className='fa-fw far fa-eye'></i>
					</button>
					<button className='ctrl-btn'
						onClick={() => RemoveMovieFromWatchlist(movie.id)}>
						<i className='fa-fw fa fa-times'></i>
					</button>
				</div>
			)}

			{type === 'watched' && (
				<div>
					<button className='ctrl-btn'
						onClick={() => MoveToWatchlist(movie)}>
						<i className='fa-fw far fa-eye-slash'></i>
					</button>
					<button className='ctrl-btn'
						onClick={() => RemoveMovieFromWatched(movie.id)}>
						<i className='fa-fw fa fa-times'></i>
					</button>
				</div>
			)}
		</div>
	)
};
