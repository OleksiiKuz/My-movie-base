import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie }) => {

	const { AddMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

	let storedMovie = watchlist.find(item => item.id === movie.id);
	let storedMovieWatched = watched.find(item => item.id === movie.id);

	let watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
	console.log(watchlist);
	return (
		<div className='result-card'>
			<div className="poster-wrapper">
				{movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} poster`} />) :
					(<div className="filler-poster"></div>)}
			</div>

			<div className="info">
				<div className="header">
					<h3 className="title">
						{movie.title}
					</h3>
					<h4>
						{movie.release_date}
					</h4>
				</div>
				<div className="controls">
					<button className="btn"
						disabled={watchlistDisabled}
						onClick={() => AddMovieToWatchlist(movie)}
					>Add to watchlist</button>
				</div>
			</div>



		</div>
	)
}
