import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  { text: 'Weclome to Despensa', color: '#03A9F4', bgSrc: './shrimps.jpg' },
  { text: 'Discover new recipes daily', color: '#009688', bgSrc: '../assets/img/japan_ramen.jpg' },
  { text: 'Explore new cuisines', color: '#03A9F4', bgSrc: '../assets/img/tortilla.jpg' },
]

class WelcomeScreen extends Component {

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen
