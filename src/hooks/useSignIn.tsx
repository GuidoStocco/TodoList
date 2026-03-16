import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import { authService } from "@/services/auth-services";
import { useRouter } from "expo-router";



const SignInSchema = z.object({
    email: z.string().min(1, "Email tem que ser válido"),
    password: z.string().min(6, "A senha é obrigatória")
})

export type SignInFormData = z.infer<typeof SignInSchema>;



const useSignIn = () => {

    const router = useRouter();


    const {
        control,
        handleSubmit,
        formState:{errors, isSubmitting}
    } = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema)
    })

    const onSubmit = async(data: SignInFormData) => {
        try {
            
            await authService.SignIn(data.email, data.password)    
            router.replace("/(app)/home/page")

        } catch (error) {
            console.log(error)
        }
    }

    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }

}

export default useSignIn;