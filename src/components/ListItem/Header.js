import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Avatar from './Avatar'
import Row from '../Row'
import assets from '../../assets'

class Header extends PureComponent {
    
    render() {
        const { name, driveType } = this.props

        let icon = null

        if (driveType == "green") {
            icon = <Ionicons name="md-checkbox" size={24} color="green" />
        } else if (driveType == "yellow") {
            icon = <MaterialIcons name="warning" size={24} color="#EBD603" />
        } else if (driveType == "red") {
            icon = <MaterialIcons name="warning" size={24} color="#FF2C4C" />
        }

        return (
            <Row style={styles.container}>
                <Avatar text={name.substring(0, 1)} src={assets[name]} />
                <View style={styles.nameContainer}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.rightContainer}>{icon}</View>
            </Row>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        paddingLeft: 0,
        marginLeft: 0,
    },
    nameContainer: {
        flex: 1,
    },
    rightContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { 
        textAlign: 'left',
        fontSize: 18,
        fontFamily: "Montserrat_semi_bold",
        right: 48
    }
})

export default Header
