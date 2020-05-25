import Axios from 'axios';

import { AsyncStorage } from 'react-native';

import { tokenName, url } from './Constants';

export const getToken = async ({ tokenNotFound, tokenFound }) => {
	try {
		const token = await AsyncStorage.getItem(tokenName);
		console.log('getToken------<<<<<>>>>', token);
		if (!token) {
			tokenNotFound();
		} else {
			tokenFound(token);
		}
	} catch (error) {}
};

export const setToken = async ({ email, password, setTokenData }) => {
	try {
		console.log(email, password);
		await Axios.post(url + 'api/login', {
			email,
			password
		}).then(async (promise) => {
			const value = promise.data;
			if (value.token) {
				await AsyncStorage.setItem(tokenName, value.token);
				setTokenData(value.token);
			}
		});
	} catch (error) {}
};
