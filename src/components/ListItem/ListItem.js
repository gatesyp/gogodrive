import React, { PureComponent } from 'react'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { ScaleAndOpacity } from 'react-native-motion'

import Header from './Header'
import Content from './Content'
import { getPlatformElevation } from '../../utils'

class ListItem extends PureComponent {

    onPressed = event => {
        const { onPress, item } = this.props
        onPress(item, event.nativeEvent)
    }

    render() {
        const { item, style, isHidden, animateOnDidMount } = this.props
        const { name, ...rest } = item

        driveType = "green"

        redShadow = { 
            shadowColor: 'green',
            shadowOpacity: 1.0
        }

        minutes = parseInt( item.amount.split(" ")[0] )
        const maxAllowedIncidents = minutes / 10

        if(item.items[0].amount > maxAllowedIncidents || item.items[1].amount > maxAllowedIncidents || item.items[2].amount > 0 ) {
            redShadow = {
                shadowColor: '#EBD603',
                shadowOpacity: 1.0
            }
            driveType = "yellow"
        }

        if(item.items[3].amount > 0) {
            redShadow = {
                shadowColor: '#FF2C4C',
                shadowOpacity: 1.0
            }
            driveType = "red"
        }

        return (
            <ScaleAndOpacity
            isHidden={isHidden}
            animateOnDidMount={animateOnDidMount}
            >
                <TouchableWithoutFeedback onPress={this.onPressed}>
                    <View style={[styles.container, style, redShadow]} pointerEvents="box-only">
                        <Header name={name} driveType={driveType} />
                        <Content {...rest} />
                    </View>
                </TouchableWithoutFeedback>
            </ScaleAndOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginVertical: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        backgroundColor: 'white',
        ...getPlatformElevation(2),
    },
})

export default ListItem
