import React from 'react';
import { View, Text ,Image} from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuItem({foods,restaurantName,hideCheckBox}) {
    const x=useSelector(state=>state.cart.selectedItems.items);

      const dispatch=useDispatch();
      const selectItem=(i,checkboxValue)=>{
        dispatch({
          type:"ADD_TO_CART",
          payload:{
            ...i,
            restaurantName:restaurantName,
            checkboxValue:checkboxValue
          }
        });
      }

      const foodIsSelected=(food,items)=>{
        return Boolean(items.find(item=>item.title===food.title));
      }
    return (
        <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((i,index)=>{
            return(
                <View key={index}>
                <View  style={{flexDirection:"row",justifyContent:"space-between",margin:15}}>
                { (hideCheckBox) ? null:<BouncyCheckbox
                fillColor="green"
                onPress={(checkboxValue)=>selectItem(i,checkboxValue)}
                isChecked={foodIsSelected(i,x)}
                />
                  }
                 <FoodInfo title={i.title} description={i.description} price={i.price}/>
                  <FoodImage image={i.image}/>
                
                  </View>
                  <Divider width={0.5} style={{marginHorizontal:50}}/>
                  </View>
            )
        })}
        </ScrollView>
      
      </View>
    );

}

const FoodInfo=(props)=>{
    return(
        <View style={{width:200,justifyContent:"space-evenly"}}>
            <Text style={{fontWeight:"bold",fontSize:19}}>{props.title}</Text>
            <Text>{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
    )
}
const FoodImage=(props)=>{
    return(
     
            <Image
            source={{
                uri:props.image
            }}
            style={{
                borderRadius:7,
                width:100,
                height:100,
            }}
            />
      
    )
}