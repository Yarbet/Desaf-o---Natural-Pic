import { useContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LikePage } from './pages/LikePage';

function App() {
	return (
		<>

			<Router>
				<header>
					<ul>
						<li>
							<Link to="/">
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link to="/favorites">
								<p>Favorites</p>
							</Link>
						</li>
					</ul>
				</header>

				<h1>
		<p style={{ textAlign: 'center', color: 'green', paddingTop: "50px" }}>
			Natural pic 
		</p>
			</h1>

				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/favorites"
						element={<LikePage />}
					/>
				</Routes>
				
			</Router>
		</>
	);
}

export default App;
