import { View, Text, TextInput, ScrollView, Keyboard, TouchableNativeFeedback, TouchableOpacity, FlatList } from 'react-native';
import {styles} from '@/styles/homeStyles';
import { Ionicons } from '@expo/vector-icons';
import { randomMessages } from '@/hooks/useHome';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useState, useMemo } from 'react';
import TaskScreen from '../task';
import TaskScreenTomorrow from '../task/tomorrow';
import { Task } from '@/services/taskService';

interface HomeScreenProps{
    tasks: Task[];
    deleteTask: () => Promise<void>;
    toggleTask: () => Promise<void>;
    loading: boolean;
}


export default function HomeScreen({tasks, deleteTask, toggleTask, loading}: HomeScreenProps) {

  const {user} = useAuthContext()

  const [tarefas, setTarefas] = useState(['task', 'ug'])
  const [tomorrow, setTomorrow] = useState(['task'])

 return (
  <TouchableNativeFeedback onPress={Keyboard.dismiss} accessible={false}>
   <View style={styles.containerHome}>

      <View style={styles.box1}>
        <Text style={styles.textBox1}>Bem-vindo {user?.displayName?.toUpperCase()}, {randomMessages}</Text>
        <View style={styles.containerInput}>
          <Ionicons name='search-outline' style={styles.iconInput} size={18}/>
          <TextInput
          onSubmitEditing={Keyboard.dismiss}
          style={styles.input}
          placeholder='O que você procura'
          placeholderTextColor="#888"
        />
        </View>
      </View>

      <View style={styles.box2}>
          <View style={styles.containerBox2}>
              <Text style={styles.textBox2}>HOJE</Text>
              <View style={styles.containerText}>
                  <Text style={styles.textContainer}>{tarefas.length} {tarefas.length === 1 ? 'Task' : 'Tasks'}</Text>
              </View>
          </View>

          <View>
              <FlatList
                  data={tarefas}
                  keyExtractor={(item) => item.toString() }
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                        <TaskScreen tarefas={item}/>
                  )}
              />
          </View>
      </View>

      <View style={styles.box3}>
            <View style={styles.containerBox3}>
                <Text style={styles.textBox3}>AMANHÃ</Text>
            </View>
            <FlatList
                data={tomorrow}
                keyExtractor={(item) => item.toString() }
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <TaskScreenTomorrow tarefasTomorrow={item}/>
                )}
            />    
      </View>
  
   </View>
  </TouchableNativeFeedback>
  );
}