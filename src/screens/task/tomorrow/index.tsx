import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '@/styles/taskTomorrowStyles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';


interface TaskProps {
    tarefasTomorrow: string
}


export default function TaskScreenTomorrow({tarefasTomorrow}: TaskProps) {
 return (
    <ScrollView>
   <View style={{flex:1, flexDirection: 'row', marginBottom: 15}}>
       <View style={styles.containerTask}>
            <TouchableOpacity style={styles.btnTask}>
                <Ionicons name='ellipse-outline' size={30} color={COLORS.primary} style={styles.icon}/>
            </TouchableOpacity>

            <View style={styles.containerText}>
                <Text style={styles.textDescription}>Terminar o projeto to do list</Text>
                <View style={{flexDirection: 'row', marginTop: 7}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                        <Ionicons name='time-outline' size={18} color={COLORS.subTitle}/>
                        <Text style={styles.textDate}>14:30 PM</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
                        <Ionicons name='document-text-outline' size={18} color={COLORS.subTitle}/>
                        <Text style={styles.textDate}>Projeto To Do List</Text>
                    </View> 
                </View>
            </View>
       </View>
   
   </View>
   </ScrollView>
  );
}