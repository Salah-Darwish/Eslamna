import React, { } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity, ActivityIndicator, SafeArea, StatusBar } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { max } from "react-native-reanimated";
const { height, width } = Dimensions.get('screen')
export default function Home1({ navigation }) {
    const [timer, settimer] = React.useState(true)

    React.useEffect(() => {
        let x = 0
        setTimeout(() => {
            navigation.replace('Two')
        }, 1500);
    })
    return (
        <>
            <StatusBar backgroundColor='#19a777' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center"
            }}

            >
                <Image source={require('../img/1.gif')} style={{
                    width: width * 1.18,
                    height: height * 0.35,
                    borderRadius: 10,

                }} />
                <ActivityIndicator color='#1f6a39' size={50} style={{
                    marginTop: height * 0.01
                }} />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: "#1f6a39",
                    marginTop: height * 0.02
                }}>

                    by : Salah Mostafa Darwish
                </Text>
            </View>

        </>

    )
}