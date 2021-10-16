import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import QRCode from "react-qr-code";

export default function App() {
  const [code, onInputChange] = useState('');
  return (
    <View style={styles.container}>
      <QRCode 
        value={code || 'www.exmaple.com'} 
      />
      <TextInput
        style={styles.input}
        onChangeText={onInputChange}
        placeholder="www.exmaple.com"
        value={code}
      />
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
