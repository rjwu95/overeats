import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import RestaurantLists from './RestaurantLists';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Address from './Address';

let fakeData = [
  '한식',
  '중국집',
  '치킨',
  '피자',
  '분식',
  '족발',
  '찜.탕',
  '도시락',
  '패스트푸드'
];

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <TouchableOpacity onPress={() => navigation.navigate('Address')}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>아차산로 68</Text>
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {fakeData.map(el => (
          <View style={{ width: 100, height: 100, margin: 10 }} key={el}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('RestaurantLists')}
            >
              <Image
                style={{ width: '50%', height: '50%' }}
                source={require('./SAMPLE.png')}
              />
              <Text style={{ fontSize: 18 }}>{el}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

export default createStackNavigator({
  HomeScreen,
  Address,
  RestaurantLists
});
