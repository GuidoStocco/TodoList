import {View, Text, TouchableOpacity, TextInput } from 'react-native'
import {COLORS} from '@/constants/colors'
import {styles} from '@/styles/modalStyles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CreateTaskData } from '@/services/taskService';

interface ModalScreenProps{
    setVisibleModal: (visible: boolean) => void;
    createTask: (data: CreateTaskData) => Promise<void>;
}


export default function ModalScreen({setVisibleModal}: ModalScreenProps) {
    return(
        <SafeAreaView style={{flex:1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <Text style={styles.text}>Crie sua nova tarefa</Text>
                    <TouchableOpacity onPress={() => setVisibleModal(false)} style={styles.btnClose}>
                        <Ionicons name='close-circle-outline' color='red' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.containerInput}>
                        <Text style={styles.textTitle}>Titulo</Text>
                        <View style={styles.viewContainer}>
                            <TextInput
                                placeholder='O que precisa ser feito? ex: Estudar inglês'
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.containerInput}>
                        <Text style={styles.textTitle}>Descrição</Text>
                        <View style={styles.viewContainer}>
                            <TextInput
                                placeholder='Adicione algum contexto... ex: Estudar verb to be'
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={styles.priority}>  
                            <Ionicons name='alert-circle-outline' size={28} color={COLORS.primary}/>
                            <Text style={styles.textPriority}>Marque como prioridade, (opcional)</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}