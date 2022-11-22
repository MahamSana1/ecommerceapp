import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomApiHook from './CustomApiHook';
import Home from './home';
import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function Bookmark(navigation) {
  
    return (
         <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
          
          <Text style={{color:'black', fontSize:30}}> There is no Bookmark icon </Text>
        </View>
   
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });