import React, { PureComponent } from 'react'
import {
    Easing,
    Text,
    View,
    FlatList,
    StyleSheet,
} from 'react-native'

import { SharedElement, TranslateYAndOpacity } from 'react-native-motion'

import { ListItem, Row } from '../../components'
import Toolbar from './Toolbar'
import BottomBar from './BottomBar'

class Detail extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            opacityOfDestinationItem: 0,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.phase === 'phase-2' && nextProps.phase === 'phase-3') {
            this.sharedElementRef.moveToSource()
        }
    }

    onMoveToDestinationDidFinish = () => {
        this.setState({ opacityOfDestinationItem: 1 })
        this.props.onSharedElementMovedToDestination()
    }

    onMoveToSourceWillStart = () => {
        this.setState({ opacityOfDestinationItem: 0 })
    }

    renderItem = ({ item, index }) => {
        const { phase, selectedItem } = this.props

        let delay = index

        // we need it to go from the end
        if (phase === 'phase-3') {
            delay = selectedItem.items.length - index
        }

        return (
            <TranslateYAndOpacity isHidden={phase !== 'phase-2'} delay={56 * delay}>
                <View style={styles.itemContainer}>
                    <Row style={styles.rowContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{item.name}</Text>
                        </View>
                        <Text style={styles.amountText}>{item.amount}</Text>
                    </Row>
                    <Text style={styles.vatText}>
                        {}
                    </Text>
                </View>
            </TranslateYAndOpacity>
        )
    }

    render() {
        const {
            selectedItem,
            phase,
            onBackPress,
            onSharedElementMovedToSource,
        } = this.props
        const { opacityOfDestinationItem } = this.state

        const { items = [] } = selectedItem || {}

        if (!selectedItem) {
            return null
        }

        rating = 0

        minutes = parseInt( selectedItem.amount.split(" ")[0] )
        const maxAllowedIncidents = minutes / 10

        abruptStops = parseInt(selectedItem.items[0].amount) - maxAllowedIncidents
        abruptAccel = parseInt(selectedItem.items[1].amount) - maxAllowedIncidents
        if(abruptStops < 0)
            abruptStops = 0
        if(abruptAccel < 0)
            abruptAccel = 0
        swerves = parseInt(selectedItem.items[2].amount)

        rating = 10 - (abruptStops + abruptAccel + swerves)
        if(rating < 0)
            rating = 0
        if(rating > 10)
            rating = 10

        return (
            <View style={styles.container}>
                <Toolbar rating={rating} isHidden={phase === 'phase-3'} onBackPress={onBackPress} />
                <SharedElement
                ref={node => (this.sharedElementRef = node)}
                sourceId={selectedItem.id}
                easing={Easing.in(Easing.back())}
                onMoveToDestinationDidFinish={this.onMoveToDestinationDidFinish}
                onMoveToSourceWillStart={this.onMoveToSourceWillStart}
                onMoveToSourceDidFinish={onSharedElementMovedToSource}
                >
                    <View
                    style={{
                    opacity: opacityOfDestinationItem,
                    backgroundColor: 'transparent',
                    }}
                    >
                        <ListItem
                        item={selectedItem}
                        onPress={() => {}}
                        animateOnDidMount={false}
                        isHidden={false}
                        />
                    </View>
                </SharedElement>
                <FlatList
                data={items}
                dataExtra={phase}
                keyExtractor={(item, index) => selectedItem.id + (index + "detail")}
                renderItem={this.renderItem}
                />
                <BottomBar isHidden={phase === 'phase-3'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    titleContainer: {
        flex: 1,
    },
    itemContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    rowContainer: {
        alignItems: 'center',
    },
    titleText: {
        fontFamily: "Montserrat_regular",
        color: 'black',
    },
    amountText: {
        fontSize: 18,
        fontFamily: "Montserrat_bold"
    },
    vatText: {
        fontSize: 10,
        color: 'gray',
        fontFamily: "Montserrat_regular"
    },
})

export default Detail
