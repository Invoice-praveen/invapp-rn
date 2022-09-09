import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import ItemCard from "../cards/ItemCard";

export default function InvoiceDetails(props) {
	const {
		costumerName,
		invoiceNumber,
		dueDate,
		invoiceAmount,
		status,
		costumerId,
	} = props.route.params;
	return (
		<View
			style={{
				backgroundColor: "#FFFFFF",
				height: "100%",
				flex: 1,
				padding: 10,
				alignItems: "center",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					padding: 10,
					width: "85%",
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
					<Text style={{ fontSize: 15 }}>{costumerName}</Text>
					<Text style={{ marginTop: 10, fontSize: 12 }}>
						Due Date: {dueDate}
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
								status === "paid" ? "#00FF85" : "transparent",
						}}
					>
						<Text style={{ fontSize: 12 }}>{status}</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "column",
						alignItems: "flex-end",
					}}
				>
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
							{invoiceNumber}
						</Text>
					</View>
					<Text style={{ marginTop: 10, fontSize: 20 }}>
						{invoiceAmount}
					</Text>
				</View>
			</View>
			<View style={{ marginTop: 10 }}>
				<ItemCard itemName="Pen" itemQty="1" itemPrice="10" />
				<ItemCard itemName="Paper" itemQty="20" itemPrice="5" />
				<ItemCard itemName="Pendrive" itemQty="1" itemPrice="600" />
			</View>
			<TouchableOpacity
				style={{
					borderColor: "#6028FF",
					borderWidth: 2,
					borderRadius: 10,
					padding: 15,
					marginTop: 10,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 16 }}>
					{status !== "paid" ? "Make Payment" : "View Payment"}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
