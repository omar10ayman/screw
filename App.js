import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddPlayers from './Componemts/AddPlayers';
import MyStack from './Stack';

export default function App() {
  return (
   <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
