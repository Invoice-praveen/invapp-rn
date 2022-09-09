import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import CheckIcon from "../../assets/icons/patch-check.png";
import { AcceptService } from "../../data/dataConfig";

export default function ServiceCardComponent(props) {
	return (
		<View
			style={{
				backgroundColor: "rgba(217, 217, 217, 0.28)",
				paddingLeft: 10,
				paddingRight: 10,
				marginTop: 10,
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
					paddingTop: 10,
					paddingBottom: 10,
					marginLeft: 20,
				}}
			>
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
					}}
				>
					{props.contactNumber}
				</Text>
			</View>
			<Pressable
				onPress={() => AcceptService(props.servicenumber, props.service)}
				style={{
					padding: 10,
					borderLeftWidth: 1,
					borderColor: "#CFC3C3",
				}}
			>
				<Image source={CheckIcon} style={{ width: 30, height: 30 }} />
			</Pressable>
		</View>
	);
}
