import React, { PureComponent } from 'react'
import {
    Easing,
    Text,
    View,
    FlatList,
    StyleSheet,
} from 'react-native'

import { MapView, Constants } from 'expo'
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

    regionContainingPoints(points) {
        var minX, maxX, minY, maxY
      
        // init first point
        ((point) => {
            minX = point.latitude
            maxX = point.latitude
            minY = point.longitude
            maxY = point.longitude
        })(points[0])
      
        // calculate rect
        points.map((point) => {
            minX = Math.min(minX, point.latitude)
            maxX = Math.max(maxX, point.latitude)
            minY = Math.min(minY, point.longitude)
            maxY = Math.max(maxY, point.longitude)
        })
      
        var midX = (minX + maxX) / 2
        var midY = (minY + maxY) / 2
        var midPoint = [midX, midY]
      
        var deltaX = (maxX - minX) + (maxX - minX) / 0.97
        var deltaY = (maxY - minY) + (maxY - minY) / 0.97
      
        return {
            latitude: midX, longitude: midY,
            latitudeDelta: deltaX, longitudeDelta: deltaY,
        }
    }

    getBorderColor() {
        minutes = parseInt( this.props.selectedItem.amount.split(" ")[0] )
        const maxAllowedIncidents = minutes / 10

        borderColor = "green"
        if(this.props.selectedItem.items[0].amount > maxAllowedIncidents || this.props.selectedItem.items[1].amount > maxAllowedIncidents || this.props.selectedItem.items[2].amount > 0 ) {
            borderColor = "#EBD603"
        }

        if(this.props.selectedItem.items[3].amount > 0) {
            borderColor = "#FF2C4C"
        }

        return borderColor
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

                <View>
                    {index == 3 && Constants.isDevice ? (
                        <View style={{
                            margin: 20,
                            marginTop: 10,
                            height: 200
                        }}>
                            <MapView
                                style={{width: "100%", height: "100%", borderRadius: 7, borderWidth: 1, borderColor: this.getBorderColor()}}
                                cacheEnabled={false}
                                pitchEnabled={true}
                                rotateEnabled={true}
                                scrollEnabled={true}
                                zoomEnabled={true}
                                zoomControlEnabled={true}
                                showsCompass={true}
                                showsBuildings={true}
                                showsTraffic={true}
                                showsIndoors={true}
                                initialRegion={this.regionContainingPoints(this.props.selectedItem.route)}
                            >
                                <MapView.Polyline
                                    coordinates={this.props.selectedItem.route}
                                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                                    strokeColors={[
                                        borderColor
                                    ]}
                                    strokeWidth={3}
                                />

                                {this.props.selectedItem.pois ? this.props.selectedItem.pois.map((marker, index) => {
                                    return(
                                        <MapView.Marker
                                            key={index}
                                            coordinate={marker.coord}
                                            title={marker.title}
                                        />
                                    )
                                }) : <View/>}

                            </MapView>
                        </View>
                    ) : (
                        <View></View>
                    )}
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

        rating = Math.floor( 10 - (abruptStops + abruptAccel + swerves) )
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
