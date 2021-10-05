import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/Home'
import RestaurantDetails from '../screens/RestaurantDetails'
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from '../redux/store';
import OrderCompleted from '../screens/OrderCompleted';

const store=configureStore();

export default function Navigation (){
    const Stack=createStackNavigator();
    const screenoption={
        headerShown:false
    }
    return(
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenoption}  >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name= "RestaurantDetails" component={RestaurantDetails}/>
                <Stack.Screen name= "OrderCompleted" component={OrderCompleted}/>
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
} 