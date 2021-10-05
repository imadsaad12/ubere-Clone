import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../Firebase';

export default function ViewCart({navigation}) {
  const { items, restaurantName } = useSelector(state => state.cart.selectedItems);
  const [modalVisible, setModalVisible] = useState(false);


  const total = items
    .map(i => Number(i.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = "$ " + total.toString()
  console.log(totalUSD);


  const addOrder=()=>{
    const db=firebase.firestore();
    db.collection("orders").add({
      items:items,
      restaurantName:restaurantName,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setModalVisible(false);
    navigation.navigate("OrderCompleted",{
      items:items,
      restaurantName:restaurantName,
      totalUSD:totalUSD
    });
  }

  const styles = StyleSheet.create({
    modalcontainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalcheckoutcontainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderRadius: 1
    },
    modalcheckoutbutton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10
    },
    subtotalcontainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
      marginLeft: 20,
      marginRight: 20
    },
    subTotalText: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 15,
      marginBottom: 10,
    }
  })

  const checkOutModalContext = () => {
    return (
      <>
        <View style={styles.modalcontainer}>
          <View style={styles.modalcheckoutcontainer}>
            <Text style={styles.modalcheckoutbutton}>{restaurantName}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((i, index) => {
              return (
                <OrderItem key={index} item={i} />
              )
            })}
            </ScrollView >
            <View style={styles.subtotalcontainer}>
              <Text style={styles.subTotalText}>SubTotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <TouchableOpacity style={{ alignItems: "center", marginTop: 20 }}
            onPress={()=>{addOrder()}}
            >
              <Text style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white", 
                fontSize: 15,
                borderRadius: 30,
                 width: 200,
                 padding:10
              }}>Checkout</Text>
            </TouchableOpacity>

          </View>
        </View>
      </>
    )
  }

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        {checkOutModalContext()}
      </Modal>
      { total ?
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            zIndex: 999,
            bottom: 30
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 30,
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                padding: 15,
                width: 300,
                justifyContent: "flex-end",

              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                marginRight: 30
              }}> View Cart </Text>
              <Text style={{ color: "white", fontSize: 20, marginRight: 0 }}> {totalUSD} </Text>
            </TouchableOpacity>

          </View>
        </View>
        : null}
    </>
  );

}
