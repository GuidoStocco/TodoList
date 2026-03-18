import { useAppFonts } from '@/hooks/useAppFonts';
import {Stack, Slot} from 'expo-router';
import { AuthProvider } from '@/context/authProvider';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {

   const fontsLoaded = useAppFonts();
  
    if(!fontsLoaded){
      return null;
    }

 return (
  <SafeAreaProvider>
    <AuthProvider>
      <SafeAreaView style={{flex:1}}>
        <Stack screenOptions={{ headerShown: false }}/>
      </SafeAreaView>
    </AuthProvider>
  </SafeAreaProvider>
  );
}