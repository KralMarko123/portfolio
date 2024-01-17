import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';
import './NotFound.css';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='notfound page'>
			<h1 className='notfound-title' onClick={() => navigate(ROUTES.HOME)}>
				You wandered off, click here to go back.
			</h1>
		</div>
	);
};

export default NotFound;
