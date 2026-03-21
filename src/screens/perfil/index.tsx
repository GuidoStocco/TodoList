import {View, Text, Pressable} from 'react-native';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useContext } from 'react';

export default function ProfileScreen() {

    const {signOut} = useAuthContext()

    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>PERFIL</Text>
            <Pressable onPress={signOut} style={{backgroundColor: 'red', width: '50%', height: 40}}>
                <Text>SAIR</Text>
            </Pressable>
        </View>
    );
}