import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard';

export const Watchlist = () => {

	const { watchlist } = useContext(GlobalContext);
	return (
		<div className='movie-page'>
			<div className="container">
				<div className="header">
					<div className="heading">My watchlist</div>
				</div>

				{watchlist.length > 0 ?
					(<div className="movie-grid">
						{watchlist.map((movie) => (
							<MovieCard key={movie.id} movie={movie} type='watchlist' />
						))}
					</div>) : (
						<h2 className="no-movie">No movie in your list, add some!</h2>
					)}


			</div>
		</div>
	)
}
