import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	RefreshControl,
	SafeAreaView,
} from 'react-native';
import InvocieCardComponent from '../cards/invociecard';

const wait = (timeout) => {
	return new Promise((resolve) => setTimeout(resolve, timeout));
};


export default function Dashboard({navigation}) {
	const [filterHeader, setFilterHeader] = useState('today');
	const [filterView, setFilterView] = useState('invoices');
	const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => setRefreshing(false));
	}, []);
	return (
		<View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
			<View style={{ flexDirection: 'row', padding: 10 }}>
				<TouchableOpacity onPress={() => setFilterHeader('today')}>
					<View
						style={{
							padding: 10,
							backgroundColor:
								filterHeader === 'today' ? '#2886FF' : 'transparent',
							borderRadius: 25,
						}}>
						<Text
							style={{
								color: filterHeader === 'today' ? 'white' : 'black',
								marginLeft: 10,
								marginRight: 10,
							}}>
							Today
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setFilterHeader('thismonth')}
					style={{ marginLeft: 10 }}>
					<View
						style={{
							padding: 10,
							backgroundColor:
								filterHeader === 'thismonth' ? '#2886FF' : 'transparent',
							borderRadius: 25,
						}}>
						<Text
							style={{
								color: filterHeader === 'thismonth' ? 'white' : 'black',
								marginLeft: 10,
								marginRight: 10,
							}}>
							This Month
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			{filterHeader === 'today' ? (
				<View style={{ flexDirection: 'column', padding: 20, marginTop: 0 }}>
					<View>
						<Text style={{ color: '#585858' }}>Total Sale</Text>
						<Text style={{ color: '#000000', fontSize: 20, marginTop: 5 }}>
							2958.00
						</Text>
					</View>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
						<View>
							<Text style={{ color: '#585858' }}>Total Invoices</Text>
							<Text style={{ color: '#000000', fontSize: 15, marginTop: 5 }}>
								42
							</Text>
						</View>
						<View style={{ marginLeft: 10 }}>
							<Text style={{ color: '#585858' }}>Today Dues</Text>
							<Text style={{ color: '#000000', fontSize: 15, marginTop: 5 }}>
								3
							</Text>
						</View>
						<View style={{ marginLeft: 10 }}>
							<Text style={{ color: '#585858' }}>Overdues</Text>
							<Text style={{ color: '#000000', fontSize: 15, marginTop: 5 }}>
								0
							</Text>
						</View>
					</View>
				</View>
			) : null}
			<View
				style={{
					padding: 10,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					backgroundColor: '#FFFFFF',
					shadowColor: '#000',
					shadowOpacity: 1,
					shadowRadius: 20,
					elevation: 20,
					flex: 1,
				}}>
				<View
					style={{
						flexDirection: 'row',
						padding: 10,
						justifyContent: 'center',
					}}>
					<TouchableOpacity onPress={() => setFilterView('invoices')}>
						<View
							style={{
								padding: 10,
								backgroundColor:
									filterView === 'invoices' ? '#2886FF' : 'transparent',
								borderRadius: 25,
							}}>
							<Text
								style={{
									color: filterView === 'invoices' ? 'white' : 'black',
									marginLeft: 5,
									marginRight: 5,
								}}>
								Invoices
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setFilterView('services')}>
						<View
							style={{
								padding: 10,
								backgroundColor:
									filterView === 'services' ? '#2886FF' : 'transparent',
								borderRadius: 25,
							}}>
							<Text
								style={{
									color: filterView === 'services' ? 'white' : 'black',
									marginLeft: 5,
									marginRight: 5,
								}}>
								Services
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setFilterView('pendingservices')}>
						<View
							style={{
								padding: 10,
								backgroundColor:
									filterView === 'pendingservices' ? '#2886FF' : 'transparent',
								borderRadius: 25,
							}}>
							<Text
								style={{
									color: filterView === 'pendingservices' ? 'white' : 'black',
									marginLeft: 5,
									marginRight: 5,
								}}>
								Pending Services
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				{filterView === 'invoices' ? (
					<ScrollView
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
						}
						style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
							<InvocieCardComponent
							costumerName='John Doe'
							invoiceNumber='INV-00001'
							dueDate='2020-01-01'
							invoiceAmount='200.00'
							status='paid'
							costumerId='000999'
							navigation={navigation}
						/>
						<InvocieCardComponent
							costumerName='Praveen Kumar'
							invoiceNumber='INV-00002'
							dueDate='2020-01-01'
							invoiceAmount='1523.00'
							status='unpaid'
							costumerId='12353'
							navigation={navigation}
						/>
						<InvocieCardComponent
							costumerName='Praveen Kumar'
							invoiceNumber='INV-00002'
							dueDate='2020-01-01'
							invoiceAmount='1523.00'
							status='unpaid'
							costumerId='12353'
							navigation={navigation}
						/>
						<InvocieCardComponent
							costumerName='John Doe'
							invoiceNumber='INV-00001'
							dueDate='2020-01-01'
							invoiceAmount='200.00'
							status='paid'
							costumerId='000999'
							navigation={navigation}
						/>
						<InvocieCardComponent
							costumerName='John Doe'
							invoiceNumber='INV-00001'
							dueDate='2020-01-01'
							invoiceAmount='200.00'
							status='paid'
							costumerId='000999'
							navigation={navigation}
						/>
					</ScrollView>
				) : null}
			</View>
		</View>
	);
}
