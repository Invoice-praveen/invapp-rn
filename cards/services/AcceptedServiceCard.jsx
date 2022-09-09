import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function AcceptedServiceCardComponent(props) {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				backgroundColor: "rgba(217, 217, 217, 0.28)",
				padding: 15,
				borderRadius: 10,
				marginTop: 10,
			}}
		>
			<View style={{ flexDirection: "column" }}>
				<Text
					style={{
						color: "#000000",
						fontSize: 17,
					}}
				>
					{props.serviceName}
				</Text>
				<Text
					style={{
						color: "#828080",
						fontSize: 13,
						marginTop: 5,
					}}
				>
					{props.contactNumber}
				</Text>
				<View
					style={{
						padding: 10,
						backgroundColor: "#00FF85",
						borderRadius: 25,
						marginTop: 10,
						width: 110,
						alignItems: "center",
					}}
				>
					<Text>{props.status.slice(0, 1).toUpperCase() + props.status.slice(1)}</Text>
				</View>
			</View>
			<View style={{ padding: 5 }}>
				<TouchableOpacity
					onPress={() => {
						props.navigation.navigate("completeservice", {
							name: props.serviceName,
							date: props.date,
							status: props.status,
							service_number: props.servicenumber,
							ammount: props.ammount
						});
					}}
					style={{
						padding: 10,
						borderColor: "#6028FF",
						backgroundColor: "#FFFFFF",
						borderWidth: 1,
						borderRadius: 30,
						shadowOffset: {
							width: 5,
							height: 5,
						},
						shadowOpacity: 1,
						shadowRadius: 10,
						elevation: 5,
					}}
				>
					<Text style={{ marginLeft: 10, marginRight: 10 }}>
						Complete
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
