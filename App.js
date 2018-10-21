import LogScreen from './LogScreen'
import MainScreen from './MainScreen'

import React from 'react'
import { UIManager, Platform, StatusBar } from 'react-native'
import { Root } from 'native-base' // for https://docs.nativebase.io/Components.html
import { Font, AppLoading } from 'expo'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { loading: true }
        // console.disableYellowBox = true

        if (Platform.OS === 'android') { //enable layoutAnimation to work on android
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    async componentWillMount() {
        //see if user is logged in already when app is loaded

        // nativebase used fonts
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Montserrat_regular': require('./src/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
            'Montserrat_medium': require('./src/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
            'Montserrat_italic': require('./src/assets/fonts/Montserrat/Montserrat-Italic.ttf'),
            'Montserrat_semi_bold': require('./src/assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
            'Montserrat_bold': require('./src/assets/fonts/Montserrat/Montserrat-Bold.ttf'),
            'Montserrat_thin': require('./src/assets/fonts/Montserrat/Montserrat-Thin.ttf'),
            'Lato_regular': require('./src/assets/fonts/Lato/Lato-Regular.ttf'),
            'Lato_bold': require('./src/assets/fonts/Lato/Lato-Bold.ttf'),
            'Lato_bold_italic': require('./src/assets/fonts/Lato/Lato-BoldItalic.ttf'),
        })
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return <AppLoading />
        }

        return(
            <Root>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <LogScreen />
            </Root>
        )
    }
}

export default App
// export default MainScreen