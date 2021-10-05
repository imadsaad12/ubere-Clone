import React from 'react';
import { View, Text, Image } from 'react-native';

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View >
      <RestaurantImage image={image}/>
      <RestaurantTitle text={name}/>
      <RestaurantDescription description={description}/>
     
    </View>
  );

}
const RestaurantImage = (props) => {
  return (
    <Image source={{ uri: props.image }}
      style={{
        width: "100%",
        height: 180,

      }}
    />
  )
}
const RestaurantTitle=(props)=>{
  return(
    <Text style={{
      fontSize:20,
      fontWeight:"bold",
      marginTop:5,
      marginHorizontal:10,
    }}>{props.text}</Text>
  )
}
const RestaurantDescription=(props)=>{
  return(
    <Text style={{
      marginTop:10,
    marginHorizontal:15,
    fontWeight:"400",
    fontSize:15.5
    }}>{props.description}</Text>
  )
}
