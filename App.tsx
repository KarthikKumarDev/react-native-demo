import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InnerComponent from './src/components/InnerComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Look up App.tsx to start working on your app!</Text>
      <InnerComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  }
});
