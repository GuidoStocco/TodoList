import {View, Text, TouchableOpacity, } from 'react-native'
import {COLORS} from '@/constants/colors'
import {styles} from '@/styles/modalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ModalScreen() {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>OLA</Text>
            </View>
        </SafeAreaView>
    )
}