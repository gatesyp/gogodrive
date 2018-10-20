import React from 'react';
import { InteractionManager, StyleSheet } from 'react-native';

import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
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
