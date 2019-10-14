import React, { Component} from 'react';
import { View,Text,Image } from 'react-native';

export default class Canhan extends Component{
    static navigationOptions = {
        tabBarLabel: 'Cá Nhân',
        tabBarIcon: ({tintColor}) => (
          <Image 
          source={require('../Images/canhan.png')}
          style={{width:22,height:22}} />
        )
      }
    render(){
        return(
            <View>
                <Text style={{textAlign:'center'}}>Day la canhan</Text>
            </View>
        );
    }
}
