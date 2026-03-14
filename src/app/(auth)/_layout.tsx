import {Stack} from 'expo-router';



export default function StackAuth(){
    return(
        <Stack>
            <Stack.Screen name='signin/index' options={{headerShown: false}}/>
            <Stack.Screen name='signup/index' options={{headerShown: false}}/>
        </Stack>
    )
}