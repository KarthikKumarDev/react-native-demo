import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InnerComponent() {
  return (
      <Text style={styles.innerText}>This is from a child component!</Text>
  );
}

const styles = StyleSheet.create({
  innerText:{
    color: '#f00',
  }
});
