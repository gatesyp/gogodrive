import React, { PureComponent } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

import { Row } from '../../components'
import translateAndOpacity from '../../animations/translateAndOpacity'

class Toolbar extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View>
                    <Row style={styles.toolbarContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                GoGo  
                                <Text style={styles.titleText2}> 
                                    {" Drive"}
                                </Text>
                            </Text>
                        </View>
                    </Row>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#008dff"
    },
    toolbarContainer: {
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    titleContainer: {
        flex: 1,
    },
    toolbarBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 150,
        backgroundColor: '#008dff',
    },
    statusBar: {
        height: 24,
        backgroundColor: '#008dff',
    },
    titleBackText: {
        color: 'white',
        marginLeft: 8,
        fontSize: 18,
        bottom: 1,
        fontFamily: "Montserrat_regular"
    },
    titleText: {
        fontSize: 24,
        fontWeight: '900',
        fontFamily: "Lato_bold",
        textAlign: 'center',
        color: "white"
    },
    titleText2: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontFamily: "Lato_bold_italic",
        fontWeight: "500",
        color: "white"
    },
    backContainer: {
        flex: 1,
        alignItems: 'center',
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default translateAndOpacity(Toolbar)
