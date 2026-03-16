
import useSignIn from "@/hooks/useSignIn";
import SignInScreen from "@/screens/signin";



export default function SignIn(){

    const {onSubmit, control, handleSubmit, errors, isSubmitting} = useSignIn()

    return(
        <SignInScreen 
           onSubmit={onSubmit}
           control={control}
           handleSubmit={handleSubmit}
           errors={errors}
           isSubmitting={isSubmitting}
        />
    )
}