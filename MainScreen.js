
import React from 'react';
import { InteractionManager, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Constants, Location, Permissions, Accelerometer } from 'expo';
const haversine = require('haversine')


export default class LogScreen extends React.Component {
    state = {
        accelerometerData: [],
        location: [],
        transientLocation: null,
        errorMessage: null,

    }

    componentDidMount() {
        this._toggle();
    }
    componentWillMount() {
        // if (Platform.OS === 'android' && !Constants.isDevice) {
        //     this.setState({
        //         errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        //     });
        // } else {
        //     let timerId = setInterval(() => this._getLocationAsync(), 1000);


        // }
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
        if (this._subscription) {
            this._unsubscribe();
        } else {
            this._subscribe();
        }
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
            if (this.state.accelerometerData.length > 2) {
                console.log(this.state.accelerometerData.length)

                if (Math.abs(Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 1].x) - Math.abs(this.state.accelerometerData[this.state.accelerometerData.length - 2].x)) > .4) {
                    console.log("CRASH")
                    console.log("CRASH")
                    console.log("CRASH")
                    console.log("CRASH")
                    console.log("CRASH")
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
        // let { x, y, z } = this.state.transientAccelerometerData;
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.transientLocation) {
            text = this.state.transientLocation.coords.latitude
        }

        return (
            <View style={styles.sensor}>
                <Text>Accelerometer:</Text>
                {/* <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text> */}
                <Text style={styles.paragraph}>{text}</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this._toggle} style={styles.button}>
                        <Text>Toggle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
                        <Text>Slow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._fast} style={styles.button}>
                        <Text>Fast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._sendData} style={styles.button}>
                        <Text>SEND DATA</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    sensor: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
});

