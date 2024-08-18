import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './App/Screen/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Homenavigator from './App/Navigations/Homenavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Homenavigator/>
      </NavigationContainer>
      {/*    */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
    padding:20
   
  }
});
