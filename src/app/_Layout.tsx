import { useAppFonts } from '@/hooks/useAppFonts';
import {Stack, Slot} from 'expo-router';
import { AuthProvider } from '@/context/authProvider';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {

   const fontsLoaded = useAppFonts();
  
    if(!fontsLoaded){
      return null;
    }

 return (
  <SafeAreaProvider>
    <AuthProvider>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style='dark'/>  
        <Stack screenOptions={{ headerShown: false }}/>
      </SafeAreaView>
    </AuthProvider>
  </SafeAreaProvider>
  );
}