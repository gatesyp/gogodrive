import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Row, Col, Grid } from 'native-base'
import translateAndOpacity from '../../animations/translateAndOpacity'

class Toolbar extends PureComponent {

    onSwipeDown(gestureState) {
        console.log("down")
    }

    render() {
        const { onBackPress, rating } = this.props

        return (
            <View style={styles.toolbarContainer}>
                <View style={styles.statusBar} />
                <TouchableWithoutFeedback onPress={onBackPress}>
                    <Grid style={{width: "100%"}}>
                        <Row style={styles.row}>
                            <Col size={33}>
                                <Text style={styles.titleBackText}>
                                    <View>
                                        <Ionicons style={{top: 3}} name="ios-arrow-down" size={24} color="white" />
                                    </View>
                                    <View>
                                        <Text style={styles.titleBackText2}>
                                            {"Back"}
                                        </Text>
                                    </View>
                                </Text>
                            </Col>
                            <Col size={33}>
                                <Text style={styles.rating1}>
                                    Rating:
                                    <Text style={styles.rating2}>
                                        {" " + rating + "/10"}
                                    </Text>
                                </Text>
                            </Col>
                            <Col size={33}/>
                        </Row>
                    </Grid>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbarContainer: {
        marginTop: 10,
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    rating1: {
        alignSelf: "center",
        fontSize: 18,
        fontFamily: "Montserrat_regular",
        color: "white",
        top: 3
    },
    rating2: {
        alignSelf: "center",
        fontSize: 18,
        fontFamily: "Montserrat_bold",
        color: "white",
        top: 3
    },
    row: {
        top: 9
    },
    statusBar: {
        height: 24,
        backgroundColor: '#008dff',
    },
    titleBackText: {
        color: 'white',
        marginLeft: 3,
        fontSize: 18,
        fontFamily: "Montserrat_regular",
        textAlignVertical: "top"
    },
    titleBackText2: {
        color: 'white',
        marginLeft: 8,
        fontSize: 18,
        fontFamily: "Montserrat_regular",
        textAlignVertical: "top",
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default translateAndOpacity(Toolbar)
