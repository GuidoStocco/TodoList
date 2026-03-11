import {useFonts} from 'expo-font';
import {Lora_700Bold, Lora_400Regular, Lora_500Medium} from '@expo-google-fonts/lora'




export function useAppFonts(){
    const [fontsLoaded] = useFonts({
        Lora_700Bold,
        Lora_400Regular,
        Lora_500Medium
    })

    return fontsLoaded;
}