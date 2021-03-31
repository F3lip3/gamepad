import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GamePad from './src/components/GamePad';

export default function App() {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <GamePad />
        <StatusBar hidden />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6280af',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
