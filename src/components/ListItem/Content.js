import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Row from '../Row'

class Content extends PureComponent {

    render() {
        const { amount, date } = this.props

        return (
            <Row style={styles.container}>
                <View style={styles.cellContainer}>
                    <Text style={styles.titleText}>Length</Text>
                    <Text style={styles.amountText}>{amount}</Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={styles.titleText}>Date</Text>
                    <Text style={styles.amountText}>{date.format('LL')}</Text>
                </View>
            </Row>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
    },
    cellContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: 10,
        fontFamily: "Montserrat_thin",
        color: 'black',
    },
    amountText: {
        fontSize: 18,
        fontFamily: "Montserrat_medium",
    },
})

export default Content
