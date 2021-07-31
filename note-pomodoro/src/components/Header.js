
import React from 'react';
import { CgDarkMode } from 'react-icons/cg'

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<CgDarkMode
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			/>
		</div>
	);
};

export default Header;