'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, TouchableOpacity
} from 'react-native'

import colors from './colors'
import Text from './Text'

const { width } = Dimensions.get('window')
const holderWidth = width - 50
const smallImageWidth = (holderWidth / 3) - 1
const bigImageWidth = (smallImageWidth * 2) + 2

class MultipleItems extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    {/* Since the image don't have borderRightWidth */}
                    <View style={ styles.bigImageHolder }>
                        <Image style={ styles.bigImage } source={{ uri: data.bigImageUri }} />
                    </View>
                    <View style={{ justifyContent: 'space-between'}}>
                        <Image style={ styles.smallImage } source={{ uri: data.smallTopImageUri }} />
                        <Image style={ styles.smallImage } source={{ uri: data.smallBottomImageUri }} />
                    </View>
                </View>
                <Text style={ styles.name } type='h5' ellipsizeMode='tail'>{ data.name }</Text>
                <Text>{ data.description }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        flexDirection: 'column',
        paddingVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine,
    },
    bigImage: {
        width: bigImageWidth,
        height: bigImageWidth
    },
    bigImageHolder: {
        marginRight: 2
    },
    smallImage: {
        width: smallImageWidth,
        height: smallImageWidth
    },
    name: {
        fontWeight: '700',
        paddingTop: 20
    },
    imagesHolder: {
        flexDirection: 'row'
    }
})

module.exports = MultipleItems
