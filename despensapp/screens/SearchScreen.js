import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements'

class SearchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ing1: 'Enter an ingredient...',
      ing2: 'Enter an ingredient...',
      ing3: 'Enter an ingredient...',
    };
  }

  onInputChange(term) {
    this.setState({"ing1": term});
    console.log(`term is ${term}`)
  }

  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Search',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="search"
        size={24}
        style={{ color: tintColor }} />
    )
  })

  renderFormsSearchBars() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Ingredient 1
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder={this.state.ing1}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Ingredient 2
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder="Enter an ingredient..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Ingredient 3
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder="Enter an ingredient..."
          />
          <Button
            onPress={() => console.log('form was submitted!')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SEARCH"
          />
        </View>
      );
    }
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
            <Text style={styles.heading}>Search</Text>
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

export default SearchScreen
