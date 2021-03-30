import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GamePad from './src/components/GamePad';

export default function App() {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text>TESTE</Text>
        <GamePad />
        <StatusBar hidden />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
