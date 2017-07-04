import React, { Component } from 'react'
import {
  ScrollView,
  View, StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button,
  Text,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements'

import TagInputComponent from '../components/TagInput'

class AskScreen extends Component {

  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Ask',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="create"
        size={24}
        style={{ color: tintColor }} />
    ),
    headerTitle: <Text style={{ fontSize: 20 }}>Ask for a Recipe</Text>,
    headerRight: <TouchableOpacity style={{ marginRight: 20 }}>
      <Icon
        name="reorder"
        size={26}
        color='#ff585b'
        onPress={() => { navigation.navigate('DrawerOpen') }}
        />
    </TouchableOpacity>,
    headerLeft: <TouchableOpacity style={{ marginLeft: 5 }}>
      <Icon
        name="arrow-back"
        size={26}
        color='#757575'
        onPress={() => { navigation.navigate('discoverscreen') }}
        />
    </TouchableOpacity>
  })

  constructor(props) {
    super(props);
    this.state = {
      ing1: 'Enter ingredient',
      ing2: 'Enter ingredient',
      ing3: 'Enter ingredient',
    }
  }

  onInputChange(text, id) {
    switch(id) {
      case "ing1":
        this.setState({ "ing1": text })
        break
      case "ing2":
        this.setState({ "ing2": text })
        break
      case "ing3":
        this.setState({ "ing3": text })
        break
    }
  }

  handleSearchParams(state) {
    const { ing1, ing2, ing3 } = state
    console.log('ing1', ing1)
    console.log('ing2', ing2)
    console.log('ing3', ing3)
  }

  renderFormsSearchBars() {
      return (
        <View>
          <FormLabel containerStyle={styles.labelContainerStyle}>
            List Recipe Ingredients
          </FormLabel>
          <TagInputComponent
          />
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Recipe Description
          </FormLabel>
          <TextInput
            style={{ height: 40, marginLeft: 20 }}
            placeholder={this.state.ing1}
            onChangeText={ text => this.onInputChange(text, "ing1")}
            multiline = {true}
            numberOfLines = {4}
          />
          <Button
            onPress={() => this.handleSearchParams(this.state)}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SEARCH"
          />
        </View>
      )
  }
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.headingContainer}>
          <TouchableOpacity style={{ padding: 0, flexDirection: 'row', justifyContent: 'flex-end', margin: 20, marginTop: 25 }}>
            <Icon
              name="reorder"
              size={26}
              color="#fff"
              onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
              />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <Icon color="white" name="search" size={62} />
            <Text style={styles.heading}>Ask</Text>
          </View>
        </View>
        {this.renderFormsSearchBars()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: 5,
    backgroundColor: '#ff585b',
    height: 220,
  },
  heading: {
    color: 'white',
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});


export default AskScreen
