import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTab from '../components/Home/HeaderTab';
import ResturantItem from '../components/Home/ResturantItem';
import SearchBar from '../components/Home/SearchBar';



export default function Home({navigation}) {
    
    const YELP_API_KEY =
    "raJvE5f0mtVl6qwba4U_lHusialrb3Wqcl1NUFuwS1VrUT6NsFNT4xTWuYHXXr4T5qigSB4zuQaQbxSQd-_FGXjgM7O32M_0b2ZMzqIOsjbgV-UMGYOO39qwbABXYXYx";
    const [restaurantData, setRestaurantData] = useState([]);
    const [activeTab, setActiveTab] = useState("Delivery");
    const [Search, setSearch] = useState("SanDiego");
    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${Search}`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
           json.businesses.filter(b=>b.transactions.includes(activeTab.toLowerCase()))
            )
          )
    };
  
    useEffect(() => {
      getRestaurantsFromYelp();
    }, [activeTab,Search]);
   
  
    return (
      <>
        <SafeAreaView style={{ marginTop: 30 ,flex:1}}>
            <View >
                <HeaderTab  activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setSearch={setSearch}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <ResturantItem data={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1}/>
           <BottomTabs/>
          </SafeAreaView>
          </>
    );

}

