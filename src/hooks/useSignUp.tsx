import { authService } from "@/services/auth-services";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

const signUpSchema = z.object({
    username: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "Email é obrigatório"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().nonempty("A confirmação de senha é obrigatória")
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
})

export type SignUpFormData = z.infer<typeof signUpSchema>;

const useSignUp = () => {

    const router = useRouter();

    const {
        control, 
        handleSubmit, 
        formState: {errors, isSubmitting}} = useForm<SignUpFormData>({
            resolver: zodResolver(signUpSchema)
        });


    const onSubmit = async(data: SignUpFormData) => {
        try {
            await authService.SignUp(data.email, data.password, data.username);
            router.replace('/(app)/home/page')
        } catch (error) {
            console.log(error)
            
        }
    }    


    return{
        onSubmit,
        control,
        handleSubmit,
        errors,
        isSubmitting
    }
}

export default useSignUp;