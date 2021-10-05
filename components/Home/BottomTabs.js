import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function BottomTabs() {

    return (
        <View style={{
            flexDirection: "row",
            justifyContent:"space-between",
            marginHorizontal:30,
        }}>
            <Icons name="home" text="home"/>
            <Icons name="search-web" text="search"/>
            <Icons name="shopping" text="shopping"/>
            <Icons name="order-alphabetical-ascending" text="orders"/>
            <Icons name="account" text="user"/>

        </View>
    );

}
const Icons=(props)=>{
    return(
        <TouchableOpacity>
        <View style={{alignItems:"center"}}>
        <MaterialCommunityIcons name={props.name} size={24} />
        <Text>{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}
