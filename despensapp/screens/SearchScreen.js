import React, { Component } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'

import {
  Button,
  ButtonGroup,
  Text,
  FormLabel,
  CheckBox,
  SearchBar,
  Slider,
} from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialIcons'
import TagInputComponent from '../components/TagInput'


class SearchScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
      value: 0,
    }

    this.updateIndex = this.updateIndex.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Search',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="search"
        size={24}
        style={{ color: tintColor }} />
    ),
    headerTitle: <Text style={{ fontSize: 20 }}>Search for Recipes</Text>,
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

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Easy', 'Everything']
    const { selectedIndex } = this.state

    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
      <View style={styles.container}>
        <Image source={require("../assets/img/search.jpg")} resizeMode="stretch" style={styles.hero}>
          <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>
            Find Your Dish
          </Text>
          <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>
            Search by Ingredients
          </Text>
        </Image>
      </View>
        <TagInputComponent
          style={{ margin: 10 }}
          inputProps={{ placeholder: 'Add Ingredients', autoFocus: false }}
        />
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', margin: 10}}>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
            minimumValue={0}
            maximumValue={120} />
          <Text>Cooking Time: {Math.floor(this.state.value)} minutes</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <ButtonGroup
            textStyle={{ fontSize: 13 }}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
          />
        </View>
        <Button
          buttonStyle={{ marginTop: 15, borderRadius: 20, backgroundColor:'#ff585b'}}
          title="Find Recipe"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
  },
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
  hero: {
    width:800,
    height:260,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default SearchScreen
