import React, { Component } from 'React'
import {
    View, Image, StyleSheet, Dimensions
} from 'react-native'

import colors from './colors'
import Text from './Text'

class SingleItem extends Component {
    render() {
        let data = this.props.data
        let imgWidth = Dimensions.get('window').width - 50
        let imgHeight = imgWidth * data.ratio

        return (
            <View style={[ styles.holder, this.props.style || {} ]}>
                <View>
                    <Image style={{ width: imgWidth, height: imgHeight }} source={{ uri: data.thumb }} />
                    { this.props.overlay && <View style={ styles.overlay }></View> }
                </View>
                <Text style={ styles.name } type='h5'>{ data.name }</Text>
                <Text>{ data.description }</Text>
                { this.props.children }
            </View>
        )

    }
}

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        paddingTop: 20
    },
    holder: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine,
        paddingVertical: 20
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.1)',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    }
})

module.exports = SingleItem
