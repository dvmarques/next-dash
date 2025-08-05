"use client";

import { Provider } from 'react-redux';
import { AppBase } from '../App';
import store from '../store';

export default function Home() {
	return (
		<Provider store={store}>
			<AppBase />
		</Provider>
	)
}