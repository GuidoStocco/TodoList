import { useAppFonts } from '@/hooks/useAppFonts';
import {Stack} from 'expo-router';

export default function RootLayout() {

   const fontsLoaded = useAppFonts();
  
    if(!fontsLoaded){
      return null;
    }

 return (
  <Stack screenOptions={{headerShown: false}}/>
  );
}