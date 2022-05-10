
import React, { useEffect, useState } from "react";
import { Dimensions, View, StatusBar, Image, Text, TouchableOpacity, Modal, FlatList, Alert } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import axios, { Axios } from "axios";
import { set } from "react-native-reanimated";
import { forceTouchHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('screen')
export default function Home7({ route, navigation }) {
    const [num, setnum] = useState(0)
    const [show, setshow] = useState(false)
    const [index, setindex] = useState(0)
    const [Qran, setQran] = useState([])
    useEffect(() => {
        const { arr } = route.params;
        setQran(arr.verses)
    }, []);
    return (
        <>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#203232',
                alignItems: "center",
                justifyContent: 'center'
            }}>
                <View style={{
                    width: width,
                    height: height * 0.06,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    paddingHorizontal: 10,
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: "#fff"
                    }}>
                        {Qran.name}
                    </Text>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: height * 0.017,
                        left: width * 0.02
                    }}
                        onPress={() => navigation.navigate('Six')}
                    >
                        <Image source={require('../img/99.png')} style={{

                            width: width * 0.07,
                            height: height * 0.03
                        }} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Qran}
                    renderItem={({ item, index }) => (
                        <>
                            <View style={{
                                width: width * 0.9,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                                marginTop: height * 0.02,
                                marginBottom: height * 0.09
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    textAlign: 'right'
                                }}>
                                    {item.content} ({item.verse_number})
                                </Text>
                            </View>
                        </>
                    )}
                />
            </View>



        </>
    )
}