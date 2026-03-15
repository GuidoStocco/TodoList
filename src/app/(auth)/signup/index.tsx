import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { styles } from '@/styles/signupStyles';
import { typography } from '@/theme/typography';
import { COLORS } from '@/constants/colors';
import {router} from "expo-router";
import {auth} from '@/services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function Signup() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleEntrar(){
    router.push("/(auth)/signin")
  }

  async function handleCadastrar(){
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      router.push("/(auth)/signin");
    } catch (error) {
      console.error("Error creating user:", error);
    }
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
              <TextInput placeholder='Jane Doe' style={styles.input}/>
            </View>  

            <Text style={[styles.textInput, typography.textMedium]}>Email</Text>
            <View style={[styles.containerInput, {marginBottom: 10}]}>
              <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
              <TextInput placeholder='Digite seu email' style={styles.input}/>
            </View>  

            <Text style={[styles.textInput, typography.textMedium]}>Senha</Text>
            <View style={styles.containerInput}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
              <TextInput placeholder='Digite sua senha' style={styles.input} />
            </View>

            <TouchableOpacity style={styles.btnForgot} onPress={() => {}}>
              <Text style={[styles.btnForgotText, typography.textMedium]}>Esqueceu a senha?</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.box3}>
            <TouchableOpacity style={styles.btnBox3} onPress={handleCadastrar}>
              <Text style={styles.textBtn3}>Cadastrar</Text>
              <Ionicons name="arrow-forward-outline" size={19} color={COLORS.back2} />
            </TouchableOpacity>

            <View style={styles.containerRegister}>
              <Text style={[styles.textBox3, typography.textMedium]}>Já tem uma conta?</Text>
              <TouchableOpacity onPress={handleEntrar}>
                <Text style={[styles.textBtnRegister, typography.textMedium]}>Entrar</Text>
              </TouchableOpacity>
            </View>
            
          </View>
    </View>
  );
}