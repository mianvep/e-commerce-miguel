// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';

const InputSearch = () => {
	// eslint-disable-next-line no-unused-vars
	const { handleSubmit, register, reset } = useForm();

	const submit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(submit)} className='form-home'>
			<input type='text' {...register('searchText')} />
			<button>Search</button>
		</form>
	);
};

export default InputSearch;
