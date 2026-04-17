import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTask } from './useTasks';


const modalSchema = z.object({
    title: z.string().min(1, 'Título é obrigatório'),
    decription: z.string().optional(),
    important: z.boolean().optional,
    date: z.date()
})


export type ModalFormData = z.infer<typeof modalSchema>

const useModalForm = (task?: any) => {

    const {createTask, updateTask} = useTask();

    const {control, handleSubmit, reset, formState:{errors, isSubmitting}} = useForm<ModalFormData>({resolver: zodResolver(modalSchema),
        defaultValues: {
            title: task?.title || "",
            description: task?.description || "",
            date: task?.date ? task.date.toDate() : new Date(),
            completed: task?.completed || false
        }
    });


    const onSubmit = () => {
        
    }




    return{
        control,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting
    }

};

export default useModalForm;