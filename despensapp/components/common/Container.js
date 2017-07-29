import React, { Component } from 'react'
import {
    StatusBar, StyleSheet, View, Platform
} from 'react-native'

import colors from './colors'

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                {/* Replace status on iOS */}
                { Platform.OS == 'ios' && <View style={[ this.props.statusBarStyle || {}, { height: 20 }]}></View>}
                { this.props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgWhite,
        alignItems: 'stretch',
        flex: 1
    },
    shoppingCart: {
        position: 'absolute',
        top: 13,
        right: 15,
        color: colors.txtDescription,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})

module.exports = Container
