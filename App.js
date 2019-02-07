import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Address from './Address';
import RestaurantLists from './RestaurantLists';

class OrderListsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>OrderLists!</Text>
      </View>
    );
  }
}

class MyPageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyPage!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  홈: HomeScreen,
  주문내역: OrderListsScreen,
  my배민: MyPageScreen
});

export default createAppContainer(TabNavigator);
