import { useAppFonts } from '@/hooks/useAppFonts';
import {Stack, Slot} from 'expo-router';
import { AuthProvider } from '@/context/authProvider';

export default function RootLayout() {

   const fontsLoaded = useAppFonts();
  
    if(!fontsLoaded){
      return null;
    }

 return (
  <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}/>
  </AuthProvider>
  );
}