import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import AboutPage from '../pages/AboutPage';
import BattlePage from '../pages/BattlePage';
import GamePage from '../pages/GamePage';
import LandingPage from '../pages/LandingPage';
import LoadingPage from '../pages/LoadingPage';
import MenuPage from '../pages/MenuPage';
import CreateMapPage from '../pages/CreateMapPage';

export default function Routes(props) {
	const [token, setToken] = useState(null);

	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					component={() => <LandingPage token={token} setToken={setToken} />}
				/>
				<Route exact path="/loading" component={LoadingPage} token={token} />
				<Route exact path="/game/:id" component={GamePage} />
				<Route exact path="/createmap/:id" component={CreateMapPage} />
				<Route exact path="/menu" component={MenuPage} />
				<Route exact path="/battle" component={BattlePage} />
				<Route exact path="/about" component={AboutPage} />
				{/* DEV MODE ROUTES */}
				<Route exact path="/game" component={GamePage} />
				<Route exact path="/createmap" component={CreateMapPage} />
			</Switch>
		</>
	);
}
