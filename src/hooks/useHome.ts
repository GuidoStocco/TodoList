import {useState, useMemo} from 'react';
import { useAuthContext } from './useAuthContext';
import { useTask} from './useTasks';
import { taskService, Task } from '@/services/taskService';


const messages = [
  "Vamos pra cima 🚀",
  "Foco no progresso 🔥",
  "Consistência é tudo 💪",
  "Um passo de cada vez "
];

export const randomMessages = messages[Math.floor(Math.random() * messages.length)];





export function useHome() {

  const {user} = useAuthContext();
  const [tasks, setTasks] = useState<Task[]>([])

  const [search, setSearch] = useState("");

  const [visibleModal, setVisibleModal] = useState(false);

  const [important, setImportant] = useState<boolean>(false);


  const isToday = (date: Date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
  };


  const isTomorrow = (date: Date) => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);

    return date.toDateString() === tomorrow.toDateString();
  };


  const filteredTasks = useMemo(() => {
        return tasks.filter((task) => 
          task.title.toLowerCase().includes(search.toLowerCase())
        );
  }, [tasks, search])


  const todayTask = useMemo(() => {
      return filteredTasks.filter((task) => 
        isToday(task.date)
      )
  }, [filteredTasks])



  const tomorrowTask = useMemo(() => {
    return filteredTasks.filter((task) => 
      isTomorrow(task.date)
    )
  }, [filteredTasks])



  return{
    todayTask,
    tomorrowTask,
    search,
    user,
    setSearch,
    randomMessages,
    visibleModal,
    setVisibleModal,
    important,
    setImportant
  }
}