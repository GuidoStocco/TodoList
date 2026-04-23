import HomeScreen from '@/screens/home/index'
import { useTask } from '@/hooks/useTasks';
import { useHome } from '@/hooks/useHome';


export default function Home() {

  const {tasks, toggleTask, deleteTask, createTask} = useTask()
  const {todayTask, tomorrowTask, search, user, setSearch, visibleModal, setVisibleModal} = useHome();

 return (
   <HomeScreen deleteTask={deleteTask} createTask={createTask}
        tasks={tasks} toggleTask={toggleTask} 
        todayTask={todayTask} tomorrowTask={tomorrowTask} search={search} user={user} setSearch={setSearch}
        visibleModal={visibleModal} setVisibleModal={setVisibleModal}
   />
  );
}