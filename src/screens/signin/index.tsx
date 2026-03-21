import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { styles } from '@/styles/signinStyles';
import { typography } from '@/theme/typography';
import { COLORS } from '@/constants/colors';
import { router } from 'expo-router';
import { SignInFormData } from '@/hooks/useSignIn';
import { Control, UseFormHandleSubmit, FieldErrors, Controller } from 'react-hook-form';

interface SignInProps {
  onSubmit: (data: SignInFormData ) => Promise<void>,
  control: Control<SignInFormData>,
  handleSubmit: UseFormHandleSubmit<SignInFormData>,
  errors: FieldErrors<SignInFormData>,
  isSubmitting: boolean
}


export default function SignInScreen({onSubmit, control, handleSubmit, errors, isSubmitting}: SignInProps) {

  function handleRegister() {
    router.replace('/(auth)/signup/page');
  }
 

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
          <View style={styles.containerIcon}>
              <Ionicons name="checkmark-done-outline" size={30} color={COLORS.primary} />
          </View>
          <View style={styles.containerText}>
            <Text style={[styles.text1, typography.title]}>Bem vindo</Text>
            <Text style={[styles.text2, typography.text]}>Continue sua jornada rumo à produtividade consciente.</Text>
          </View>
      </View>

      <View style={styles.box2}>
        <Text style={[styles.textInput, typography.textMedium]}>Email</Text>
        <View style={[styles.containerInput, {marginBottom: 20}]}>
          <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({field:{onBlur, onChange, value}}) => (
              <View style={{flex: 1}}>
                  <TextInput
                      placeholder='Digite seu email'
                      autoCapitalize='none'
                      style={styles.input}
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                  />
                  {errors.email && <Text style={styles.textError}>{errors.email.message}</Text>}
              </View>
            )}
          />
        </View>  

        <Text style={[styles.textInput, typography.textMedium]}>Senha</Text>
        <View style={styles.containerInput}>
          <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
          <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({field: {onBlur, onChange, value}}) => (
                <View style={{flex: 1}}>
                    <TextInput
                        placeholder='********'
                        style={styles.input}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                    />

                    {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
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
          <Text style={styles.textBtn3}>{isSubmitting ? 'Carregando...' : 'Acessar Conta'}</Text>
          <Ionicons name="arrow-forward-outline" size={19} color={COLORS.back2} />
        </TouchableOpacity>

        <View style={styles.containerRegister}>
          <Text style={[styles.textBox3, typography.textMedium]}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={[styles.textBtnRegister, typography.textMedium]}>Registrar</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      <StatusBar style="light" />
    </View>
  );
}

