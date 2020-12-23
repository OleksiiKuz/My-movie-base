import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div>
			<header>
				<div className="container">
					<div className="inner-container">
						<div className="brand">
							<Link to='/'>My film base</Link>
						</div>

						<div className="nav-links">
							<li>
								<Link to='/'>Watchlist</Link>
							</li>

							<li>
								<Link to='/watched'>Watched</Link>
							</li>

							<li>
								<Link to='/add' className='btn'>Add film</Link>
							</li>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}
