import { View, Text } from 'react-native';
import {styles} from '@/styles/homeStyles';
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
 return (
   <View style={styles.containerHome}>
      <StatusBar style='dark'/>  
      <Text>Home</Text>
   </View>
  );
}