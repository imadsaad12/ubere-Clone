import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function HeaderTab(props) {
  
  return (
    <View style={{ flexDirection: 'row', justifyContent: "center" }}>
      <HeaderButton active={props.activeTab} setActive={props.setActiveTab} text="Delivery" bgcolor="black" color="white" />
      <HeaderButton active={props.activeTab} setActive={props.setActiveTab}  text="Pickup" bgcolor="white" color="black"/>
    </View>
  );

}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={{
      paddingHorizontal: 16,
      paddingVertical: 5,
      backgroundColor: props.active=== props.text ?"black":"white",
      borderRadius: 30
    }}
    onPress={()=>{props.setActive(props.text)}}
    >
      <Text style={{ color:  props.active=== props.text ?"white":"black", fontWeight: "bold", fontSize:15}}>{props.text}</Text>
    </TouchableOpacity>
  );
}
