import React, { useEffect, useState } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity, Modal, FlatList, StatusBar } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';
import axios, { Axios } from "axios";
const { height, width } = Dimensions.get('screen')
export default function Home2({ route, navigation }) {


    const [show, setshow] = useState(false)
    const [show1, setshow1] = useState(false)
    const [text1, settext1] = useState('')
    const [index, setindex] = useState(0)
    const [Adia, setAdia] = useState([
        {
            image: require("../img/62.png"),
            text: " اللهمّ إنّي أسألك فهم النبيّين، وحفظ المرسلين والملائكة المقرّبين، برحمتك يا أرحم الرّاحمين، اللهمّ اجعل ألسنتنا عامرة بذكرك، وقلوبنا بخشيتك، وأسرارنا بطاعتك، إنّك على كلّ شيءٍ قدير، وحسبي الله ونعم الوكيل",
            name: "الدراسه"
        },
        {
            image: require("../img/63.png"),
            text: "اللهم إني أحبه حبا يجهله هو وتعلمه أنت، يا رب بقدر حبي له اسعده واحفظه ولا تريني فيه بأسا يبكيني. اللهم وفق حبيبي اللهم لا سهل إلا ما جعلته سهلا اللهم اجعل الصعب سهلا ميسرا لحبيبي. اللهم إني أسألك لحبيبي توفيقا يلازم خطاه وتيسيرا لما يخاف تعسيره يارب اجعل له من التوفيق والراحة نصيب",
            name: "الحب"
        },
        {
            image: require("../img/64..png"),
            text: "اللهم بك أستعين وعليك أتوكل، اللهم ذلل لي صعوبة أمري، وسهل لي مشقته، وارزقني الخير كله أكثر مما أطلب، واصرف عني كل شر رب اشرح لي صدري ويسر لي أمري يا كريم. يا رب لا تدع أمرًا في صدري ٳلا حللته لي، ولا حلمًا سكن في قلبي طويلًا ٳلا ويسّرته لي. اللهم أحسن عاقبتنا في الأمور كلها، وأجرنا من خزي الدنيا وعذاب الآخرة",
            name: "الكسل",
        },
        {
            image: require("../img/64.png"),
            text: "اللهم أسعدني في أبسط تفاصيل حياتي و قرب لي الخير حيث كان. ... اللهم أسعدني سعاده لا نهايه لها. يارب بشرني بشاره فرح اللهم اسعدني سعاده ابكي من جمالها وافتح لي ابواب الخير. اللهم أسعدني ، وأشرح صدري و أرح قلبي اللهم إني أستودعك راحتي فإجعلني أسعد خلقك",
            name: "السعاده"
        },
        {
            image: require("../img/67.png"),
            text: "يا عزيز أعزني، ويا كافي اكفني، ويا قوي قوني، ويا لطيف الطف بي في أموري كلها والطف بي فيما نزل، اللهم إني أسألك سلامًا ما بعده كدر، ورضى ما بعده سخط، وفرحًا ما بعده حزن، اللهم املأ قلبي بكلّ ما فيه الخير لي، اللهم اجعل طريقي مسهلًا وأيامي القادمة أفضل من سابقاتها",
            name: "الحزن"
        },
    ])

    function flat(index) {
        let ar = Adia[index].text
        settext1(ar)
    }
    function Finish(index) {
        setnum(azkarsabah[index].number--)
        if (azkarsabah[index].number <= 0) {
            azkarsabah[index].number = 0
        }
        if (azkarsabah[index].number == 0) {
            azkarsabah[index].color = '#18bc9c'
        }
    }

    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={{
                width: width,
                height: height,
                backgroundColor: "#e0e0e0"
            }}>
                <LinearGradient
                    colors={['#8af12d', '#19a777']}
                    style={{
                        width: width,
                        height: height * 0.40,
                        borderBottomLeftRadius: 80,
                        borderBottomRightRadius: 80,
                        alignItems: "center",
                        justifyContent: "center"
                    }}

                >
                    <Image source={require('../img/66.png')}
                        resizeMode='contain'
                        style={{
                            width: width * 0.25,
                            height: height * 0.141,


                        }} />
                    <Text
                        style={{
                            fontSize: 50,
                            marginBottom: height * 0.03,
                            color: "#fff",
                            fontFamily: 'ReemKufi-VariableFont_wght'
                        }}>
                        إسلامنا
                    </Text>
                </LinearGradient>
                <View style={{
                    width: width,
                    height: height * 0.65,

                    marginTop: height * 0.04
                }}>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: height * 0.02,

                    }}>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginLeft: width * 0.04,
                                backgroundColor: "#ffffff",

                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopRightRadius: 150,
                                borderBottomRightRadius: 150
                            }}
                            onPress={() =>
                                navigation.navigate('Four')
                            }
                        >
                            <Image source={require('../img/47.png')}

                                style={{
                                    width: width * 0.14,
                                    height: height * 0.05,
                                    resizeMode: 'contain'
                                }} />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginRight: width * 0.05,
                                color: "#ae419b",
                            }}>
                                الاذكار
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginRight: width * 0.04,
                                backgroundColor: "#ffffff",
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopLeftRadius: 150,
                                borderBottomLeftRadius: 150
                            }}
                            onPress={() => navigation.navigate('Six')}
                        >
                            <Image source={require('../img/45.png')} style={{
                                width: width * 0.14,
                                height: height * 0.05,
                                resizeMode: 'contain'

                            }} />
                            {/* <View style={{
                                height: height * 0.08,
                                borderWidth: 2,
                                borderColor: "#e7e8e5"
                            }}>
                            </View> */}
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                marginRight: width * 0.00,
                                color: "#30bc70",
                            }}
                            >
                                القران الكريم
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: height * 0.02
                    }}>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginLeft: width * 0.04,
                                backgroundColor: "#ffffff",
                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopRightRadius: 150,
                                borderBottomRightRadius: 150
                            }}
                            onPress={() => navigation.navigate('Nine')}
                        >
                            <Image source={require('../img/50.png')}

                                style={{
                                    width: width * 0.14,
                                    height: height * 0.05,
                                    resizeMode: 'contain'
                                }} />

                            {/* <View style={{
                                height: height * 0.08,
                                borderWidth: 2,
                                borderColor: "#e7e8e5"
                            }}>
                            </View> */}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                marginRight: width * 0.01,
                                color: "#ce8942",

                            }}>
                                الرقيه الشرعيه
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginRight: width * 0.04,
                                backgroundColor: "#ffffff",
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopLeftRadius: 150,
                                borderBottomLeftRadius: 150
                            }}
                            onPress={() => navigation.navigate('Ten')}
                        >
                            <Image source={require('../img/49.png')} style={{
                                width: width * 0.14,
                                height: height * 0.05,
                                resizeMode: 'contain'
                            }} />
                            {/* <View style={{
                                height: height * 0.08,
                                borderWidth: 2,
                                borderColor: "#e7e8e5"
                            }}>
                            </View> */}
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginRight: width * 0.01,
                                color: "#3d743c",
                            }}
                            >
                                السبحه
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginTop: height * 0.02
                    }}>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginLeft: width * 0.04,
                                backgroundColor: "#ffffff",
                                //      borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopRightRadius: 150,
                                borderBottomRightRadius: 150
                            }}
                            onPress={() => navigation.navigate('Twelve')}
                        >
                            <Image source={require('../img/51.png')}
                                style={{
                                    width: width * 0.14,
                                    height: height * 0.05,
                                    resizeMode: 'contain'
                                }} />
                            {/* <View style={{
                                height: height * 0.08,
                                borderWidth: 2,
                                borderColor: "#e7e8e5"
                            }}>
                            </View> */}
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginRight: width * 0.01,
                                color: "#2b79a4",
                            }}>
                                سنن
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: width * 0.4,
                                height: height * 0.12,
                                marginRight: width * 0.04,
                                backgroundColor: "#ffffff",
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "space-around",
                                flexDirection: "row",
                                borderTopLeftRadius: 150,
                                borderBottomLeftRadius: 150
                            }}
                            onPress={() => {
                                setshow(true)
                            }}
                        >
                            <Image source={require('../img/52.png')} style={{
                                width: width * 0.14,
                                height: height * 0.05,
                                resizeMode: 'contain'
                            }} />
                            {/* <View style={{
                                height: height * 0.08,
                                borderWidth: 2,
                                borderColor: "#e7e8e5"
                            }}>
                            </View> */}
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginRight: width * 0.01,
                                color: "#4b76bc",
                            }}
                            >
                                الادعيه
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal visible={show}
                onRequestClose={() => setshow(false)}
                transparent={true}
            >
                <Animatable.View
                    duration={2000}
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    animation="slideInDown"
                >
                    <LinearGradient
                        colors={["#baad0d", "#d27a1a", "#de5824"]}
                        style={{
                            width: width * 0.94,
                            height: height * 0.16,
                            alignItems: "center",
                            marginTop: height * 0.295,
                            borderRadius: 30,
                        }}
                    >
                        {<FlatList
                            data={Adia}
                            horizontal={true}
                            renderItem={({ item, index }) =>
                                <>
                                    <TouchableOpacity style={{
                                        width: width * 0.217,
                                        height: height * 0.117,
                                        borderRadius: 15,
                                        backgroundColor: "#fff",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        marginTop: height * 0.032,
                                        marginRight: width * 0.01,
                                        marginLeft: width * 0.009
                                    }}
                                        onPress={() => {
                                            flat(index)
                                            setshow(false)
                                            setshow1(true)
                                        }}
                                    >
                                        <Image source={item.image} style={{
                                            width: width * 0.14,
                                            height: height * 0.07,
                                            resizeMode: 'contain'

                                        }} />
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: "bold",
                                            color: "#000"
                                        }}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            }
                        />}
                        <TouchableOpacity style={{
                            position: 'absolute',
                            top: height * 0.007,
                            right: width * 0.03,
                        }}
                            onPress={() => setshow(false)}
                        >
                            <Image source={require('../img/65.png')} style={{
                                width: width * 0.09,
                                height: height * 0.02
                            }}
                            />
                        </TouchableOpacity>
                    </LinearGradient>
                </Animatable.View>
            </Modal>
            <Modal visible={show1}
                onRequestClose={() => setshow1(false)}
                transparent={true}
            >
                <Animatable.View duration={2000}

                    style={{
                        width: width * 0.9,
                        maxHeight: height,
                        backgroundColor: "#19a777",
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: "center",
                        marginTop: height * 0.5,
                        marginLeft: width * 0.05
                    }}
                    animation="fadeInUpBig"
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#fff",
                        padding: 20
                    }}>
                        {text1}
                    </Text>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: height * 0.01,
                            left: width * 0.01
                        }}
                        onPress={() => {
                            setshow1(false)
                        }}
                    >
                        <Image source={require('../img/65.png')} style={{
                            width: width * 0.09,
                            height: height * 0.03
                        }} />
                    </TouchableOpacity>
                </Animatable.View>
            </Modal>

        </>
    )
}