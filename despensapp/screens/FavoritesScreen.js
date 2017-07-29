import React, { Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Container from '../components/common/Container'
import CustomText from '../components/common/Text'
import ThumbSingleItem from '../components/common/SingleItem'
import ThumbMultipleItems from '../components/common/MultipleItems'
import items from '../data/saved'

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Inbox',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="mail"
        size={24}
        style={{ color: tintColor }} />
    )
  })

  constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(items)
        }
    }

    render() {
          return (
              <Container>
                  <ListView
                      style={ styles.holder }
                      renderHeader={() => <Text style={ styles.screenTitle } type='h1'>Favorites</Text>}
                      enableEmptySections={ true }
                      dataSource={ this.state.dataSource }
                      renderRow={ this.renderRow }
                      removeClippedSubviews={false}
                  />
              </Container>
          )
      }

      renderRow = (rowData) => {
          if(rowData.thumbs.length >= 3) {
              let thumbs = rowData.thumbs
              let formatData = {
                  name: rowData.name,
                  bigImageUri: thumbs[0]['uri'],
                  smallTopImageUri: thumbs[1]['uri'],
                  smallBottomImageUri: thumbs[2]['uri'],
                  description: rowData.description
              }
              return <ThumbMultipleItems data={formatData} />
          } else {
              let thumb = rowData.thumbs[0]
              let formatData = {
                  name: rowData.name,
                  description: rowData.description,
                  thumb: thumb.uri,
                  ratio: thumb.ratio
              }
              return (
                  <ThumbSingleItem data={formatData} />
              )
          }
        }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontWeight: '700',
        paddingTop: 50,
        paddingBottom: 30,
        fontSize: 35,
    },
    holder: {
        paddingHorizontal: 25,
        flex: 1
    }
})

export default FavoritesScreen
