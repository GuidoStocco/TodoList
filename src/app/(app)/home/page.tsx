import HomeScreen from '@/screens/home/index'
import { useTask } from '@/hooks/useTasks';


export default function Home() {

  const {createTask, deleteTask, loading, tasks, toggleTask, updateTask} = useTask();

 return (
   <HomeScreen deleteTask={deleteTask} loading={loading} 
        tasks={tasks} toggleTask={toggleTask} 
   />
  );
}