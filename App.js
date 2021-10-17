import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Share } from 'react-native';
import { NativeBaseProvider, Center, Box, Heading, VStack, Input } from 'native-base';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  let svgRef;
  const [code, onInputChange] = useState('');

  const onPress = () => {
    svgRef.toDataURL((dataURL) => {
      Share.share({
        message: `${code}`,
        url: `data:image/png;base64,${dataURL}`,
      });
    });
  };
  
  return (
    <NativeBaseProvider>
      <Center mt="20%">
        <Box>
          <Heading mb="3">QR Code Generator</Heading>
          <VStack space={2} mb="3">
            <Input 
              variant="underlined"
              type="text"
              onChangeText={onInputChange}
              placeholder="www.exmaple.com"
              value={code}
            />
          </VStack>
          <VStack space={2}>
            <TouchableOpacity
              onPress={() => onPress()}
            >
              <QRCode 
                value={code || 'www.exmaple.com'}
                getRef={(r) => (svgRef = r)}
                size={250}
              />
            </TouchableOpacity>
          </VStack>
        </Box>
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
