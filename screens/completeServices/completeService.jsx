import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import ItemCard from '../../cards/ItemCard';
import { getServiceItems } from '../../data/dataConfig';

export default function CompleteService({ navigation, route }) {
	const [serviceItems, setServiceItems] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const { name, date, service_number, ammount } = route.params;

	const getItems = async () => {
		await getServiceItems(service_number).then((res) => {
			setServiceItems(res);
		});
	};
	const onRefresh = React.useCallback(async () => {
		setRefreshing(true);
		await getItems();
		setRefreshing(false);
	}, []);

	useEffect(() => {
		getItems();
	}, []);

	return (
		<View style={{ padding: 10, flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					borderRadius: 10,
					backgroundColor: 'transparent',
					shadowColor: '#000',
					marginTop: 10,
					shadowOffset: {
						width: 0,
						height: 1,
					},
					shadowOpacity: 0.22,
					shadowRadius: 3,
					elevation: 3,
				}}>
				<View
					style={{
						backgroundColor: '#fff',
						borderRadius: 10,
						padding: 10,
						overflow: 'hidden',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<View
						style={{
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
						<Text style={{ fontSize: 17, color: 'black' }}>{name}</Text>
						<Text
							style={{
								fontSize: 12,
								color: '#585858',
								marginTop: 5,
							}}>
							Service Date: {date}
						</Text>
						<View
							style={{
								padding: 10,
								marginTop: 10,
								borderWidth: 1,
								borderColor: 'black',
								borderRadius: 50,
								width: 100,
								alignItems: 'center',
							}}>
							<Text style={{ fontSize: 12, color: '#585858' }}>Completed</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'column' }}>
						<View
							style={{
								backgroundColor: '#6028FF',
								padding: 10,
								borderRadius: 30,
								alignItems: 'center',
								flexDirection: 'row',
							}}>
							<Text
								style={{
									marginLeft: 10,
									marginRight: 10,
									color: 'white',
								}}>
								SER. {service_number.slice(0, 4)}..
							</Text>
						</View>
						<Text style={{ marginTop: 10, padding: 10, fontSize: 20 }}>
							Rs. {ammount}.00
						</Text>
					</View>
				</View>
			</View>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				<View
					style={{
						flex: 1,
						width: '100%',
						alignItems: 'center',
						flexDirection: 'column',
						marginTop: 10,
					}}>
					{serviceItems.map((data1, idx) => (
						<ItemCard
							key={idx}
							itemName={`${data1.productName}`}
							itemQty={data1.qty}
							itemPrice={data1.price}
							id={data1.id}
						/>
					))}
				</View>
			</ScrollView>
			<View
				style={{
					justifyContent: 'center',
					flexDirection: 'row',
					width: '100%',
				}}>
				{serviceItems.length > 0 ? (
					<>
					<TouchableOpacity
						style={{
							padding: 10,
							justifyContent: 'center',
							alignItems: 'center',
							borderColor: '#6028FF',
							backgroundColor: '#FFFFFF',
							borderWidth: 1,
							width: 150,
							borderRadius: 30,
							shadowOffset: {
								width: 5,
								height: 5,
							},
							shadowOpacity: 1,
							shadowRadius: 10,
							elevation: 5,
						}}>
						<Text style={{ marginLeft: 10, marginRight: 10 }}>Payments</Text>
					</TouchableOpacity>
						<TouchableOpacity
						onPress={() => {
							navigation.navigate('addserviceitems', {
								title: 'Ser.' + service_number,
								name,
								date,
								service_number,
								ammount,
							});
						}}
						style={{
							padding: 10,
							justifyContent: 'center',
							alignItems: 'center',
							borderColor: '#6028FF',
							backgroundColor: '#FFFFFF',
							borderWidth: 1,
							width: 150,
							marginLeft: 10,
							borderRadius: 30,
							shadowOffset: {
								width: 5,
								height: 5,
							},
							shadowOpacity: 1,
							shadowRadius: 10,
							elevation: 5,
						}}>
						<Text style={{ marginLeft: 10, marginRight: 10 }}>Add Items</Text>
						</TouchableOpacity>
						</>
				) : (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('addserviceitems', {
								title: 'Ser.' + service_number,
								name,
								date,
								service_number,
								ammount,
							});
						}}
						style={{
							padding: 10,
							justifyContent: 'center',
							alignItems: 'center',
							borderColor: '#6028FF',
							backgroundColor: '#FFFFFF',
							borderWidth: 1,
							width: 150,
							borderRadius: 30,
							shadowOffset: {
								width: 5,
								height: 5,
							},
							shadowOpacity: 1,
							shadowRadius: 10,
							elevation: 5,
						}}>
						<Text style={{ marginLeft: 10, marginRight: 10 }}>Add Items</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}
