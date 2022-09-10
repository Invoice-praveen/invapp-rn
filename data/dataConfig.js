// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';

const SaveCalendar = async (data) => {
	let prevCalendar = [];
	await AsyncStorage.getItem('calendar').then((res) => {
		JSON.parse(res) !== null
			? (prevCalendar = JSON.parse(res))
			: (prevCalendar = []);
	});
	prevCalendar.push(data);
	await AsyncStorage.setItem('calendar', JSON.stringify(prevCalendar));
	Alert.alert('Saved');
};

const getCalendar = async () => {
	let prevCalendar;
	await AsyncStorage.getItem('calendar').then((res) => {
		prevCalendar = JSON.parse(res);
	});
	return prevCalendar;
};

const clears = () => {
	AsyncStorage.clear();
};

const AcceptService = async (service_id, service_data) => {
	service_data.status = 'accepted';
	let prevCalendar = [];
	await AsyncStorage.getItem('calendar').then((res) => {
		prevCalendar = JSON.parse(res);
	});
	let new1 = prevCalendar.filter(
		(data) => !data.servicenumber.includes(service_id),
	);
	new1.push(service_data);
	await AsyncStorage.setItem('calendar', JSON.stringify(new1));
};

const CreateServiceItems = async (data) => {
	let prevService = [];
	await AsyncStorage.getItem('serviceItems').then((res) => {
		JSON.parse(res) !== 'null'
			? (prevService = JSON.parse(res))
			: (prevService = []);
	});
	prevService.push(data);
	await AsyncStorage.setItem('serviceItems', JSON.stringify(prevService));
};

const getServiceItems = async (sno) => {
	let prevCalendar;
	await AsyncStorage.getItem('serviceItems').then((res) => {
		prevCalendar = JSON.parse(res);
	});
	let sss =[]
	prevCalendar.forEach((da) => {
		if (da.servicenumber === sno) {
			sessionStorage.push(da)
		}
	})
	let sit = await prevCalendar.filter(
		(data) => data.servicenumber.includes(sno)
	);
	console.log(sss);
	// await console.log(sno);
	return sit;
};

export {
	SaveCalendar,
	getCalendar,
	clears,
	AcceptService,
	getServiceItems,
	CreateServiceItems,
};
