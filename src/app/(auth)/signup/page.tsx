import SignUpScreen from "@/screens/signup";
import useSignUp from "@/hooks/useSignUp";



export default function SignUp(){

    const {onSubmit, control, handleSubmit, errors, isSubmitting} = useSignUp()

    return(
        <SignUpScreen 
           onSubmit={onSubmit}
           control={control}
           handleSubmit={handleSubmit}
           errors={errors}
           isSubmitting={isSubmitting}
        />
    )
}