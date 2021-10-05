import React, { useEffect } from 'react';
import { View,SafeAreaView, Text } from 'react-native';
import Lottie from 'lottie-react-native'
import firebase from '../Firebase';
import MenuItem from '../components/Details/MenuItem';

export default function OrderCompleted({route}) {
    const {items,restaurantNAme,totalUSD}=route.params


    return (
        <View style={{
            flex:1,
            backgroundColor:"white",
            marginTop:40,
            marginLeft:15,
            marginRight:15,
            alignItems:"center",
            height:"100%"
            }}>
      
          <Lottie style={{height:100,alignSelf:"center", marginBottom:30}}
          speed={0.5}
          autoPlay={true}
          loop={false}
          source={require('../assets/animations/check-mark.json')}/>


        <Text style={{fontSize:20,fontWeight:"bold"}}> Your order Completed from {restaurantNAme} with total cost : {totalUSD}</Text>
        <MenuItem restaurantName={route.params.name}  hideCheckBox={true} foods={items}/>

        <Lottie style={{height:150,alignSelf:"center", marginBottom:30}}
          speed={0.5}
          autoPlay={true}
          loop={false}
          source={require('../assets/animations/cooking.json')}/>
      </View>
    
    );

}
