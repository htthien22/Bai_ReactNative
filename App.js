import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Lichthidau from './Screens/Lichthidau'
import Canhan from './Screens/canhan';
import ketqua from './Screens/ketqua';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const TabNavigator = createBottomTabNavigator(
  {
    Lichthidau: Lichthidau,
    Tintuc: ketqua,
    canhan: Canhan,

  },
  {
    swipEnable: true,
    tabBarOptions: {
      
      activeTintColor: 'green',
      activeBackgroundColor: 'green',
      

      labelStyle: {
        color: 'black',
        
        fontSize: 16,
        fontWeight: '400',
        padding: 0,
      }
    }



  }
);

export default createAppContainer(TabNavigator);