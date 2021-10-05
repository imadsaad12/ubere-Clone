import React from 'react';
import { View, Text ,Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


 
export default function ResturantItem ({navigation,...props}) {
    return (
      <>
      {
        props.data.map((i,index)=>{
          return(
              <TouchableOpacity
              key={index}
              activeOpacity={1}
               style={{marginBottom:30}}
               onPress={()=>{navigation.navigate("RestaurantDetails",{
                 name:i.name,
                 image:i.image_url,
                 price:i.price,
                 reviews:i.review_count,
                 rating:i.rating,
                 categories:i.categories
               })}}
               >
              <View >
              <ResturantImage  image={i.image_url}/>
              <ResturantInfo name={i.name} rating={i.rating}/>
              </View>
              </TouchableOpacity>
            )
           
          })
        }
        </>
     
    );

}
const ResturantImage=(props)=>{
        return(
        <>
          <Image source={{uri:props.image}}
          style={{width:"100%",height:180}}
          />
          <TouchableOpacity style={{position:"absolute" ,right:20,top:5}}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
          </TouchableOpacity>
          </>
        )
        
      }

      const ResturantInfo=(props)=>{
        return(
       
          <View style={{flexDirection:"row",justifyContent:"space-between",padding:7,backgroundColor:"#eee"}}>
            <View>
            <Text style={{fontWeight:"bold",fontSize:15}}>{props.name}</Text>
            <Text style={{color:"gray",fontSize:13}}>30-40 min</Text>
            </View>
            <Text style={{backgroundColor:"white",height:30,width:40,textAlign:"center",borderRadius:15}}>{props.rating}</Text>
          </View>
          
        )
      }
