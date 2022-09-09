import React from "react";
import { View, Text, Alert, Pressable } from "react-native";

export default function InvocieCardComponent(props) {
	return (
		<Pressable
			onPress={() => {
				props.navigation.navigate("details", {
					costumerName: props.costumerName,
					invoiceNumber: props.invoiceNumber,
					dueDate: props.dueDate,
					invoiceAmount: props.invoiceAmount,
					status: props.status,
					costumerId: props.costumerId,
				});
			}}
			style={{
				flexDirection: "row",
				padding: 10,
				marginTop: 15,
				backgroundColor: "#FFFFFF",
				borderBottomColor: "#5D27F6",
				borderColor: "white",
				borderRadius: 10,
				justifyContent: "space-between",
				shadowColor: "#000",
				shadowOffset: {
					width: 5,
					height: 5,
				},
				shadowOpacity: 1,
				shadowRadius: 10,
				elevation: 5,
				borderBottomWidth: 3,
				borderLeftWidth: 0.15,
				borderRightWidth: 0.15,
			}}
		>
			<View style={{ flexDirection: "column" }}>
				<Text style={{ fontSize: 15 }}>{props.costumerName}</Text>
				<Text style={{ marginTop: 10, fontSize: 12 }}>
					Due Date: {props.dueDate}
				</Text>
				<View
					style={{
						alignItems: "center",
						flexDirection: "column",
						padding: 5,
						borderRadius: 20,
						borderWidth: 1,
						marginTop: 10,
						width: 100,
						borderColor: "black",
						backgroundColor:
							props.status === "paid" ? "#00FF85" : "transparent",
					}}
				>
					<Text style={{ fontSize: 12 }}>{props.status}</Text>
				</View>
			</View>
			<View style={{ flexDirection: "column", alignItems: "flex-end" }}>
				<View
					style={{
						alignItems: "center",
						flexDirection: "column",
						padding: 5,
						borderRadius: 20,
						marginTop: 10,
						width: 100,
						backgroundColor: "#6028FF",
					}}
				>
					<Text style={{ color: "white", fontSize: 12 }}>
						{props.invoiceNumber}
					</Text>
				</View>
				<Text style={{ marginTop: 10, fontSize: 20 }}>
					{props.invoiceAmount}
				</Text>
			</View>
		</Pressable>
	);
}
