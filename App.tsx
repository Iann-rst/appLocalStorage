import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Toast from 'react-native-toast-message';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <Toast />
    </>
  )
}
