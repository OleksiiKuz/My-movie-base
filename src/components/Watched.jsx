import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

export const Watched = () => {
	const { watched } = useContext(GlobalContext);
	return (
		<div className='movie-page'>
			<div className="container">
				<div className="header">
					<div className="heading">Watched movie</div>
				</div>

				{watched.length > 0 ?
					(<div className="movie-grid">
						{watched.map((movie) => (
							<MovieCard key={movie.id} movie={movie} type='watched' />
						))}
					</div>) : (
						<h2 className="no-movie">No movie in your list, watch some!</h2>
					)}


			</div>
		</div>
	)
}
