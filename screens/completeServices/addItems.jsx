import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
} from "react-native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



export default function AddServiceItemsScreen({ navigation }) {
    const [productName, setProductName] = useState("");
    const [servicenumber, setServicenumber] = useState("");
    const [price, setPrice] = useState("0");
    const [qty, setQty] = useState("0");
    const [total, setTotal] = useState(null);


    useEffect(() => {
        const arr = new Date(Date.now() - 20000 * 4 + 210).toISOString().slice(11, 23).split(':')
        let lld = arr[0] + arr[1] + arr[2]
        let x = lld.split('.')
        lld = x[0] + x[1]
        setServicenumber(lld)
    }, [])

    const Save = async () => {
        let data = {
            productName,
            servicenumber,
            price,
            qty,
            total,
        }
        SaveCalendar(data)
        await navigation.navigate('calendarscreen')
    }

    const OnChangeQTY = async (e) => {
        await setQty(e);
    }   

    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 20, width: '100%', alignItems: 'center' }}>
            <View
                style={{ flexDirection: "column", width: 200, marginTop: 10 }}
            >
                <Text style={{ color: "#000000" }}>Product Name</Text>
                <TextInput
                    style={{
                        padding: 5,
                        borderColor: "black",
                        borderRadius: 10,
                        borderWidth: 2,
                        marginTop: 4,
                    }}
                    onChangeText={setProductName}
                    selectionColor="#6028FF"
                    returnKeyType="next"
                />
            </View>
            <View
                style={{ flexDirection: "column", width: 200, marginTop: 10 }}
            >
                <Text style={{ color: "#000000" }}>Product Price</Text>
                <TextInput
                    style={{
                        padding: 5,
                        borderColor: "black",
                        borderRadius: 10,
                        borderWidth: 2,
                        marginTop: 4,
                    }}
                    defaultValue={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    selectionColor="#6028FF"
                    returnKeyType="next"
                />
            </View>
            <View
                style={{ flexDirection: "column", width: 200, marginTop: 10 }}
            >
                <Text style={{ color: "#000000" }}>Quantity</Text>
                <TextInput
                    style={{
                        padding: 5,
                        borderColor: "black",
                        borderRadius: 10,
                        borderWidth: 2,
                        marginTop: 4,
                    }}
                    onChangeText={OnChangeQTY}
                    keyboardType="numeric"
                    selectionColor="#6028FF"
                    returnKeyType="next"
                />
            </View>
            <View
                style={{ flexDirection: "column", width: 200, marginTop: 10 }}
            >
                <Text style={{ color: "#000000" }}>Total Ammount</Text>
                <TextInput
                    style={{
                        padding: 5,
                        borderColor: "black",
                        borderRadius: 10,
                        borderWidth: 2,
                        marginTop: 4,
                    }}
                    defaultValue={total}
                    onChangeText={setTotal}
                    keyboardType="numeric"
                    selectionColor="#6028FF"
                    returnKeyType="next"
                />
            </View>
            <Pressable onPress={Save} style={{ marginTop: 20, padding: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10, width: 100, alignItems: 'center' }}>
                <Text style={{ color: 'green' }}>Save</Text>
            </Pressable>
        </View>
    );
}
