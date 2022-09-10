import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RemoveServiceItem } from "../data/dataConfig";

export default function ItemCard(props) {
	
	return (
		<View
			style={{
				backgroundColor: "rgba(217, 217, 217, 0.28)",
				padding: 10,
				marginTop:10,
				borderRadius: 10,
				width: "85%",
				justifyContent: "space-between",
				alignItems: "center",
				flexDirection: "row",
			}}
		>
			<View
				style={{
					flexDirection: "column",
					flex: 1,
					marginLeft:20
				}}
			>
				<Text
					style={{
						color: "#000000",
						fontSize: 17,
					}}
				>
					{props.itemName}
				</Text>
				<Text
					style={{
						color: "#828080",
						fontSize: 13,
					}}
				>
					{props.itemQty} x {props.itemPrice}
				</Text> 
			</View>
			<Text style={{marginRight: 10, fontSize: 15 }}>
				{props.itemQty*props.itemPrice}
			</Text>
			<TouchableOpacity style={{flex: 0.1, padding: 10, borderLeftWidth:1, borderColor: '#CFC3C3'}}>
				<Ionicons name="close-outline" size={25} />
			</TouchableOpacity>
		</View>
	);
}
