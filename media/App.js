import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x /3;

  function res(){
    setTotal(Number(n1) + Number(n2) + Number(n3));
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} > Idades </Text>

      <TextInput style={styles.input} maxLength={3} keyboardType='decimal-pad' placeholder=' Idade 1'
      value={n1} onChangeText={(int) => setN1(int)} />
      <TextInput style={styles.input} maxLength={3} keyboardType='decimal-pad' placeholder=' Idade 2'
      value={n2} onChangeText={(int) => setN2(int)} />           
      <TextInput style={styles.input} maxLength={3} keyboardType='decimal-pad' placeholder=' Idade 3'
      value={n3} onChangeText={(int) => setN3(int)}/> 

      <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={res} >
        <Text  style={styles.btnText} >Calcular Média</Text>
      </TouchableOpacity>

      <View style={styles.cardRe} >
      <Text style={styles.resul} >Total: {total.toFixed(1)}</Text>
      <Text style={styles.resul} >Média: {por.toFixed(1)}</Text>     
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'#3498DB',
    fontSize:45,
    padding:10,
    fontWeight:'bold'
  },
  input:{
    borderBottomWidth:2,
    textAlign:'center',
    marginTop:10,
    width:250,    
  },
  
  btn:{
    borderRadius:5,
    backgroundColor:'#3498DB',
    width:244,
    height:40,
    marginTop:10,
    justifyContent:'center'
  },
  btnText:{
    color:'​#FFFFFF',
    textAlign:'center',    
  },
  resul:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:10,
    marginStart:10,
    color:'#FFFFFF'
  },
  cardRe:{
    marginTop:10,
    width:250,
    height:80,
    backgroundColor:'#3498DB',
    borderRadius:5,
  }

});