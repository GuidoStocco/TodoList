import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { styles } from '@/styles/signupStyles';
import { typography } from '@/theme/typography';
import { COLORS } from '@/constants/colors';
import {router} from "expo-router";
import { SignUpFormData } from '@/hooks/useSignUp';
export {SignUpFormData} from "@/hooks/useSignUp"
import {Control, FieldErrors, UseFormHandleSubmit, Controller} from "react-hook-form"


interface SignUpProps {
    onSubmit: (data: SignUpFormData) => Promise<void>,
    control: Control<SignUpFormData>,
    handleSubmit: UseFormHandleSubmit<SignUpFormData>,
    errors: FieldErrors<SignUpFormData>,
    isSubmitting: boolean
}


export default function SignUpScreen({onSubmit, control, handleSubmit, errors, isSubmitting}: SignUpProps) {


  function handleEntrar(){
    router.replace("/(auth)/signin/page")
  }




 return (
       <View style={styles.container}>
          <View style={styles.box1}>
              <View style={styles.containerIcon}>
                  <Ionicons name="lock-closed-outline" size={30} color={COLORS.primary} />
              </View>
              <View style={styles.containerText}>
                <Text style={[styles.text1, typography.title]}>Comece agora</Text>
                <Text style={[styles.text2, typography.text]}>Comece sua jornada rumo à produtividade consciente.</Text>
              </View>
          </View>

          <View style={styles.box2}>
            <Text style={[styles.textInput, typography.textMedium]}>Nome completo</Text>
            <View style={[styles.containerInput, {marginBottom: 10}]}>
              <Ionicons name="person-outline" size={20} color={COLORS.primary} />
              <Controller 
                  control={control}
                  name="username"
                  defaultValue=""
                  render={({field: {onChange, onBlur,value}}) => (
                      <View style={{flex: 1}}>
                          <TextInput 
                              placeholder='Jane Doe' 
                              style={styles.input}
                              autoCapitalize='none'
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                          />
                          {errors.username && <Text style={styles.textErrors}>{errors.username.message}</Text>}
                      </View>
                )}
              />
            </View>  

            <Text style={[styles.textInput, typography.textMedium]}>Email</Text>
            <View style={[styles.containerInput, {marginBottom: 10}]}>
              <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
              <Controller
                  name='email'
                  defaultValue=''
                  control={control}
                  render={({field: {onBlur, onChange, value}}) => (
                      <View style={{flex: 1}}>
                          <TextInput
                              placeholder='Digite seu email'
                              style={styles.input}
                              value={value}
                              onChangeText={onChange}
                              onBlur={onBlur}
                          />
                          {errors.email && <Text style={styles.textErrors}>{errors.email.message}</Text>}
                      </View>
                  )}
              />
            </View>  

            <Text style={[styles.textInput, typography.textMedium]}>Senha</Text>
            <View style={[styles.containerInput, {marginBottom: 10}]}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
              <Controller
                  name='password'
                  defaultValue=''
                  control={control}
                  render={({field: {onBlur, onChange, value}}) => (
                      <View style={{flex: 1}}>
                          <TextInput
                              placeholder='Digite sua senha'
                              style={styles.input}
                              value={value}
                              onChangeText={onChange}
                              onBlur={onBlur}
                          />
                          {errors.password && <Text style={styles.textErrors}>{errors.password.message}</Text>}
                      </View>
                  )}
              />
            </View>

            <Text style={[styles.textInput, typography.textMedium]}>Confirmar senha</Text>
            <View style={styles.containerInput}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
              <Controller
                  name='confirmPassword'
                  defaultValue=''
                  control={control}
                  render={({field: {onBlur, onChange, value}}) => (
                      <View style={{flex: 1}}>
                          <TextInput
                              placeholder='Confirme sua senha'
                              style={styles.input}
                              value={value}
                              onChangeText={onChange}
                              onBlur={onBlur}
                          />
                          {errors.confirmPassword && <Text style={styles.textErrors}>{errors.confirmPassword.message}</Text>}
                      </View>
                  )}
              />
            </View>

            <TouchableOpacity style={styles.btnForgot} onPress={() => {}}>
              <Text style={[styles.btnForgotText, typography.textMedium]}>Esqueceu a senha?</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.box3}>
            <TouchableOpacity style={styles.btnBox3} onPress={handleSubmit(onSubmit)}>
              <Text style={[styles.textBtnRegister, typography.textMedium]}>{isSubmitting ? 'Cadastrando...' : 'Cadastrar'}</Text>
              <Ionicons name="arrow-forward-outline" size={19} color={COLORS.back2} />
            </TouchableOpacity>

            <View style={styles.containerRegister}>
              <Text style={[styles.textBox3, typography.textMedium]}>Já tem uma conta?</Text>
              <TouchableOpacity onPress={handleEntrar}>
                <Text style={[styles.textBtnLogin, typography.textMedium]}>Entrar</Text>
              </TouchableOpacity>
            </View>
            
          </View>
    </View>
  );
}