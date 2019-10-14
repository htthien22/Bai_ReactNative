import React, { Component} from 'react';
import { View,Text,Image} from 'react-native';

export default class Ketqua extends Component{
    static navigationOptions = {
        tabBarLabel: 'Kết quả',
        tabBarIcon: ({tintColor}) => (
          <Image 
          source={require('../Images/kq.png')}
          style={{width:42,height:42}} />
        )
      }
    render(){
        return(
            <View>
                <Text style={{textAlign:'center'}}>Day la kq</Text>
            </View>
        );
    }
}