import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props){
  return (
    <View style={style.container}>
      <Text style={style.titulo}>As melhores receitas de bolo</Text>
      <Image style= {style.img} source={require('../assets/homeBolo.jpg')}/>
      
      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('BoloChoco')}}>
        <Text style={style.palavras}>1. Bolo de chocolate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('BoloFuba')}}>
        <Text style={style.palavras}>2. Bolo de fubá</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={()=>{props.navigation.navigate('BoloMilho')}}>
        <Text style={style.palavras}>3. Bolo de milho</Text>
      </TouchableOpacity>
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
  },

  button:{
    textAlign:'left',
    alignSelf: 'flex-start'
  },

  palavras:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#6D1916'
  }
});