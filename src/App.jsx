import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';
import Home from './pages/Home/Home';
import Designs from './pages/Designs/Designs';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route exact path={ROUTES.HOME} element={<Home />} />
				<Route exact path={ROUTES.DESIGNS} element={<Designs />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
