import {useState, useEffect} from 'react';
import { useAuthContext } from './useAuthContext'; 
import { taskService, Task, CreateTaskData} from '@/services/taskService';


export function useTask(){
    
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true)

    const {user} = useAuthContext()

    useEffect(() => {

        if(!user?.uid) return

        const unsubscribe =  taskService.subscribeTask(user.uid, (data) => {
            setTasks(data);
            setLoading(false);
        })

        return () => unsubscribe()

    },[user?.uid]);


    const createTask = async(data: CreateTaskData) => {
        if(!user?.uid) return

        await taskService.createTask(user.uid, data)
    };


    const toggleTask = async(taskId: string, completed:boolean,) => {
        if(!user?.uid) return

        await taskService.toggleTask(user.uid, completed, taskId)
    };


    const updateTask = async(taskId: string, data:Partial<{title:string, important: boolean, description: string, date: Date}>) => {
        if(!user?.uid) return

        await taskService.updateTask(user.uid, taskId, data)
    };


    const deleteTask = async(taskId: string) => {
        if(!user?.uid) return

        await taskService.deleteTask(user.uid, taskId)
    }



    return{
        tasks,
        loading,
        createTask,
        toggleTask,
        updateTask,
        deleteTask
    }
}