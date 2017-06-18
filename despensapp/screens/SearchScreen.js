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

class SearchScreen extends Component {

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
          <TextInput
            style={{ height: 40, marginLeft: 20 }}
            placeholder={this.state.ing1}
            onChangeText={ text => this.onInputChange(text, "ing1")}
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Ingredient 2
          </FormLabel>
          <TextInput
            style={{ height: 40, marginLeft: 20 }}
            placeholder={this.state.ing2}
            onChangeText={ text => this.onInputChange(text, "ing2")}
          />
          <FormLabel
            containerStyle={styles.labelContainerStyle}
          >
            Ingredient 3
          </FormLabel>
          <TextInput
            style={{ height: 40, marginLeft: 20 }}
            placeholder={this.state.ing3}
            onChangeText={ text => this.onInputChange(text, "ing3")}
          />
          <Button
            onPress={() => this.handleSearchParams(this.state)}
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
