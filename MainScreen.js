import React, { Component } from 'react';
import { InteractionManager, StyleSheet, Image, View } from 'react-native';
import { MapView, Constants, Location, Permissions, Accelerometer } from 'expo';

import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Icon, Left, Right } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const haversine = require('haversine')
let img = require('./assets/julies-actual-best.png')



export default class LogScreen extends React.Component {
    state = {
        accelerometerData: [],
        location: [],
        transientLocation: null,
        errorMessage: null,
        hardStops: 0,
        swerves: 0,
        accelerations: 0

    }
    constructor(props) {
        super(props);
        this._subscribe()
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        const locationData = this.state.location;
        locationData.push(location)
        this.setState({ transientLocation: location })

        this.setState({ location: locationData });
    };

    componentWillUnmount() {
        this._unsubscribe();
    }

    _toggle = () => {
        // if (this._subscription) {
        //     this._unsubscribe();
        // } else {
        this._subscribe();
        // }
    }

    _slow = () => {
        Accelerometer.setUpdateInterval(500);
    }
    _sendData = () => {
        fetch('http://ffce8095.ngrok.io/data', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // locationData: this.state.location,
                accelerometerData: this.state.accelerometer,
                velocity: this.state.velocity
            }),
        });


    }

    _fast = () => {
        Accelerometer.setUpdateInterval(16);
    }

    _subscribe = () => {
        this._subscription = Accelerometer.addListener(accelerometerData => {
            this._getLocationAsync()
            // this.setState({ transientAccelerometerData: accelerometerData })
            // store accelereomteter data
            const storedAccelerometerData = this.state.accelerometerData;
            storedAccelerometerData.push(accelerometerData)
            this.setState({ accelerometerData: storedAccelerometerData });
            // console.log(accelerometerData)

            // compare distance between the last two values
            // if (this.state.accelerometer)
            //     console.log(this.state.accelerometer[this.state.accelerometer.length].x)

            //hard stops
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].x) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].x)) > .4) {
                    console.log("HARD STOP")
                    const hardStops = this.state.hardStops + 1;
                    this.setState({ hardStops: hardStops })
                }
            }
            //swerves
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].y) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].y)) > .4) {
                    console.log("SWERVE")
                    const swerves = this.state.swerves + 1;
                    this.setState({ swerves: swerves })
                }
            }
            //accelerations
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].z) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].z)) > .4) {
                    console.log("ACCELERATION")
                    const accelerations = this.state.accelerations + 1;
                    this.setState({ accelerations: accelerations })
                }
            }
            // do all the velocity calculations
            // TO GET MPH!!!!! dont delete 

            // if (this.state.location.length > 2) {
            //     const start = {
            //         latitude: this.state.location[this.state.location.length - 1].coords.latitude,
            //         longitude: this.state.location[this.state.location.length - 1].coords.longitude
            //     }
            //     const end = {
            //         latitude: this.state.transientLocation.coords.latitude,
            //         longitude: this.state.transientLocation.coords.longitude
            //     }
            //     distance = haversine(start, end, { unit: 'mile' })
            //     if (!distance)
            //         distance = 0
            //     startTime = this.state.transientLocation.timestamp
            //     endTime = this.state.transientLocation.timestamp
            //     timeBetween = endTime - startTime
            //     velocity = distance / timeBetween
            //     // console.log(startTime)
            //     // multiple by 1000 for miles/second
            //     // console.log(velocity * 7200000, 'mile/hr')
            //     // this.setState({ velocity: velocity })

            //     // console.log(nextState.transientLocation.coords.latitude); //will show the new state
            //     // console.log(this.state.transientLocation); //will show the previous state
            // }

        });
        Accelerometer.setUpdateInterval(1000);

    }

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    }
    render() {
        return (
            <Container style={{ width: '100%', height: '100%' }}>
                <Image
                    style={{
                        resizeMode: 'stretch',
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}
                    source={img}
                />
                <Header />
                <Content >

                    <View style={{ paddingRight: 20, paddingLeft: 20, backgroundColor: 'transparent' }}>
                        <View style={{ height: 20 }} />
                        <View style={{
                            height: 200,
                        }}>
                            <Text style={{ fontSize: 40, color: '#497DE8', fontWeight: '600' }}>
                                Hi Matt!
                        </Text>
                            <Text style={{ fontSize: 22, color: '#497DE8', paddingTop: 5, paddingRight: 50, fontWeight: '500' }}>
                                Tonight is a bit rainy. Brake earlier than you think!
                        </Text>
                        </View>

                        <View style={{
                            flex: 1, flexDirection: 'row', justifyContent: 'space-between', shadowColor: '#000',
                        }}>
                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12 }}>
                                        Hard Stops
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold' }}>
                                    {this.state.hardStops}
                                </Text>
                                <View style={{ backgroundColor: '#69DDC5', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11 }}>
                                        Normal
                                </Text>
                                </View>
                            </View>

                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12 }}>
                                        Swerves
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold' }}>
                                    {this.state.swerves}
                                </Text>
                                <View style={{ backgroundColor: '#F98C53', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11 }}>
                                        Moderate
                                </Text>
                                </View>
                            </View>

                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12 }}>
                                        Accelerations
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold' }}>
                                    {this.state.accelerations}
                                </Text>
                                <View style={{ backgroundColor: '#FC3737', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11 }}>
                                        Severe
                                </Text>
                                </View>
                            </View>


                        </View>
                    </View>

                    <View style={{ height: '100%', paddingTop: 40 }}>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    </View>
                </Content>

            </Container>
        );
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
