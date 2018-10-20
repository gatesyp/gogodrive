import React from 'react';
import { InteractionManager, StyleSheet, Text, View } from 'react-native';

export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>HELLO</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
