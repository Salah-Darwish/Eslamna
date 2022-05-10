import React, { useState } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
import ProgressCircle from 'react-native-progress-circle'
const { height, width } = Dimensions.get('screen')
export default function Home10({ navigation }) {
    return (
        <>

            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <LinearGradient
                colors={['#8af15d', '#19a777']}
                style={{
                    width: width,
                    height: height,
                }}>

                <View style={{
                    width,
                    height: height * 0.08,
                    backgroundColor: '#015641',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 10
                }}>
                    <TouchableOpacity
                        style={{
                            width: width * 0.1,
                            height: height * 0.04,
                        }}
                        onPress={() => navigation.navigate('Two')}
                    >
                        <Image source={require('../img/57.png')} style={{
                            width: width * 0.1,
                            height: height * 0.04,
                            //  marginTop: height * 0.03,
                            resizeMode: 'cover',
                            //    marginLeft: width * 0.02
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 30,
                        color: '#bcc01f',
                        fontWeight: 'bold'
                    }}>
                        السبحه
                    </Text>
                </View>
                <View style=
                    {{
                        alignItems: "center",

                        width: width,
                        height: height
                    }}>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.1,
                        borderRadius: 20,
                        backgroundColor: '#015641',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#bcc01f',
                        elevation: 4,
                        marginTop: height * 0.3
                    }}
                        onPress={() => navigation.navigate('Three')}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#bcc01f"
                        }}>
                            سبحه بعد الصلاه
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: width * 0.8,
                        height: height * 0.1,
                        borderRadius: 20,
                        backgroundColor: '#015641',
                        alignItems: "center",
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#bcc01f',
                        elevation: 4,
                        marginTop: height * 0.03
                    }}
                        onPress={() => navigation.navigate('eleven')}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#bcc01f"
                        }}>
                            اضافه السبحه الخاصه بك
                        </Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>




        </>

    )
}