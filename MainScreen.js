import React, { Component } from 'react';
import { InteractionManager, StyleSheet, Image, View } from 'react-native';
import { MapView, Location, Permissions, Accelerometer } from 'expo';

import ToolbarBackground from './src/screens/Detail/ToolbarBackground'
import Toolbar from './src/screens/List/Toolbar'
import BottomBar from './src/screens/List/BottomBar.js';

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
        accelerations: 0,
    }
    constructor(props) {
        super(props);

        console.log("constructor called")

        this._subscribe()

        this._getLocationAsync = this._getLocationAsync.bind(this)
    }

    componentWillMount() {
        if(!this.state.region) {
            Location.getCurrentPositionAsync({ enableHighAccuracy: false }).then(shitLocation => {
                let coords = [{ latitude: shitLocation.coords.latitude, longitude: shitLocation.coords.longitude, }]
                let region = this.regionContainingPoints(coords)
                this.mapView.animateToRegion(region, 1)
                this.setState({region: region})
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.state.accelerometerData.length == nextState.accelerometerData.length)
            return false
        else {
            console.log("Wwwwhhhat")
        }
        console.log("screen will update", nextProps, nextState)
    }

    _getLocationAsync = async () => {
        console.log("get location async called")
        if(!this.state.status) {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            this.setState({ status : status })
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

        return location
    };

    regionContainingPoints(points) {
        console.log("region containing points called")
        var minX, maxX, minY, maxY
      
        // init first point
        ((point) => {
            minX = point.latitude
            maxX = point.latitude
            minY = point.longitude
            maxY = point.longitude
        })(points[0])
      
        // calculate rect
        points.map((point) => {
            minX = Math.min(minX, point.latitude)
            maxX = Math.max(maxX, point.latitude)
            minY = Math.min(minY, point.longitude)
            maxY = Math.max(maxY, point.longitude)
        })
      
        var midX = (minX + maxX) / 2
        var midY = (minY + maxY) / 2
        var midPoint = [midX, midY]
      
        var deltaX = (maxX - minX) + (maxX - minX) / 0.97
        var deltaY = (maxY - minY) + (maxY - minY) / 0.97

        if(deltaX == 0)
            deltaX = 0.5

        if(deltaY == 0)
            deltaY = 0.5
      
        return {
            latitude: midX, longitude: midY,
            latitudeDelta: deltaX, longitudeDelta: deltaY,
        }
    }

    componentWillUnmount() {
        console.log("unmount called")
        this._unsubscribe();
    }

    _sendData = (transientLocation) => {
        console.log("send data called")
        fetch('http://28281e22.ngrok.io/alert', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location: transientLocation,
            }),
        });


    }

    _subscribe = () => {
        console.log("subscribe called")
        this._subscription = Accelerometer.addListener(accelerometerData => {
            // store accelereomteter data
            const storedAccelerometerData = this.state.accelerometerData;
            storedAccelerometerData.push(accelerometerData)
            // console.log(accelerometerData)

            // compare distance between the last two values
            // if (this.state.accelerometer)
            //     console.log(this.state.accelerometer[this.state.accelerometer.length].x)

            //hard stops
            hardStops = this.state.hardStops
            swerves = this.state.swerves
            accelerations = this.state.accelerations
            markers = []
            if(this.state.markers)
                markers = JSON.parse(JSON.stringify(this.state.markers))

            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].x) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].x)) > .4) {
                    console.log("HARD STOP")
                    hardStops = this.state.hardStops + 1;
                    this._getLocationAsync().then((transientLocation) => {
                        if(transientLocation && transientLocation.coords && transientLocation.coords.longitude) {
                            markers.push({
                                coord: {longitude: transientLocation.coords.longitude, latitude: transientLocation.coords.latitude, },
                                title: "Abrupt Stop"
                            })
                            this.setState({markers: markers})
                        }
                        this._sendData(transientLocation)
                    })
                }
            }
            //swerves
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].y) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].y)) > .4) {
                    console.log("SWERVE")
                    swerves = this.state.swerves + 1;
                    this._getLocationAsync().then((transientLocation) => {
                        if(transientLocation && transientLocation.coords && transientLocation.coords.longitude) {
                            markers.push({
                                coord: {longitude: transientLocation.coords.longitude, latitude: transientLocation.coords.latitude, },
                                title: "Abrupt Swerve"
                            })
                            this.setState({markers: markers})
                        }
                    })
                }
            }
            //accelerations
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)
                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].z) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].z)) > .4) {
                    console.log("ACCELERATION")
                    accelerations = this.state.accelerations + 1;
                    this._getLocationAsync().then((transientLocation) => {
                        if(transientLocation && transientLocation.coords && transientLocation.coords.longitude) {
                            markers.push({
                                coord: {longitude: transientLocation.coords.longitude, latitude: transientLocation.coords.latitude, },
                                title: "Abrupt Acceleration"
                            })
                            this.setState({markers: markers})
                        }
                    })
                }
            }
            this.setState({ accelerations: accelerations, hardStops: hardStops, swerves: swerves, accelerometerData: storedAccelerometerData })
        });
        Accelerometer.setUpdateInterval(1000);

    }

    _unsubscribe = () => {
        console.log("unsubscribe 2 called")
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

                <Toolbar
                    isHidden={false}
                />

                <ToolbarBackground
                    isHidden={true}
                />

                <Content >

                    <View style={{ paddingRight: 20, paddingLeft: 20, backgroundColor: 'transparent' }}>
                        <View style={{ height: 20 }} />
                        <View style={{
                            height: 200,
                        }}>
                            <Text style={{ fontSize: 40, color: '#497DE8', fontWeight: '600', fontFamily: "Lato_bold"}}>
                                Hi Matt!
                        </Text>
                            <Text style={{ fontSize: 22, color: '#497DE8', paddingTop: 5, paddingRight: 50, fontWeight: '500', fontFamily: "Lato_regular" }}>
                                Today is a bit rainy. Brake earlier than you think!
                        </Text>
                        </View>

                        <View style={{
                            flex: 1, flexDirection: 'row', justifyContent: 'space-between', shadowColor: '#000',
                        }}>
                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12, fontFamily: "Lato_semi_bold" }}>
                                        Hard Stops
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold', fontFamily: "Lato_bold" }}>
                                    {this.state.hardStops}
                                </Text>
                                <View style={{ backgroundColor: '#69DDC5', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11, fontFamily: "Lato_semi_bold" }}>
                                        Normal
                                </Text>
                                </View>
                            </View>

                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12, fontFamily: "Lato_semi_bold" }}>
                                        Swerves
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold', fontFamily: "Lato_bold" }}>
                                    {this.state.swerves}
                                </Text>
                                <View style={{ backgroundColor: '#F98C53', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11, fontFamily: "Lato_semi_bold" }}>
                                        Moderate
                                </Text>
                                </View>
                            </View>

                            <View style={{ width: 100, height: 120, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 10 }}>

                                    <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 12, fontFamily: "Lato_semi_bold" }}>
                                        Accelerations
                            </Text>
                                </View>
                                <Text style={{ fontSize: 36, alignSelf: 'center', fontWeight: 'bold', fontFamily: "Lato_bold" }}>
                                    {this.state.accelerations}
                                </Text>
                                <View style={{ backgroundColor: '#FC3737', alignContent: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontSize: 11, fontFamily: "Lato_semi_bold" }}>
                                        Severe
                                </Text>
                                </View>
                            </View>


                        </View>
                    </View>

                    <View style={{ height: '80%', paddingTop: 40 }}>
                        <MapView
                            key={"map"}
                            style={{ flex: 1, marginLeft: 20, marginRight: 20, borderRadius: 7, marginBottom: 30 }}
                            ref={(ref) => this.mapView = ref}
                        >
                        {
                            this.state.markers ? this.state.markers.map((marker, index) => {
                                return(
                                    <MapView.Marker
                                        key={index}
                                        coordinate={marker.coord}
                                        title={marker.title}
                                    />
                                )
                            }) : <View/>
                        }
                        </MapView>
                    </View>
                </Content>

                <BottomBar home updateScreen={this.updateScreen} isHidden={this.state.phase !== 'phase-0'} />
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


 // do all the velocity calculations
            // TO GET MPH!!!!! dont delete 

            // if (this.state.location.length > 2) {
            //     const start = {
            //         latitude: this.state.location[this.state.location.length - 1].coords.latitude,
            //         longitude: this.state.location[this.state.location.length - 1].coords.longitude
            //     }
            //     const end = {
            //         latitude: transientLocation.coords.latitude,
            //         longitude: transientLocation.coords.longitude
            //     }
            //     distance = haversine(start, end, { unit: 'mile' })
            //     if (!distance)
            //         distance = 0
            //     startTime = transientLocation.timestamp
            //     endTime = transientLocation.timestamp
            //     timeBetween = endTime - startTime
            //     velocity = distance / timeBetween
            //     // console.log(startTime)
            //     // multiple by 1000 for miles/second
            //     // console.log(velocity * 7200000, 'mile/hr')

            //     // console.log(nextState.transientLocation.coords.latitude); //will show the new state
            //     // console.log(transientLocation); //will show the previous state
            // }