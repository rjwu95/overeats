import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import RestaurantLists from './RestaurantLists';

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

const Category = () => (
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
          onPress={() => console.log('new try')}
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

export default Category;
