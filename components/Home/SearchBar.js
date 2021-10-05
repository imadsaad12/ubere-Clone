import React, {  useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function SearchBar(props) {
    const [temp,setTemp]=useState("Hollywood");
    return (
         <View style={{ flexDirection: 'row' ,marginTop:7}}>
             <TextInput
             placeholder="search"
             onChangeText={(val)=>setTemp(val)}
             style={{
                 marginLeft:20,
                 backgroundColor:"#eee",
                 borderRadius:30,
                 width:"80%",
                 marginTop:10,
                 height:40,
                 textAlign:"center",
                 marginBottom:7
             }}
             />
             <TouchableOpacity onPress={()=>{props.setSearch(temp)}}>
                <MaterialCommunityIcons name="search-web" size={30} style={{marginTop:20}}/>
              </TouchableOpacity>

        </View>
    );

}

