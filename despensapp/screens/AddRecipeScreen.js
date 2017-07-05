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


class AddRecipeScreen extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Add Recipe',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="add"
        size={24}
        style={{ color: tintColor }} />
    ),
    headerTitle: <Text style={{ fontSize: 20 }}>Add A Recipe</Text>,
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
        <Image source={require("../assets/img/addRecipe.jpg")} resizeMode="stretch" style={styles.hero}>
          <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>
            Upload a Recipe
          </Text>
          <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>
            Spread the love
          </Text>
        </Image>
      </View>
        <TagInputComponent
          style={{ margin: 10}}
          inputProps={{ placeholder: 'Specify required ingredients', autoFocus: false }}
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>
          Recipe Title
        </FormLabel>
        <TextInput
          style={{ height: 40, marginLeft: 20 }}
          placeholder={"Title for your dish"}
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>
          Recipe Description
        </FormLabel>
        <TextInput
          style={{ height: 40, marginLeft: 20 }}
          placeholder={"Describe the Recipe"}
          multiline = {true}
          numberOfLines = {4}
        />
        <Button
          buttonStyle={{ marginTop: 15, borderRadius: 20, backgroundColor:'#ff585b'}}
          title="Add Recipe"
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

export default AddRecipeScreen
