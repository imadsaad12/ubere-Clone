import React, { useState,useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation/Navigation';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

export default function App() {

 
  return (
    <View style={{flex:1}}>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Navigation/>
    </View>
  );
}
