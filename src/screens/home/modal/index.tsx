import {View, Text, TouchableOpacity, } from 'react-native'
import {COLORS} from '@/constants/colors'
import {styles} from '@/styles/modalStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateTaskData } from '@/services/taskService';

interface ModalScreenProps{
    setVisibleModal: (visible: boolean) => void;
    createTask: (data: CreateTaskData) => Promise<void>;
}


export default function ModalScreen({setVisibleModal}: ModalScreenProps) {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>OLA</Text>
                <TouchableOpacity onPress={() => setVisibleModal(false)}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}