import React from 'react';
import { StyleSheet } from 'react-native';

import Toolbar from './src/screens/List/Toolbar'
import ToolbarBackground from './src/screens/Detail/ToolbarBackground'

import BottomBar from './src/screens/List/BottomBar.js';

import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Icon, Left, Right } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const haversine = require('haversine')
let img = require('./assets/julies-actual-best.png')

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{width: "100%", height: "100%"}}>
                <Toolbar
                    isHidden={false}
                />

                <ToolbarBackground
                    isHidden={true}
                />

                <Content>
                    
                </Content>

                <BottomBar settings isHidden={false} />
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
