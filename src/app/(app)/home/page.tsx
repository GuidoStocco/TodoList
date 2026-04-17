import HomeScreen from '@/screens/home/index'
import { useTask } from '@/hooks/useTasks';
import { useHome } from '@/hooks/useHome';


export default function Home() {

  const {tasks, toggleTask, deleteTask} = useTask()
  const {todayTask, tomorrowTask, search, user, setSearch, visibleModal, setVisibleModal} = useHome();

 return (
   <HomeScreen deleteTask={deleteTask} 
        tasks={tasks} toggleTask={toggleTask} 
        todayTask={todayTask} tomorrowTask={tomorrowTask} search={search} user={user} setSearch={setSearch}
        visibleModal={visibleModal} setVisibleModal={setVisibleModal}
   />
  );
}