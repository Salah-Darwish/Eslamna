import React, { useState, useEffect } from "react";
import { Dimensions, View, Image, StatusBar, Text, TouchableOpacity, Modal, FlatList } from 'react-native'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import * as Animatable from 'react-native-animatable';
import { max, set } from "react-native-reanimated";
import AsyncStorage from "@react-native-community/async-storage";
import ProgressCircle from 'react-native-progress-circle'
import { TextInput } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('screen')
export default function Home8({ navigation, route }) {
    const [num, setnum] = useState(0)
    const [show3, setshow3] = useState(false)
    const [show, setshow] = useState(false)
    const [show2, setshow2] = useState(false)
    const [name_task, setname_task] = useState('')
    const [id, setid] = useState("")
    const [taskwarn, settaskwarn] = useState('')
    const [idwarn, setidwarn] = useState('')
    const [index, setindex] = useState(0)
    const [counter, setcounter] = useState(0)
    const [elsona, setelsona] = useState([
        {
            name: 'الفجر',
            elson: "سنه الفجر ركعتين قبل الفرض"
        },

        {
            name: 'الظهر',
            elson: " سنه الظهر ركعتين قبل الفرض و 4 ركعات بعد الفرض"
        },
        {
            name: 'العصر',
            elson: "لا يوجد "
        },
        {
            name: 'المغرب',
            elson: "سنه المغرب ركعتين بعد الفرض"
        },
        {
            name: 'العشاء',
            elson: "سنه العشاء ركعتين بعد الفرض"
        },
    ])

    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#203232',

            }}>
                <View style={{
                    width: width,
                    height: height * 0.06,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Twelve')}
                    >
                        <Image source={require('../img/100.png')} style={{

                            width: width * 0.07,
                            height: height * 0.03,
                            resizeMode: "contain"
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000'
                    }}>
                        سنن الصلاه
                    </Text>
                </View>
                <FlatList
                    data={elsona}
                    renderItem={({ item, index }) =>
                        <>
                            <View style={{
                                width: width,
                                alignItems: 'center',
                                padding: 20

                            }}>
                                <View style={{
                                    width: width * 0.7,
                                    height: height * 0.2,
                                    backgroundColor: '#fff',
                                    alignItems: 'center',
                                    borderRadius: 20
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#000',
                                        padding: 10
                                    }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#19a777'
                                    }}>
                                        {item.elson}
                                    </Text>
                                </View>
                            </View>
                        </>

                    }

                />
            </View>

        </>

    )
}