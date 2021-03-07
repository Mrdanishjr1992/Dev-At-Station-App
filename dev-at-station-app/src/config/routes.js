import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AboutPage from '../pages/AboutPage';
import BattlePage from '../pages/BattlePage';
import GamePage from '../pages/GamePage';
import LandingPage from '../pages/LandingPage';
import LoadingPage from '../pages/LoadingPage';
import MenuPage from '../pages/MenuPage';
import CreateMapPage from '../pages/CreateMapPage';

export default function Routes(props) {
	return (
		<>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/loading" component={LoadingPage} {...props} />
				<Route exact path="/game" component={GamePage} />
				<Route exact path="/menu" component={MenuPage} />
				<Route exact path="/battle" component={BattlePage} />
				<Route exact path="/createmap" component={CreateMapPage} />
			</Switch>
		</>
	);
}
