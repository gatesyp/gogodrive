import React, { PureComponent } from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Entypo,
  Ionicons,
} from '@expo/vector-icons';

import { Row } from '../../components';
import { getPlatformElevation } from '../../utils';

class BottomBar extends PureComponent {
  constructor(props) {
    super(props);

    historySize = props.history ? 32 : 24
    historyColor = props.history ? "#008DFF" : "#ddd"

    homeSize = props.home ? 32 : 24
    homeColor = props.home ? "#008DFF" : "#ddd"

    settingsSize = props.settings ? 32 : 24
    settingsColor = props.settings ? "#008DFF" : "#ddd"

    this.state = {
      translateY: new Animated.Value(0),
      historySize: historySize,
      historyColor: historyColor,
      homeSize: homeSize,
      homeColor: homeColor,
      settingsSize: settingsSize,
      settingsColor: settingsColor
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isHidden && nextProps.isHidden) {
      this.hideAnimation();
    }
    if (this.props.isHidden && !nextProps.isHidden) {
      this.showAnimation();
    }
  }
  hideAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 56,
      useNativeDriver: true,
    }).start();
  }
  showAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateY: this.state.translateY,
              },
            ],
          },
        ]}
      >
        <Row style={styles.barContainer}>
            <TouchableWithoutFeedback onPress={() => updateScreen(0)}>
                <View style={styles.iconContainer}>
                    <Entypo name="archive" size={this.state.historySize} color={this.state.historyColor} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => updateScreen(1)}>
                <View style={styles.iconContainer}>
                    <Ionicons name="ios-home" size={this.state.homeSize} color={this.state.homeColor} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => updateScreen(2)}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="settings" size={this.state.settingsSize} color={this.state.settingsColor} />
                </View>
            </TouchableWithoutFeedback>
        </Row>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 10,
    height: 75,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  barContainer: {},
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'white',
  },
  titleBackText: {
    color: 'white',
    marginLeft: 8,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomBar;
