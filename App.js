import React, { useState, useEffect } from 'react';

import { Alert, View, StyleSheet, Text, Linking, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [cellNumber, setCellNumber] = useState('');

  const [whatsAppMessage, setWhatsAppMessage] = useState();

  const sendMsg = () => {
  
    if (cellNumber.length != 8) {
      Alert.alert('Please Enter Correct WhatsApp Number');
      return;
    }
    // Here we are using 91 which is India Country Code.
    // You can change country code.
    let URL = 'whatsapp://send?text=' +  whatsAppMessage + '&phone=506' + cellNumber;

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };
  
  return (

    <View style={styleSheet.MainContainer}>

        <Text style={styleSheet.text1}>Send WhatsApp Message from React Native App</Text>

        <TextInput
          value={whatsAppMessage}
          onChangeText={
            (whatsAppMessage) => setWhatsAppMessage(whatsAppMessage)
          }
          placeholder={'Ingresa tu pedido'}
          style={styleSheet.textInputStyle}
        />

        <TextInput
          value={cellNumber}
          onChangeText={
            (cellNumber) => setCellNumber(cellNumber)
          }
          placeholder={'Digita tu número de Celular'}
          keyboardType="numeric"
          style={styleSheet.textInputStyle}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styleSheet.button}
          onPress={sendMsg}>
          <Text style={styleSheet.buttonText}> Realizar Pedido </Text>
        </TouchableOpacity>
      
    </View>

  );
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10
  },

  text1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textInputStyle: {
    height: 42,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20
  },

  button: {
    justifyContent: 'center',
    marginTop: 18,
    padding: 12,
    backgroundColor: '#00B8D4',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
 
});