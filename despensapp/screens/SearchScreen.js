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
  Text,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TagInputComponent from '../components/TagInput'


class SearchScreen extends Component {

  constructor(props) {
    super(props);
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

  render() {
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
          style={{ margin: 10}}
        />
        <Button
          buttonStyle={{ marginTop: 15, borderRadius: 20, backgroundColor:'#ff585b'}}
          title="SEARCH"
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
