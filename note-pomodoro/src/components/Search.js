import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

function Search({ handleSearchNote }){
	return (
		<div className='search'>
			<HiOutlineSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;