import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Category from './Category';
import Address from './Address';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <View style={{ marginTop: 40 }}>
          <Text>Home</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: 40 }}>
            <Address />
          </View>
          <View style={{ marginTop: 40 }}>
            <Category />
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
