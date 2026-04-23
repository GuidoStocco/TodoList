import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTask } from './useTasks';
import {Task} from '@/services/taskService'
import {useState} from 'react'
// import { taskService } from '@/services/taskService';

const modalSchema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    decription: z.string().optional(),
    important: z.boolean().optional(),
    date: z.date()
})


export type ModalFormData = z.infer<typeof modalSchema>

const useModalForm = () => {
    // const [task, setTask] = useState<Task[]>([])

    // const {createTask, updateTask} = useTask();

    const {control, handleSubmit, reset, formState:{errors, isSubmitting}} 
    = useForm<ModalFormData>({resolver: zodResolver(modalSchema)});


    // const onSubmit = async(data: ModalFormData) => {
    //     try {
    //         await createTask
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }




    return{
        control,
        handleSubmit,
        // onSubmit,
        errors,
        isSubmitting
    }

};

export default useModalForm;