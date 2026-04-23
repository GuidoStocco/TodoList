import { View, Text, TextInput, ScrollView, Keyboard, TouchableNativeFeedback, TouchableOpacity, FlatList, Modal } from 'react-native';
import {styles} from '@/styles/homeStyles';
import { Ionicons, Foundation, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { randomMessages } from '@/hooks/useHome';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useState, useMemo } from 'react';
import TaskScreen from '../task';
import TaskScreenTomorrow from '../task/tomorrow';
import { CreateTaskData, Task } from '@/services/taskService';
import { COLORS } from '@/constants/colors';
import ModalScreen from './modal';


interface HomeScreenProps{
    user: any;
    tasks: any;
    createTask: (data: CreateTaskData) => Promise<void>;
    deleteTask: (taskId: string) => Promise<void>;
    toggleTask: (taskId: string, completed: boolean) => Promise<void>;
    todayTask: Task[];
    tomorrowTask: Task[];
    search: string;
    setSearch: (search: string) => void;
    visibleModal: boolean;
    setVisibleModal: (visibleModal:boolean) => void;
}


export default function HomeScreen({createTask, tasks, deleteTask, toggleTask, todayTask, tomorrowTask, search, setSearch, user, visibleModal, setVisibleModal}: HomeScreenProps) {

    
  
 return (
  <TouchableNativeFeedback onPress={Keyboard.dismiss} accessible={false}>
   <View style={styles.containerHome}>

      <View style={styles.box1}>
        <Text style={styles.textBox1}>Bem-vindo {user?.displayName?.toUpperCase()}, {randomMessages}</Text>
        <View style={styles.containerInput}>
          <Ionicons name='search-outline' style={styles.iconInput} size={18}/>
          <TextInput
            value={search}
            onChangeText={setSearch}
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
                  <Text style={styles.textContainer}>{todayTask.length} {todayTask.length === 1 ? 'Task' : 'Tasks'}</Text>
              </View>
          </View>

          {tasks ? (
            <View>
                <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <TaskScreen task={item} onToggle={toggleTask} onDelete={deleteTask}/>
                    )}
                />
            </View>
          ) : 
          (
              <Text>Não tem nenhuma task hoje!</Text>         
          )}
      </View>

      <View style={styles.box3}>
            <View style={styles.containerBox3}>
                <Text style={styles.textBox3}>AMANHÃ</Text>
            </View>
            <FlatList
                data={tomorrowTask}
                keyExtractor={(item) => item.id.toString() }
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <></>
                )}
            />    
      </View>

      {/* MODAL */}
      <TouchableOpacity style={styles.modalBtn} onPress={() => setVisibleModal(true)}>
        <View style={styles.viewModal}>
            <MaterialCommunityIcons name='text-box-edit-outline' color={COLORS.white} size={35}/>
        </View>
      </TouchableOpacity>

      <Modal visible={visibleModal} animationType='slide'>
            <ModalScreen setVisibleModal={setVisibleModal} createTask={createTask}/>
      </Modal>
  
   </View>
  </TouchableNativeFeedback>
  );
}