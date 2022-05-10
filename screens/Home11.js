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
export default function Home11({ navigation, route }) {
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
    // const [count, setcount] = useState(0)
    const [listArray, setlistArray] = useState([])
    useEffect(() => {
        start()
    }, [])
    async function start() {
        //await AsyncStorage.setItem('arrayStored', "[]")
        let arrayStored = await AsyncStorage.getItem('arrayStored')
        if (arrayStored == null) {
            arrayStored = []
        }
        else {
            arrayStored = JSON.parse(arrayStored)
        }
        setlistArray(arrayStored)
    }
    async function add() {
        let arr = listArray
        let obj = {
            name_task: name_task,
            id: id,
        }
        arr.push(obj)
        arr = JSON.stringify(arr)
        setlistArray(JSON.parse(arr))
        setshow3(false)
        await AsyncStorage.setItem('arrayStored', arr)
        setname_task('')
        setid(0)
    }
    async function del(index) {
        let ar = []
        ar = listArray
        ar.splice(index, 1)
        ar = JSON.stringify(ar)
        setlistArray(JSON.parse(ar))
        await AsyncStorage.setItem('arrayStored', ar)
    }
    function vilidation(type, index) {
        let check = true
        if (name_task.trim() == "" || name_task * 0 == 0) {
            settaskwarn('ادخل نص للذكر')
            check = false
        }
        else {
            settaskwarn('')
        }
        if (id * 0 != 0 || id == "" || id.trim() == "") {
            setidwarn('ادخل عدد الذكر ')
            check = false
        }
        else {
            setidwarn('')
        }
        if (check) {
            if (type == "add") {
                add()
            }
        }
    }
    function finish(index) {
        let ar = []
        ar = listArray
        setnum(ar[index].id--)
        if (ar[index].id <= 0) {
            ar[index].id = 0
            setnum(0)
            setshow(true)
        }
        ar = JSON.stringify(ar)
        setlistArray(JSON.parse(ar))
    }
    return (
        <>

            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <LinearGradient
                colors={['#8af15d', '#19a777']}
                style={{
                    width: width,
                    height: height,
                    alignItems: 'center',

                }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#fff'
                }}>
                    السبحه الخاصه بك
                </Text>
                <FlatList
                    data={listArray}
                    renderItem={({ item, index }) =>
                        <>
                            <View
                                style={{
                                    width: width,
                                    height: height,
                                    alignItems: 'center',
                                }}
                            >
                                <View style={{
                                    width: width * 0.85,
                                    height: height * 0.35,
                                    backgroundColor: "#015641",
                                    marginTop: height * 0.1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 10,
                                    marginBottom: height * 0.03
                                }}
                                >
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: "#bcc01f",
                                        padding: 9,
                                    }}>
                                        {item.name_task}
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#bcc01f'
                                    }}>
                                        {item.id}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: width * 0.4,
                                        height: height * 0.15,
                                        borderRadius: 40,
                                        backgroundColor: "#015641",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: height * 0.08,
                                        borderWidth: 2,
                                        borderColor: "#fff"
                                    }}
                                    onPress={() => {
                                        finish(index)
                                    }}
                                >
                                    <Image source={require('../img/addition.png')} style={{
                                        width: width * 0.25,
                                        height: height * 0.14,
                                        borderRadius: 504,
                                        resizeMode: "contain",
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                />
            </LinearGradient>

            <Modal visible={show3}
                onRequestClose={() => setshow3(false)}
                transparent={true}
            >
                <Animatable.View style={{
                    width: width * 0.9,
                    height: height * 0.3,
                    backgroundColor: '#19a777',
                    borderRadius: 20,
                    alignItems: 'center',
                    //   justifyContent: 'center',
                    marginTop: height * 0.3,
                    marginLeft: width * 0.05

                }}
                    animation="slideInDown"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff',
                        padding: 10
                    }}>
                        اضافه ذكر جديد
                    </Text>
                    <TextInput style={{
                        width: width * 0.85,
                        backgroundColor: '#8af15d',
                        borderRadius: 10,
                        padding: 9,
                        color: "#000"
                    }}
                        placeholder={'ادخل الذكر الخاص بيك'}
                        placeholderTextColor={'#000'}
                        value={name_task}
                        onChangeText={(value) => setname_task(value)}
                    />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#f00"
                    }}>
                        {taskwarn}
                    </Text>
                    <TextInput style={{
                        width: width * 0.85,
                        backgroundColor: '#8af15d',
                        borderRadius: 10,
                        padding: 9,
                        marginTop: height * 0.02,
                        color: '#000'
                    }}
                        placeholder={'ادخل عدد الذكر '}
                        placeholderTextColor={'#000'}
                        value={id + ""}
                        keyboardType='numeric'
                        onChangeText={(value) => setid(value)}
                    />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#f00"
                    }}>
                        {idwarn}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>


                        <TouchableOpacity style={{
                            width: width * 0.3,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginRight: width * 0.04,
                            marginTop: height * 0.02,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}

                            onPress={() => {

                                vilidation("add", "")
                            }
                            }

                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000'
                            }}>
                                اضافه
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: width * 0.3,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            padding: 9,
                            marginTop: height * 0.02,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                            onPress={() => setshow3(false)}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#000'
                            }}>
                                الغاء
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Modal>
            <Modal visible={show}
                onRequestClose={() => setshow(false)}
                transparent={true}
            >
                <Animatable.View style={{
                    width: width * 0.8,
                    height: height * 0.2,
                    backgroundColor: '#000',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: height * 0.4,
                    marginLeft: width * 0.08
                }} >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff',
                        padding: 20
                    }}>
                        لقد اتممت التسبيحه بنجاح
                    </Text>
                    <TouchableOpacity style={{
                        width: width * 0.3,
                        height: height * 0.05,
                        borderRadius: 12,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => setshow(false)}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#000"
                        }}>
                            تم بنجاح
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Modal>
            <Modal visible={show2}
                onRequestClose={() => setshow2(false)}
                transparent={true}
            >
                <Animatable.View style={{
                    width: width * 0.85,
                    height: height * 0.35,
                    backgroundColor: '#19a777',
                    borderRadius: 20,
                    marginTop: height * 0.3,
                    alignItems: 'center',
                    justifyContent: "center",
                    marginLeft: width * 0.07

                }}>
                    <FlatList
                        data={listArray}
                        renderItem={({ item, index }) =>

                            <>
                                <View style={{
                                    width: width * 0.8,
                                    height: height * 0.05,
                                    backgroundColor: '#fff',
                                    borderRadius: 5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: 5,
                                    marginTop: height * 0.02

                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: '#000'
                                    }}>
                                        {item.name_task} ({item.id})
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => del(index)}
                                    >
                                        <Icon3 name="delete" size={30} color="#f00" style={{
                                            marginRight: width * 0.03
                                        }} />
                                    </TouchableOpacity>
                                </View>

                            </>
                        }
                    />
                    <TouchableOpacity style={{
                        width: width * 0.25,
                        height: height * 0.055,
                        borderRadius: 10,
                        // position: 'absolute',
                        //bottom: height * 0.29,
                        //right: width * 0.35,
                        alignItems: 'center',
                        backgroundColor: "#fff",
                        justifyContent: 'center'
                    }} onPress={() => setshow2(false)}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#f00'
                        }}>
                            الغاء
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

            </Modal>


            <TouchableOpacity style={{
                width: width * 0.18,
                borderRadius: 50,
                height: height * 0.08,
                backgroundColor: '#2E7474',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: height * 0.03,
                right: width * 0.03
            }}
                onPress={() => setshow3(true)}
            >
                <Image source={require('../img/105.png')} resizeMode='contain' style={{
                    width: width * 0.09
                }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{
                width: width * 0.18,
                borderRadius: 50,
                height: height * 0.08,
                backgroundColor: '#2E7474',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: height * 0.03,
                left: width * 0.03
            }}
                onPress={() => setshow2(true)}
            >
                <Icon2 name="list" size={30} color="#fff" />
            </TouchableOpacity>

        </>

    )
}