import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dashboard from "./screens/Dashboard";
import InvoiceDetails from "./screens/InvoiceDetails";
import CompleteService from "./screens/completeServices/completeService"
import CalenderScreen from './screens/CalendarScreen'
import CreateServiceComponent from './screens/services/createService'
import AddServiceItemsScreen from "./screens/completeServices/addItems";

const HomeStack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator screenOptions={({ route }) => ({ headerShown: true })}>
      <HomeStack.Screen
        name="home"
        options={{
          title: "Subastri Electricals",
        }}
        component={Dashboard}
      />
      <HomeStack.Screen
        name="details"
        options={{
          title: "Invoice Details",
        }}
        component={InvoiceDetails}
      />
    </HomeStack.Navigator>
  );
}

const CalanderStack = createNativeStackNavigator();

function CalenderScreenStack() {
  return (
		<CalanderStack.Navigator
			screenOptions={({ route }) => ({ headerShown: true })}>
			<CalanderStack.Screen
				name='calendarscreen'
				options={{ title: 'Today Calendar' }}
				component={CalenderScreen}
			/>
			<CalanderStack.Screen
				name='completeservice'
				options={{ title: 'Complete Service' }}
				component={CompleteService}
			/>
			<CalanderStack.Screen
				name='newcalander'
				options={{ title: 'Create Service' }}
				component={CreateServiceComponent}
			/>
			<CalanderStack.Screen
				name='addserviceitems'
				options={({ route }) => ({ title: route.params.title })}
				component={AddServiceItemsScreen}
			/>
		</CalanderStack.Navigator>
	);
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Calander") {
              iconName = focused ? "calendar" : "calendar-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6028FF",
          tabBarActiveBackgroundColor: "#CEBCFF",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" title="Home" component={HomeScreen} />
        <Tab.Screen name="Calander" title="Today" component={CalenderScreenStack} />
        <Tab.Screen
          name="Settings"
          title="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
