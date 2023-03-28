import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Bolofuba(){
  return (
    <View style={style.container}>
      <Text style={style.titulo}>As melhores receitas de bolo</Text>
      <Image style= {style.img} source={require('../assets/boloFuba.jpg')}/>
      
    </View>
  );
}
const style = StyleSheet.create({
  img:{
    borderRadius: 10,
    width: 300,
    height: 300,
    marginTop: 15,
    marginBottom: 20
  },

  titulo:{
    fontSize: 25,
    color: '#CF2E2D',
    marginTop: 20,
    marginBottom: 10,
    textAlign:'center',
    fontWeight: 'bold'
    },

    container:{
    justifyContent: 'center',
    backgroundColor: '#D4D8DD',
    alignItems:'center'
  }
  });