import { useAppFonts } from '@/hooks/useAppFonts';
import {Stack, Slot} from 'expo-router';

export default function RootLayout() {

   const fontsLoaded = useAppFonts();
  
    if(!fontsLoaded){
      return null;
    }

 return (
  <Stack>
      <Stack.Screen name="index" 
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name='(auth)'
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='(app)'
        options={{headerShown:false}}
      />
  </Stack>
  );
}