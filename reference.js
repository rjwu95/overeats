import React, { Component } from 'react';
import { Image, Button, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  BottomTabBar
} from 'react-navigation';

// class LogoTitle extends Component {
//   render() {
//     return (
//       <Image
//         source={require('./sample.png')}
//         style={{ width: 60, height: 60 }}
//       />
//     );
//   }
// }

const TabBarComponent = () => <Home />;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Homeaaaaaa'
    // headerTitle: <LogoTitle />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here'
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })
          }
        />
        <Button
          title="Go to Details... again"
          onPress={() => {
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            });
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#82DDCB'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const ExampleScreen = View;
const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000'
      }
    },
    navigationOptions: {
      tabBarLabel: 'Home!'
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
// export default createAppContainer(Tabs);
