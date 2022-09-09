import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Pressable,
	TextInput,
} from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { SaveCalendar, getCalendar } from '../../data/dataConfig'



export default function CreateServiceComponent({ navigation }) {
	const [serviceName, setServiceName] = useState("");
	const [contact, setContact] = useState("");
	const [address, setAddress] = useState("");
	const [status, setStatus] = useState("pending");
	const [servicenumber, setServicenumber] = useState("");
	const [ammount, setAmmount] = useState("0");
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);


	useEffect( () => {
		const arr = new Date(Date.now() - 20000 * 4 + 210).toISOString().slice(11, 23).split(':')
		let lld = arr[0] + arr[1] + arr[2]
		let x = lld.split('.')
		lld = x[0] + x[1]
		setServicenumber(lld)
	}, [])

	const Save = async () => {
		let data = {
			serviceName,
			contact,
			address,
			status,
			servicenumber,
			ammount,
			date: new Date(date).toISOString().slice(0, 10)
		}
		SaveCalendar(data)
		await navigation.navigate('calendarscreen')
	}

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setDate(currentDate);
	};

	return (
		<View style={{ flex: 1, flexDirection: "column", padding: 20, width: '100%',  alignItems: 'center'}}>
			<View
				style={{ flexDirection: "column", width: 200, marginTop: 10 }}
			>
				<Text style={{ color: "#000000" }}>Service Name</Text>
				<TextInput
					style={{
						padding: 5,
						borderColor: "black",
						borderRadius: 10,
						borderWidth: 2,
						marginTop: 4,
					}}
					onChangeText={setServiceName}
					selectionColor="#6028FF"
					returnKeyType="next"
					onSubmitEditing={() => console.log("SSS")}
				/>
			</View>
			<View
				style={{ flexDirection: "column", width: 200, marginTop: 10 }}
			>
				<Text style={{ color: "#000000" }}>Contact</Text>
				<TextInput
					style={{
						padding: 5,
						borderColor: "black",
						borderRadius: 10,
						borderWidth: 2,
						marginTop: 4,
					}}
					onChangeText={setContact}
					selectionColor="#6028FF"
					returnKeyType="next"
					keyboardType="decimal-pad"
					onSubmitEditing={() => console.log("SSS")}
				/>
			</View>
			<View
				style={{ flexDirection: "column", width: 200, marginTop: 10 }}
			>
				<Text style={{ color: "#000000" }}>Address</Text>
				<TextInput
					style={{
						padding: 5,
						borderColor: "black",
						borderRadius: 10,
						borderWidth: 2,
						marginTop: 4,
					}}
					onChangeText={setAddress}
					selectionColor="#6028FF"
					returnKeyType="next"
					onSubmitEditing={() => console.log("SSS")}
				/>
			</View>
			<View
				style={{ flexDirection: "column", width: 200, marginTop: 10 }}
			>
				<Text style={{ color: "#000000" }}>Service Number</Text>
				<TextInput
					style={{
						padding: 5,
						borderColor: "black",
						borderRadius: 10,
						borderWidth: 2,
						marginTop: 4,
					}}
					onChangeText={setServicenumber}
					defaultValue={servicenumber}
					selectionColor="#6028FF"
					returnKeyType="next"
					onSubmitEditing={() => console.log("SSS")}
				/>
			</View>
			<View
				style={{ flexDirection: "column", width: 200, marginTop: 10 }}
			>
				<Text style={{ color: "#000000" }}>Date</Text>
				<Pressable
					onPress={() => {
						DateTimePickerAndroid.open({
							value: date,
							onChange,
							mode: 'date',
							is24Hour: false,
						});
					}}
					style={{
						padding: 10,
						borderColor: "black",
						borderRadius: 10,
						borderWidth: 2,
						marginTop: 4,
					}}
				>
					<Text>{new Date(date).toISOString().slice(0, 10)}</Text>
				</Pressable>
			</View>
			<Pressable onPress={Save} style={{ marginTop: 20, padding: 10, borderWidth:1, borderColor: 'black', borderRadius: 10, width: 100, alignItems: 'center'}}>
				<Text style={{color: 'green'}}>Save</Text>
			</Pressable>
		</View>
	);
}
