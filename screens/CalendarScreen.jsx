import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	Pressable,
	Image,
	RefreshControl,
	ScrollView,
} from 'react-native';
import ServiceCardComponent from '../cards/services/ServiceCard';
import AcceptedServiceCardComponent from '../cards/services/AcceptedServiceCard';
import AddIcon from '../assets/icons/addicon.png';
import { getCalendar, clears } from '../data/dataConfig';

export default function CalendarScreen({ navigation }) {
	const [serviceType, setServiceType] = useState('pending');
	const [data, setData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	function gett() {
		getCalendar().then((res) => setData(res));
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		gett();
		setRefreshing(false);
	}, []);

	useEffect(() => {
		gett();
	}, []);

	return (
		<View
			style={{
				flex: 1,
				padding: 10,
				backgroundColor: '#FFFFFF',
			}}>
			<View
				style={{
					flexDirection: 'row',
				}}>
				<Pressable
					onPress={() => setServiceType('pending')}
					style={{
						padding: 10,
						backgroundColor:
							serviceType === 'pending' ? '#2886FF' : 'transparent',
						borderRadius: 50,
					}}>
					<Text
						style={{
							marginLeft: 10,
							marginRight: 10,
							color: serviceType === 'pending' ? 'white' : 'black',
						}}>
						Pending
					</Text>
				</Pressable>
				<Pressable
					onPress={() => setServiceType('Accepted Services')}
					style={{
						padding: 10,
						backgroundColor:
							serviceType === 'Accepted Services' ? '#2886FF' : 'transparent',
						borderRadius: 50,
					}}>
					<Text
						style={{
							marginLeft: 10,
							marginRight: 10,
							color: serviceType === 'Accepted Services' ? 'white' : 'black',
						}}>
						Accepted Services
					</Text>
				</Pressable>
			</View>
			{serviceType === 'pending' ? (
				<ScrollView
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}>
					<View
						style={{
							paddingLeft: 5,
							paddingRight: 5,
							marginTop: 10,
							alignItems: 'center',
						}}>
						{data.map((dt, idx) =>
							dt === null ? null : dt.status === 'pending' ? (
								<ServiceCardComponent
									key={idx}
									serviceName={dt?.serviceName}
									contactNumber={dt?.contact}
									servicenumber={dt?.servicenumber}
									service={dt}
								/>
							) : null,
						)}
					</View>
				</ScrollView>
			) : (
				<ScrollView
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}>
					<View
						style={{
							marginTop: 10,
						}}>
						{data.map((dt, idx) =>
							dt === null ? (
								<View
									style={{
										flex: 1,
										width: '100%',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: 20,
									}}>
									<Text>No Accepted Services Found</Text>
								</View>
							) : dt.status === 'accepted' ? (
								<AcceptedServiceCardComponent
									key={idx}
									serviceName={dt.serviceName}
									date={dt.date}
									contactNumber={dt.contact}
									status={dt.status}
									servicenumber={dt.servicenumber}
									ammount={dt.ammount}
									navigation={navigation}
								/>
							) : null,
						)}
					</View>
				</ScrollView>
			)}
			<Pressable
				style={{ position: 'absolute', bottom: 20, right: 20 }}
				onPress={() => navigation.navigate('newcalander')}>
				<Image source={AddIcon} style={{ width: 50, height: 50 }} />
			</Pressable>
		</View>
	);
}
