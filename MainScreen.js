import React, { Component } from 'react';
import { InteractionManager, StyleSheet, Image, View } from 'react-native';
const pic = require("./assets/blue.jpg")
import { Container, Header, Content, Card, CardItem, Body, Text, Thumbnail, Button, Icon, Left, Right} from 'native-base';


export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <View style = {{
                    borderColor: '#000000',
                    borderWidth: 0.5,
                    backgroundColor:'#f7f7f7', 
                    height:200, 
                    width:200, 
                    borderRadius: 100, 
                    alignSelf: "center", 
                    marginVertical: 100
                    }}>
                        <Text style={{
                            fontSize: 100,
                            top: 30,
                            textAlign: "center",
                            textAlignVertical: "center",
                            color: "black"
                        }}>
                            B
                        </Text>
                    </View>
                    <Card>
                        <CardItem>
                            <Body style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'}}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "left",
                                    color: "black"}}>
                                    Speed (mph): 
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "right",
                                    color: "#33cc33"}}>
                                    40
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'}}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "left",
                                    color: "black"}}>
                                    Hard Stops: 
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "right",
                                    color: "#f2c524"}}>
                                    2
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'}}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "left",
                                    color: "black"}}>
                                    Swerves: 
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "right",
                                    color: "#ff0000"}}>
                                    5
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'}}>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "left",
                                    color: "black"}}>
                                    Hard Acceleration: 
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    textAlign: "right",
                                    color: "#ff0000"}}>
                                    4
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                   
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
